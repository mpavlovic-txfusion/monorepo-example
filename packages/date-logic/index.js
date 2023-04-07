module.exports = function getDate(
    locale = 'en-UK',
    options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
) {
    return new Date().toLocaleDateString(locale, options);
}