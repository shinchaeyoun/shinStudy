$(function () {
    calculator();
});

function calculator() {
    console.log('dd');
    
    let active = true;
    let item = $('.calculator .grid-container div');
    let subDis = $('.display span');
    let display = $('.display p');
    let resultText = [];
    let text = '';

    let checkPreNum = false;
    let finish = false;

    item.off().on('click', function () {
        console.log('a');
        let type = $(this).data('item');
        let num = $(this).text();
        if (!active) return false;
        type == 'number' ? cal.numberFn(num) : cal.operatorFn($(this).text());
    });

    //    $('.on').off().on("click", function () {
    //      active = true;
    //      display.text(0)
    //    });
    //    $('.off').off().on("click", function () {
    //      active = false;
    //      cal.reset();
    //    });
    //    $('.c').off().on("click", function () {
    //      cal.delete();
    //    });
    $('.ac').off().on("click", function () {
        cal.reset();
    });

    let cal = {
        result: 0,
        preNum: 0,
        nextNum: [],
        op: null,
        preOp: null,
        setNum: function () {
            text = resultText.join('');
            display.text(text);
        },
        reset: function () {
            resultText = [];
            cal.setNum();
            finish = false;
        },
        delete: function () {
            resultText.pop();
            cal.setNum();
        },
        numberFn: function (val) {
            if (finish) cal.reset();
            let num = Number(val);
            resultText.push(num);
            cal.setNum();
        },
        operatorFn: function (op) {
            let lastEle = resultText[resultText.length - 1];
            let prev, next
            cal.op = op;

            if (!checkPreNum) {
                prev = resultText.join('');
                cal.preNum = Number(prev);
                checkPreNum = true
            } else {
                let nextIdx;
                resultText.forEach((item, idx) => {
                    if (typeof (item) == 'string') nextIdx = idx;
                });
                next = resultText.slice(nextIdx + 1, resultText.length);
                cal.nextNum = Number(next.join(''));
            };

            if (typeof (lastEle) == 'string') {
                resultText.pop();
            }
            resultText.push(op);

            if (op == '=') {
                checkPreNum = false;
                cal.resultFn();
            }
            cal.setNum();

            cal.preOp = cal.op;
        },
        resultFn: function () {
            switch (cal.preOp) {
                case '+':
                    cal.result = cal.preNum + cal.nextNum
                    break;
                case '-':
                    cal.result = cal.preNum - cal.nextNum
                    break;
                case '×':
                    cal.result = cal.preNum * cal.nextNum
                    break;
                case '÷':
                    cal.result = cal.preNum / cal.nextNum
                    break;
            };

            cal.reset();
            resultText = [cal.result];
            cal.setNum();
            finish = true;
        }
    };
};