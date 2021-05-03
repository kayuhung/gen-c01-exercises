const team = {
    _players: [{
            firstName: 'Pete',
            lastName: 'Wheeler',
            age: 54
        },
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 20
        },
        {
            firstName: 'Jeff',
            lastName: 'Hung',
            age: 18
        }
    ],
    _games: [
        { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 }, { opponent: 'ABC', teamPoints: 24, opponentPoints: 18 }, { opponent: 'KKK', teamPoints: 0, opponentPoints: 20 }
    ],

    get players() {
        return this._players
    },

    get games() {
        return this._games
    },

    addPlayer(firstName, lastName, age) {
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

    addGame(opponent, teamPoints, opponentPoints) {
        let game = {
            opponent: opponent,
            teamPoints: teamPoints,
            opponentPoints: opponentPoints
        };
        this.games.push(game);
    }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

console.log(team.players)