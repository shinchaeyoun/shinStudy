let num = 2;

function multiplicationTable(num){
    let arr = []
    for (let i = 1; i < 10; i++) {
        let result = `${num} * ${i} = ${num * i}`;
        console.log(result);
    };
};

multiplicationTable(num)