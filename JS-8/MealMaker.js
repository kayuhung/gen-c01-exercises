const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],
    },
    get appetizers() {
        return this._courses.appetizers
    },
    set appetizers(appetizers) {
        this._courses.appetizers = appetizers
    },
    get mains() {
        return this._courses.mains
    },
    set mains(mains) {
        this._courses.mains = mains
    },
    get desserts() {
        return this._courses.desserts
    },
    set desserts(desserts) {
        this._courses.desserts = desserts
    },

    get courses() {
        return {
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts,
        };
    },

    addDishToCourse(courseName, dishName, dishPrice) {
        const dish = {
            name: dishName,
            price: dishPrice,
        };
        return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains');
        const dessert = this.getRandomDishFromCourse('desserts');
        const totalPrice = (+appetizer.price) + (+main.price) + (+dessert.price);
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}.The price is $${totalPrice}.`
    }
};
menu.addDishToCourse('appetizers', 'fries', '10.5');
menu.addDishToCourse('appetizers', 'chips', '10.5');
menu.addDishToCourse('appetizers', 'popcorn', '12');

menu.addDishToCourse('mains', 'cheeseburger', '20.5');
menu.addDishToCourse('mains', 'pizza', '30.5');
menu.addDishToCourse('mains', 'spaghetti', '25.5');

menu.addDishToCourse('desserts', 'cheesecake', '15.5');
menu.addDishToCourse('desserts', 'ice cream', '10.5');
menu.addDishToCourse('desserts', 'apple pie', '8.5');

let meal = menu.generateRandomMeal();
console.log(meal);