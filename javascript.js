var nodos1;
var nodoTop;
var nodos2;
var nodoBottom;
var nodos3;
var nodoMiddle;
var resTop;
var resBottom;
var acum = 0;
var sign;

function calculadora(boton) {
    nodos1 = document.getElementsByClassName('top');
    nodoTop = nodos1[0].firstChild;
    nodos2 = document.getElementsByClassName('bottom');
    nodoBottom = nodos2[0].firstChild;
    nodos3 = document.getElementsByClassName('middle');
    nodoMiddle = nodos3[0].firstChild;

    switch (boton) {
        case 'C':
            reset();
            acum = 0;
            break;
        case '=':
            nodoTop.nodeValue = resultado(resTop, resBottom, sign);
            nodoMiddle.nodeValue = "";
            nodoBottom.nodeValue = "";
            break;
        case '*':
            nodoMiddle.nodeValue = "x";
            sign = "*";
            acum++;
            break;
        case '÷':
            nodoMiddle.nodeValue = "÷";
            sign = "÷";
            acum++;
            break;
        case '+/-':
            nodoMiddle.nodeValue = "+/-";
            sign = "+/-";
            acum++;
            break;
        case '+':
            nodoMiddle.nodeValue = "+";
            sign = "+";
            acum++;
            break;
        case '-':
            nodoMiddle.nodeValue = "-";
            sign = "-";
            acum++;
            break;
        default:
            if (acum > 0) {
                nodoBottom.nodeValue = nodoBottom.nodeValue + boton;
                resBottom = nodoBottom.nodeValue;
            } else
                nodoTop.nodeValue = nodoTop.nodeValue + boton;
            resTop = nodoTop.nodeValue;
            break;
    }

}
function reset() {
    nodoTop.nodeValue = "";
    nodoMiddle.nodeValue = "";
    nodoBottom.nodeValue = "";
}
function resultado(resTop, resBottom, sign) {

    switch (sign) {
        case '+':
            return parseFloat(resTop) + parseFloat(resBottom);

        case '-':
            return parseFloat(resTop) - parseFloat(resBottom);

        case '*':
            return parseFloat(resTop) * parseFloat(resBottom);

        case '÷':
            if (resBottom==0) {
                return "division por cero";
            }
            return parseFloat(resTop) / parseFloat(resBottom);

    }
}