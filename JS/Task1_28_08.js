class Shape {
    constructor(name) {
        this.name = name;
    }

    getShapeName() {
        return this.name;

    }

    calculateArea() {
        return 0;
    }

    calculatePerimeter() {
        return 0;
    }
}

 class Cvadrat extends Shape {
    constructor(name, side) {
        super(name);
        this.side = side;
    }

    calculateArea() {
        return this.side * this.side;
    }

    calculatePerimeter() {
        return this.side * 4;
    }
}

console.log(new Cvadrat('Квадрат', 5).calculateArea());

console.log(new Cvadrat('Квадрат', 5).calculatePerimeter());


class Pryamougolnik extends Shape {
    constructor(name, side1, side2) {
        super(name);
        this.side1 = side1;
        this.side2 = side2;
    }

    calculateArea() {
        return this.side1 * this.side2;
    }

    calculatePerimeter() {
        return (this.side1 + this.side2) * 2;
    }
}

console.log(new Pryamougolnik('Прямоугольник', 5, 10).calculateArea());

console.log(new Pryamougolnik('Прямоугольник', 5, 10).calculatePerimeter());

class Trugolnik extends Shape {
    constructor(name, side1, side2, side3) {
        super(name);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    calculateArea() {
        let p = (this.side1 + this.side2 + this.side3) / 2;
        return Math.sqrt(p * (p - this.side1) * (p - this.side2) * (p - this.side3));
    }
    

    calculatePerimeter() {
        return this.side1 + this.side2 + this.side3;
    }
}

console.log(new Trugolnik('Треугольник', 5, 10, 7).calculatePerimeter());

console.log(new Trugolnik('Треугольник', 5, 10, 7).calculateArea());