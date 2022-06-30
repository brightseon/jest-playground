function Triangle(side1, side2, side3) {
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.isTriangle =
        this.side1 > this.side2 + this.side3 ||
        this.side2 > this.side1 + this.side3 ||
        this.side3 > this.side1 + this.side2
            ? 'not a triangle'
            : 'this is a triangle';
    this.isScalene =
        this.side1 !== this.side2 && this.side1 !== this.side3 && this.side2 !== this.side3
            ? 'is scalene'
            : 'not scalene';
    this.isEquilateral =
        this.side1 === this.side2 && this.side1 === this.side3
            ? 'is equilateral'
            : 'not equilateral';
}

Triangle.prototype.checkType = function () {
    if (
        this.side1 > this.side2 + this.side3 ||
        this.side2 > this.side1 + this.side3 ||
        this.side3 > this.side1 + this.side2
    ) {
        return 'not a triangle';
    } else if (
        this.side1 !== this.side2 &&
        this.side1 !== this.side3 &&
        this.side2 !== this.side3
    ) {
        return 'scalene triangle';
    } else if (
        this.side1 === this.side2 ||
        this.side1 === this.side3 ||
        this.side2 === this.side3
    ) {
        return 'isosceles triangle';
    }
};

export default Triangle;
