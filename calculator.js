let equ=0;
var input=document.getElementsByClassName("width")
var Answer=document.getElementById("Answer")


function EnterNumber(x)
    {
        Answer.value+=x;
    }

function EnterOperator(x)
    {
        Answer.value+=x;
    }

function EnterEqual() 
    {
        Answer.value=  eval(Answer.value)
    }

function  EnterClear()
    {
        Answer.value=" ";
    }





// document.getElementById('ans').onclick = EnterNumber;

// function getvalue() {
//     console.log(this.val);
//   }

// function EnterClear()
// {
//     this.currentOperand = ''
//     this.previousOperand = ''
//     this.operation = undefined
// }


