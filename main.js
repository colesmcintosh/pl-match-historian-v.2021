const plObj = require(`./pl.json`); 

const generateMessage = () => {
    const randI = Math.floor(Math.random() * 760);
    const matchArray = plObj.matches;
    let homeTeam = matchArray[randI].team1;
    let awayTeam = matchArray[randI].team2;
    let matchDay = matchArray[randI].round;
    let matchDate = matchArray[randI].date;
    return `${homeTeam} played against ${awayTeam} on ${matchDay} (${matchDate})`;
    };

    try {
    console.log(generateMessage());
    } catch (error) {
    console.log('Probably an international break...');
    }

    
