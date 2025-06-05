// health_app/repository.js
// Note: Employee entity is not strictly needed here if we just store the objects,
// but good for clarity if we were to instantiate within repository.
// For this example, Employee objects are created in services.js and passed in.

const employeeRepository = {
    employees: [], // This array will store Employee objects. It acts as a vector of employees.

    /**
     * Adds an employee to the repository.
     * @param {object} employee - The employee object to add.
     */
    addEmployee: function(employee) {
        this.employees.push(employee);
        console.log(`Empleado ${employee.name} agregado.`);
    },

    /**
     * Finds an employee by ID.
     * @param {string} employeeId - The ID of the employee to find.
     * @returns {object|undefined} The employee object or undefined if not found.
     */
    findEmployeeById: function(employeeId) {
        // Loop to find employee
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i].id === employeeId) {
                return this.employees[i];
            }
        }
        return undefined;
    },

    /**
     * Adds a daily health log to a specific employee.
     * @param {string} employeeId - The ID of the employee.
     * @param {object} healthLog - The health log to add.
     */
    addHealthLogToEmployee: function(employeeId, healthLog) {
        const employee = this.findEmployeeById(employeeId);
        if (employee) {
            employee.dailyHealthLogs.push(healthLog);
            // The collection of dailyHealthLogs across all employees can be conceptualized as a matrix
            console.log(`Registro de salud agregado para ${employee.name} en fecha ${healthLog.date}.`);
        } else {
            console.log(`Error: Empleado con ID ${employeeId} no encontrado.`);
        }
    },

    /**
     * Gets all employees.
     * @returns {object[]} A list of all employees.
     */
    getAllEmployees: function() {
        return this.employees;
    }
};

module.exports = employeeRepository;