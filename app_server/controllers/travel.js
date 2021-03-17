const fs = require('fs');
const trips = JSON.parse(fs.readFileSync('./data/trips.json', 'utf8')); //not best practice. Idea;;y this owuld be read once and stored in cache rather than reading during every iteration

/* GET travel view */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' - Travel';
    res.render('travel', {title: pageTitle, trips});
};

module.exports = {
    travel
};