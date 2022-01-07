// load in the dataset
const plObj = require(`./pl.json`); 

// grabs an a random selection from matches and returns who was the home team, away team, date, and matchday
const generateMessage = () => {
    const randI = Math.floor(Math.random() * 760);
    const matchArray = plObj.matches;
    let homeTeam = matchArray[randI].team1;
    let awayTeam = matchArray[randI].team2;
    let matchDay = matchArray[randI].round;
    let matchDate = matchArray[randI].date;
    return `On ${matchDay} (${matchDate}) ${homeTeam} played at home against ${awayTeam}`;
    };

// some missing pieces in the dataset so I have a "try...catch" here to catch any errors
try {
    console.log(generateMessage());
} catch (error) {
    const responses = ['Looks like an international break was happening then...', 'The league was stopped due to COVID-19 at this time.', 'Champions league was on that day.', 'Europa League was on that day.', 'FA cup...or the Carabao cup...I lost track of the cups again', 'FA cup']
    console.log(responses[Math.ceil(Math.random() * responses.length-1)]);
};

    
