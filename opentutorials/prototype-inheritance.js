function first() {
    var superObj = { superVal: 'super' }
    var subObj = { subVal: 'sub' }
    subObj.__proto__ = superObj;
    console.log('superObj.subVal', subObj.subVal);
    console.log('superObj.superVal', subObj.superVal);
    subObj.superVal = 'sub';
    console.log('superObj.superVal', superObj.superVal);
    console.log('subObj.superVal', subObj.superVal);
};

var superObj = { superVal: 'super' };
var subObj = Object.create(superObj);
subObj.subVal = 'sub';
debugger;
console.log('subObj.subVal =>', subObj.subVal);
console.log('subObj.superVal =>', subObj.superVal);
subObj.superVal = 'sub';
console.log('superObj.superVal =>', superObj.superVal);

var kim = {
    name: 'kim',
    first: 10, second: 20,
    sum:function(){return this.first + this.second}
}

var lee = Object.create(kim);
lee.name = 'lee';
lee.first = 10;
lee.second = 10;
lee.avg = function (){
    return (this.first + this.second) / 2;
}