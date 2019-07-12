/*

*/


function start(e) {
    var name = [
        {
            char: '楊',
            big5: 'B7A8',
            cns: '1-644E',
            unicode: '694A '
        },
        {
            char: '鎮',
            big5: 'C2ED',
            cns: '1-7758',
            unicode: '93AE '
        },
        {
            char: '宇',
            big5: 'A674',
            cns: '1-4775',
            unicode: '5B87 '
        }

    ];
    var ele =document.getElementById("div1");

    for(var i=0;i<3;i++){
        ele.innerHTML += name[i].char;
        ele.innerHTML += 'big5=';
        ele.innerHTML += name[i].big5;
        ele.innerHTML += 'cns=';
        ele.innerHTML += name[i].cns;
        ele.innerHTML += 'unicode=';
        ele.innerHTML += name[i].unicode;
        ele.innerHTML += '<br>';

    }

}

/*
https://www.w3schools.com/jsref/met_document_addeventlistener.asp

document.addEventListener(event, function, useCapture)

true - The event handler is executed in the capturing phase
false- Default. The event handler is executed in the bubbling phase
*/
window.addEventListener( "load", start, false );
