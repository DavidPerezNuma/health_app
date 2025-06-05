// health_app/constants.js
const HIGH_TEMPERATURE_THRESHOLD = 37.5; // Celsius
const SYMPTOMS_REQUIRING_NO_WORK = ["fiebre", "tos persistente", "pérdida del gusto", "pérdida del olfato"];
const DAYS_TO_MONITOR_AFTER_CONTACT = 14;

module.exports = {
    HIGH_TEMPERATURE_THRESHOLD,
    SYMPTOMS_REQUIRING_NO_WORK,
    DAYS_TO_MONITOR_AFTER_CONTACT
};