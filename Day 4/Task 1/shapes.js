//Task One

class shape{
    constructor(){
        if(this.constructor === shape){
            throw new Error ("Cannot make instance from abstract class");
        }
    }
    area() {
    throw new Error("Method 'area()' must be implemented.");
  }

  perimeter() {
    throw new Error("Method 'perimeter()' must be implemented.");
  }

  toString() {
    return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
  }
}

export class rectangle extends shape{
     constructor(length,width){
        super();
        this.width = width;
        this.length = length;
    }
    perimeter(){
        return 2*(this.length + this.width);
    }
    area(){
        return this.length * this.width;
    }
    toString() {
    return `Rectangle - ${super.toString()}`;
  }
}

export class square extends shape{
    constructor(side){
        super();
        this.side = side;
    }
    area() {
        return this.side ** 2;
    }

  perimeter() {
        return 4 * this.side;
  }

  toString() {
        return `Square - ${super.toString()}`;
  }
}
export class circle extends shape{
    constructor(radius){
        super();
        this.radius = radius;
    }
    perimeter(){
        return  2*Math.PI*this.radius;
    }
    area(){
        return Math.PI*(this.radius**2);
    }
    toString() {
    return `Circle - ${super.toString()}`;
  }
}
