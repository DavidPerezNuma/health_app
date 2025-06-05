// health_app/app.js
const healthCareService = require('./services');

function mainApp() {
    console.log("Bienvenido al Sistema de Control de Salud para Empleados");

    // --- Ejemplo de Definición de Variables y Constantes ---
    let appRunning = true; // Variable booleana
    const companyName = "Mi Empresa Segura"; // Constante de tipo string
    let today = new Date().toISOString().slice(0, 10); // Variable de tipo string

    console.log(`Empresa: ${companyName}, Fecha: ${today}`);

    // 1. Registrar empleados
    healthCareService.registerNewEmployee(
        "E001", "Ana Pérez", "Calle Falsa 123", "Chapinero", ["Esposo", "Hijo"],
        "Saludable", false, "N/A", ["Hipertensión"], false
    );
    healthCareService.registerNewEmployee(
        "E002", "Luis Gómez", "Avenida Siempre Viva 742", "Usaquén", ["Solo"],
        "Buen estado", true, "Leve", [], true
    );
    healthCareService.registerNewEmployee(
        "E003", "Maria Rodriguez", "Carrera 10 #20-30", "Kennedy", ["Madre", "Hermana"],
        "Algunas alergias", false, "N/A", [], false
    );

    // 2. Registrar estado de salud diario
    healthCareService.recordDailyHealth("E001", "2023-04-28", 36.5, "Bien", false, []);
    healthCareService.recordDailyHealth("E001", "2023-04-29", 37.8, "Un poco cansada", false, ["dolor de cabeza"]);

    healthCareService.recordDailyHealth("E002", "2023-04-28", 37.0, "Bien", false, []);
    healthCareService.recordDailyHealth("E002", "2023-04-29", 38.5, "Malestar general, fiebre", true, ["fiebre", "tos persistente"]);

    healthCareService.recordDailyHealth("E003", "2023-04-28", 36.0, "Excelente", false, []);
    healthCareService.recordDailyHealth("E003", "2023-04-29", 36.2, "Me siento bien", false, []);

    // 3. Listar todos los empleados
    healthCareService.listAllEmployees();

    // 4. Verificar si pueden ir a trabajar (Condicionales [cite: 12])
    console.log("\n--- Verificación de Elegibilidad para Trabajar ---");
    const employeeIds = ["E001", "E002", "E003", "E004"]; // E004 no existe para probar
    // Ciclo para verificar elegibilidad
    for (let id of employeeIds) {
        console.log(healthCareService.canEmployeeWork(id));
    }
    console.log("-----------------------------------------------\n");

    // 5. Mostrar "Matriz" de datos de salud para un empleado (Vectores y Matrices)
    healthCareService.displayEmployeeHealthMatrix("E001");
    healthCareService.displayEmployeeHealthMatrix("E002");

    // --- Simulación de un menú simple (ciclo y condicionales) ---
    let userInput = "";
    const menuOptions = ["salir", "listar", "verificar E001"];
    let selectedOption = "";

    console.log("\n--- Ejemplo de Ciclo de Menú (simulado) ---");
    let attempts = 0;
    // Ciclo de ejemplo
    while(selectedOption !== "salir" && attempts < menuOptions.length) {
        userInput = menuOptions[attempts];
        console.log(`Opción simulada: ${userInput}`);

        // Condicionales para manejar la opción [cite: 12]
        if (userInput === "listar") {
            healthCareService.listAllEmployees();
            selectedOption = "listar";
        } else if (userInput.startsWith("verificar")) {
            const empIdToVerify = userInput.split(" ")[1];
            if(empIdToVerify) {
                console.log(healthCareService.canEmployeeWork(empIdToVerify));
            }
            selectedOption = "verificar";
        } else if (userInput === "salir") {
            selectedOption = "salir";
            console.log("Saliendo de la aplicación...");
        } else {
            console.log("Opción no válida.");
        }
        attempts++;
        if (attempts >= menuOptions.length && selectedOption !== "salir") {
            console.log("Fin de opciones simuladas, saliendo...");
            selectedOption = "salir";
        }
    }
     console.log("-----------------------------------------\n");

    console.log("Operación finalizada.");
}

mainApp();