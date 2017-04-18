const request = require('superagent');
const cheerio = require('cheerio');

module.exports = (name, size, mood) => {
    name = encodeURIComponent(name);
    size = size || 5;
    mood = mood || 1;
    return request
        .get(`http://www.sunnyneo.com/petimagefinder.php?name=${name}&size=${size}&mood=${mood}`)
        .then(response => {
            const $ = cheerio.load(response.text);
            const link = $('textarea').first().text();
            return link;
        });
};
