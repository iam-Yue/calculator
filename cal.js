function cal(num) {
    var n = document.getElementById(num)
    if (n === null) return
    document.getElementById("Screen").value += n.value;
}
 
var flag = true;
function equal() {
    var value = document.getElementById("Screen").value
    if (value.indexOf('^') != -1) {
        value = this.pow(value, value.indexOf('^'))
    }
    
    if (!flag) {
        document.getElementById("Screen").value = this.decimalToFractional(eval(value))
        flag = true
    } else {
        document.getElementById("Screen").value = eval(value)
        flag = false
    }
}
 
function back() {
    var n = document.getElementById("Screen");
    n.value = n.value.substring(0, n.value.length - 1);
}
 
function clearNum() {
    document.getElementById("Screen").value = "";
}
 
function sin() {
    document.getElementById("Screen").value = Math.sin(document.getElementById("Screen").value);
}
function cos() {
    document.getElementById("Screen").value = Math.cos(document.getElementById("Screen").value);
}
function tan() {
    document.getElementById("Screen").value = Math.tan(document.getElementById("Screen").value);
}
function sqrt() {
    document.getElementById("Screen").value = Math.sqrt(document.getElementById("Screen").value);
}
function square() {
    document.getElementById("Screen").value = Math.pow(document.getElementById("Screen").value, 2);
}

function pow(value, pos) {
    if (pos != -1) {
        let arr = value.split("")
        let powVal = Math.pow(arr[pos - 1], arr[pos + 1])
        arr.splice(pos - 1, 3, powVal)
        value = arr.join("")
        return value
    }
}
 
 
// 小数化为分数
function decimalToFractional(decimal) {
    if (decimal % 1 === 0) {
        return decimal
    }
    const formatDecimal = decimal.toFixed(2)
    let denominator = 100
    let numerator = formatDecimal * 100
    let bigger = 0
    function recursion() {
        bigger = denominator > numerator ? denominator : numerator
        for (let i = bigger; i > 1; i--) {
            if (
                Number.isInteger(numerator / i) && Number.isInteger(denominator / i)) {
                numerator = numerator / i
                denominator = denominator / i
                recursion()
            }
        }
    }
    recursion()
    return `${numerator} / ${denominator}`
}
