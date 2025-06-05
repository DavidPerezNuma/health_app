// health_app/entities.js

/**
 * Represents an Employee.
 * @param {string} id - Unique identifier for the employee.
 * @param {string} name - Employee's full name.
 * @param {string} address - Employee's home address.
 * @param {string} locality - Locality where the employee lives.
 * @param {string[]} cohabitants - Names or count of people living with the employee[cite: 7].
 * @param {string} currentHealthStatus - General current health status[cite: 8].
 * @param {boolean} hasHadCovid - If the employee has had COVID-19[cite: 8].
 * @param {string} covidSeverity - Severity if they had COVID-19 (e.g., 'mild', 'severe', 'asymptomatic')[cite: 8].
 * @param {string[]} comorbidities - List of employee's comorbidities[cite: 9].
 * @param {boolean} familyHasComorbidities - If any family member has comorbidities[cite: 9].
 */
function Employee(id, name, address, locality, cohabitants, currentHealthStatus, hasHadCovid, covidSeverity, comorbidities, familyHasComorbidities) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.locality = locality;
    this.cohabitants = cohabitants; // Vector
    this.currentHealthStatus = currentHealthStatus;
    this.hasHadCovid = hasHadCovid;
    this.covidSeverity = covidSeverity;
    this.comorbidities = comorbidities; // Vector
    this.familyHasComorbidities = familyHasComorbidities;
    this.dailyHealthLogs = []; // Vector to store daily health records
}

/**
 * Represents a Daily Health Log for an employee.
 * @param {string} date - Date of the log (e.g., 'YYYY-MM-DD').
 * @param {number} temperature - Employee's temperature[cite: 10].
 * @param {string} feeling - How the employee feels[cite: 10].
 * @param {boolean} hadContactWithPositive - If they had recent contact with a positive case[cite: 10].
 * @param {string[]} symptoms - Any symptoms experienced.
 */
function DailyHealthLog(date, temperature, feeling, hadContactWithPositive, symptoms) {
    this.date = date;
    this.temperature = temperature;
    this.feeling = feeling;
    this.hadContactWithPositive = hadContactWithPositive;
    this.symptoms = symptoms; // Vector
}

module.exports = {
    Employee,
    DailyHealthLog
};