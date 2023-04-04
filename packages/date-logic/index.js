module.exports = function getDate(
    locale = 'en-US',
    options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' }
) {
    return new Date().toLocaleDateString(locale, options);
}