class School {
    constructor(name, numberOfStudents, level) {
        this._name = name;
        this._numberOfStudents = numberOfStudents;
        this._level = level;
    };
    get name() {
        return this._name
    };
    get numberOfStudents() {
        return this._numberOfStudents
    };
    get level() {
        return this._level
    };
    set numberOfStudends(num) {
        if (typeof num === 'number') {
            this._numberOfStudents = num;
        } else {
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    };
    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    };
    static pickSubstituteTeacher(substituteTeachers) {
        return substituteTeachers[Math.floor(Math.random() * substituteTeachers.length)];
    };
};

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
        let level = 'primary'
        super(name, numberOfStudents, level);
        this._pickupPolicy = pickupPolicy;
    }
    get pickupPolicy() {
        return this._pickupPolicy
    }
    set pickupPolicy(policy) {
        if (typeof policy === 'string') {
            this._pickupPolicy = policy;
        } else {
            console.log('You must assign a string');
        }
    }
}

class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }
    get sportsTeams() {
        return this._sportsTeams
    }
}

class MiddleSchool extends School {
    constructor(name, numberOfStudents, averageTestScores) {
        super(name, numberOfStudents, level);
        this._averageTestScores = averageTestScores;
    }
    get averageTestScores() {
        return this._averageTestScores
    }
    static getAverageTestScores(scores) {
        return scores.reduce((acc, cur) => {
            acc + cur
        });
    };
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
console.log(alSmith.sportsTeams)