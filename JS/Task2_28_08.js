class Goods {
    constructor(name, price, count) {
        this.name = name;
        this.price = price;
        this.count = count;
    }


    getInfo() {
        return `Name: ${this.name}, Price: ${this.price}, Count: ${this.count}`;
    }
}


class Book extends Goods {
    constructor(name, price, count, author, genre) {
        super(name, price, count);
        this.author = author;
        this.genre = genre;
    }

   
    getInfo() {
        return `Name: ${this.name}, Price: ${this.price}, Count: ${this.count}, Author: ${this.author}, Genre: ${this.genre}`;
    }
}


class Phone extends Goods {
    constructor(name, price, count, model) {
        super(name, price, count);
        this.model = model;
    }

   
    getInfo() {
        return `Name: ${this.name}, Price: ${this.price}, Count: ${this.count}, Model: ${this.model}`;
    }
}


class Fridge extends Goods {
    constructor(name, price, count, model) {
        super(name, price, count);
        this.model = model;
    }

    
    getInfo() {
        return `Name: ${this.name}, Price: ${this.price}, Count: ${this.count}, Model: ${this.model}`;
    }
}


const goods = [
    new Book('Crime and Punishment', 100, 10, 'Dostoevsky', 'Novel'),
    new Phone('iPhone', 300, 5, 'iPhone 12'),
    new Fridge('Samsung Fridge', 500, 2, 'Samsung RF28')
];


goods.forEach(good => console.log(good.getInfo()));

