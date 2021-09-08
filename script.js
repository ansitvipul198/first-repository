var historyData = [];
isEqualPressed = false;
function dis(value) {
    if (isEqualPressed === true) {
        if ((value == "+") || (value=="-") || (value =="*") || (value == "/")) {
            document.getElementById("result").value += value;
       }
  else {
           clr();
       }
        isEqualPressed = false;
       
    }

   
    if (isNumeric(value)) {
        document.getElementById("result").value += value;
    }
    else {
        var currentVal = document.getElementById("result").value;
        var lastValue = currentVal[currentVal.length - 1];
        if (isNumeric(lastValue)) {
            document.getElementById("result").value += value;
        }
        else {
            if(value === "." && ((lastValue == "+") || (lastValue=="-") || (lastValue =="*") || (lastValue == "/"))){
                document.getElementById("result").value += value;
            }
            else{
                document.getElementById("result").value = currentVal.slice(0, currentVal.length - 1);
                document.getElementById("result").value += value;
            }
        }
    }
   
}
function clr(){
    document.getElementById("result").value = "";
   
}
function clrone() {
    var value = document.getElementById("result").value;
    document.getElementById("result").value = value.slice(0, (value.length- 1));
}
function answer() {
    isEqualPressed = true;
    var x = document.getElementById("result").value;
    var y = eval(x);
    var str = y.toLocaleString("en-US");
    document.getElementById("result").value = str;
 

    historyData.push(`${x} = <span class="resultData">${y}</span> <br />`);
    //console.log(historyData);
   
}

function isNumeric(value) {
    return /^-?\d+$/.test(value);
}
function myFunction() {

    var popup = document.getElementById("myPopup");
    debugger
    popup.innerHTML='History: <br />'+historyData.join(" ");
   
    popup.classList.toggle("show");
   
let resultData = document.querySelectorAll(".resultData");
    resultData.forEach((value, index) => {
        debugger;
    resultData[index].addEventListener("click", () => {
        document.getElementById("result").value = resultData[index].innerHTML;
        console.log(value);
    })
})
}

function modal() {
     popup.classList.toggle("hide");
}
