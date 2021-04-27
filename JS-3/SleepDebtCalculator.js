const getSleepHours = (day) => {
    if (day == 'monday') {
        return 7
    } else if (day == 'tuesday') {
        return 6
    } else if (day == 'wednesday') {
        return 6
    } else if (day == 'thursday') {
        return 6
    } else if (day == 'friday') {
        return 7
    } else if (day == 'saturday') {
        return 9
    } else {
        return 8
    }
};

console.log(getSleepHours('sunday'));

const getActualSleepHours = () => {
    return 7 + 6 + 6 + 6 + 7 + 9 + 8;
}

console.log(getActualSleepHours())

const getIdealSleepHours = idealHours => {
    return idealHours * 7;
};

console.log(getIdealSleepHours())

const calculateSleepDebt = () => {

    let idealHours = getIdealSleepHours(8);
    let actualSleepHours = getActualSleepHours();
    if (idealHours == actualSleepHours) {
        console.log('You got the perfect amount of sleep.')
    } else if (idealHours > actualSleepHours) {
        console.log('You got ' + (idealHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest.')
    } else if (idealHours < actualSleepHours) {
        console.log('You got ' + (actualSleepHours - idealHours) + ' hour(s) more sleep than you needed this week. Do not sleep too much')
    };

};

console.log(calculateSleepDebt());