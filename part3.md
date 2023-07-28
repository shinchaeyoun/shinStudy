# 20.Destructuring

var arr = [2,3,4];

* array 데이터를 전부 변수에 담으려면?
var [a,b,c] = [2,3,4];

* array destructuring
* 직관적으로 변수를 만들 수 있음

var [a,b,c=10] = [2,3] // c=10;
var [a,b,c=10] = [] // a=undefined;

- 등호로 기본값 지정 가능

