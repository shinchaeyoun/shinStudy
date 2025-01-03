var kim = {name:'Kim', first: 10, second: 20};
var lee = {name:'lee', first: 10, second: 10};

function sum(){
    return this.first + this.second;
}

console.log('sum.call(kim)', sum.call(kim));
console.log('sum.call(kim)', sum.call(lee));

function sum(perfix){
    return perfix+(this.first + this.second);
}

console.log('sum.call(kim)', sum.call(kim,'=>')); //apply
console.log('sum.call(kim)', sum.call(lee,':'));

var kimSum = sum.bind(kim, '-> ');
console.log('kimSum()', kimSum());
