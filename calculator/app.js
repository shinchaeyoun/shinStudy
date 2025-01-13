$(function () {
    calculator();
});

function calculator() {
    let active = true;
    let item = $('.calculator .grid-container div');
    let subDis = $('.display span');
    let display = $('.display p');
    let resultText = [];
    let text = '';

    let checkPreNum = false;
    let finish = false;

    item.off().on('click', function () {
        let type = $(this).data('item');
        let num = $(this).text();
        if (!active) return false;
        type == 'number' ? cal.numberFn(num) : cal.operatorFn($(this).text());
        if(type == 'reset') cal.reset();
        if(type == 'delete') cal.delete();
    });

    //    $('.on').off().on("click", function () {
    //      active = true;
    //      display.text(0)
    //    });
    //    $('.off').off().on("click", function () {
    //      active = false;
    //      cal.reset();
    //    });

    let cal = {
        result: 0,
        preNum: 0,
        nextNum: [],
        op: null,
        preOp: null,
        setNum: function (pos) {
            if(pos == subDis) resultText.pop();
            text = resultText.join('');
            pos.text(text);
        },
        reset: function () {
            resultText = [];
            cal.setNum(display);
            finish = false;
        },
        delete: function () {
            console.log('delete');
            
            resultText.pop();
            cal.setNum(display);
        },
        numberFn: function (val) {
            if (finish) cal.reset();
            let num = Number(val);
            resultText.push(num);
            cal.setNum(display);
        },
        operatorFn: function (op) {
            console.log('operatorFn',op);
            
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
            } else if (lastEle == 'c' || lastEle == 'ac') {
                console.log('else if');
                
            }
            resultText.push(op);

            if (op == '=') {
                checkPreNum = false;
                cal.resultFn();
            } else if ( op == 'c') {
                cal.delete();
            }
            cal.setNum(display);

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

            // subDis.text(resultText)
            cal.setNum(subDis);
            cal.reset();
            resultText = [cal.result];
            cal.setNum(display);
            finish = true;
        }
    };
};