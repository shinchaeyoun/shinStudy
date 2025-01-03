var kim = {
    name: 'kim',
    first: 10,
    second: 20,
    sum: function () {
        return this.first + this.second;
    }
}

var lee = {
    name: 'kim',
    first: 10,
    second: 10,
    third: 10,
    sum: function () {
        return this.first + this.second + this.third;
    }
}
//console.log("kim.sum(kim.first, kim.second)", kim.sum(kim.first, kim.second));
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());

var d1 = new Date('2025-01-03');

console.log('d1', d1.getFullYear());
console.log('d1', d1.getMonth() + 1);


function Person() {
    this.name= "kim";
    this.first=10;
    this.second=20;
    this.third=30;
    this.sum =function (){
        return this.first + this.second + this.third;
    }
}


var kim = new Person('kim', 10, 20);
var lee = new Person('lee', 10, 10);
console.log("kim.sum()", kim.sum());
console.log("lee.sum()", lee.sum());