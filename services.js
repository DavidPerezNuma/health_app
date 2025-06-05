// health_app/services.js
const { Employee, DailyHealthLog } = require('./entities');
const employeeRepository = require('./repository');
const { HIGH_TEMPERATURE_THRESHOLD, SYMPTOMS_REQUIRING_NO_WORK } = require('./constants');

const healthCareService = {
    /**
     * Registers a new employee.
     */
    registerNewEmployee: function(id, name, address, locality, cohabitants, currentHealthStatus, hasHadCovid, covidSeverity, comorbidities, familyHasComorbidities) {
        const newEmployee = new Employee(id, name, address, locality, cohabitants, currentHealthStatus, hasHadCovid, covidSeverity, comorbidities, familyHasComorbidities);
        employeeRepository.addEmployee(newEmployee);
    },

    /**
     * Records a daily health status for an employee.
     */
    recordDailyHealth: function(employeeId, date, temperature, feeling, hadContactWithPositive, symptoms) {
        const healthLog = new DailyHealthLog(date, temperature, feeling, hadContactWithPositive, symptoms);
        employeeRepository.addHealthLogToEmployee(employeeId, healthLog);
    },

    /**
     * Determines if an employee can go to work based on their latest health log and profile.
     * @param {string} employeeId - The ID of the employee.
     * @returns {string} A message indicating if the employee can work and why.
     */
    canEmployeeWork: function(employeeId) {
        const employee = employeeRepository.findEmployeeById(employeeId);
        if (!employee) {
            return `Empleado con ID ${employeeId} no encontrado.`;
        }

        if (employee.dailyHealthLogs.length === 0) {
            return `${employee.name} no tiene registros de salud diarios. No se puede determinar elegibilidad.`;
        }

        // Get the latest health log
        const latestLog = employee.dailyHealthLogs[employee.dailyHealthLogs.length - 1];
        let reasonsNotToWork = [];

        // Conditional checks [cite: 12]
        if (latestLog.temperature > HIGH_TEMPERATURE_THRESHOLD) { // Checks temperature [cite: 10]
            reasonsNotToWork.push(`temperatura alta (${latestLog.temperature}°C)`);
        }

        if (latestLog.hadContactWithPositive) { // Checks contact with infected people [cite: 10]
            reasonsNotToWork.push("contacto reciente con un caso positivo de COVID-19");
        }

        if (latestLog.symptoms && latestLog.symptoms.length > 0) {
            const criticalSymptoms = latestLog.symptoms.filter(symptom =>
                SYMPTOMS_REQUIRING_NO_WORK.includes(symptom.toLowerCase())
            );
            if (criticalSymptoms.length > 0) {
                reasonsNotToWork.push(`presencia de síntomas críticos: ${criticalSymptoms.join(", ")}`);
            }
        }
        
        // Checks how the worker feels [cite: 10]
        if (latestLog.feeling && latestLog.feeling.toLowerCase() !== "bien" && latestLog.feeling.toLowerCase() !== "me siento bien") {
             if (!reasonsNotToWork.some(reason => reason.includes("síntomas críticos"))) {
                 reasonsNotToWork.push(`reportó no sentirse bien (${latestLog.feeling})`);
            }
        }

        if (reasonsNotToWork.length > 0) {
            return `${employee.name} NO debe ir a trabajar. Razones: ${reasonsNotToWork.join("; ")}.`;
        } else {
            // Additional check for comorbidities [cite: 9]
            if (employee.comorbidities.length > 0) {
                return `${employee.name} PUEDE ir a trabajar, pero tiene comorbilidades (${employee.comorbidities.join(", ")}). Considere teletrabajo si es posible y si las políticas de la empresa lo indican.`;
            }
            return `${employee.name} PUEDE ir a trabajar.`;
        }
    },

    /**
     * Lists all registered employees and their basic info.
     */
    listAllEmployees: function() {
        const employees = employeeRepository.getAllEmployees();
        if (employees.length === 0) {
            console.log("No hay empleados registrados.");
            return;
        }
        console.log("\n--- Lista de Empleados ---");
        // Loop to iterate over employees
        employees.forEach(emp => {
            console.log(`ID: ${emp.id}, Nombre: ${emp.name}, Localidad: ${emp.locality}`); // Basic personal data [cite: 7]
            if (emp.dailyHealthLogs.length > 0) {
                console.log(`  Último registro de salud (${emp.dailyHealthLogs[emp.dailyHealthLogs.length - 1].date}): Temp: ${emp.dailyHealthLogs[emp.dailyHealthLogs.length - 1].temperature}°C`);
            } else {
                console.log("  Sin registros de salud diarios.");
            }
        });
        console.log("--------------------------\n");
    },

    /**
     * Displays all health logs for a specific employee, conceptually a "matrix" view.
     * @param {string} employeeId
     */
    displayEmployeeHealthMatrix: function(employeeId) {
        const employee = employeeRepository.findEmployeeById(employeeId);
        if (!employee) {
            console.log(`Empleado con ID ${employeeId} no encontrado.`);
            return;
        }
        console.log(`\n--- Matriz de Salud para ${employee.name} (ID: ${employee.id}) ---`);
        if (employee.dailyHealthLogs.length === 0) {
            console.log("No hay registros de salud para este empleado.");
            return;
        }
        console.log("Fecha      | Temp. | Se siente | Contacto COVID | Síntomas");
        console.log("-----------|-------|-----------|----------------|--------------------");
        // Loop to iterate over health logs (vector for the employee)
        employee.dailyHealthLogs.forEach(log => {
            const symptomsString = log.symptoms.join(', ') || 'Ninguno';
            console.log(`${log.date} | ${log.temperature}°C  | ${log.feeling.padEnd(9)} | ${log.hadContactWithPositive ? 'Sí'.padEnd(14) : 'No'.padEnd(14)} | ${symptomsString}`);
        });
        console.log("-------------------------------------------------------\n");
    }
};

module.exports = healthCareService;