function myFunction()
{
  document.getElementById("fullName").style.border = "3px blue solid";
}


var regularPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

function vliadtion()
{
  var name = document.getElementById("fullName");
  if (name.value.length < 3)
  {
    name.style.border = "3px red solid";
    document.getElementById("err").style.display = "block";

  }
  else
  {
    name.style.border = "1px black solid";
    document.getElementById("err").style.display = "none";
  }


}



function passVaidator() 
{
  var myPassword = document.querySelector('#myPassword')
  var confirmPassword = document.querySelector("#confirmPassword")
  if (!regularPassword.test(myPassword.value)) 
  {
    // console.log("myPassword:", myPassword, "confirmPassword:", confirmPassword);
    document.getElementById("passerr").style.display = "block";
  }
  else
  {
    myPassword.style.border = "1px black solid";
    document.getElementById("repasserr").style.display = "none";
  }



  myPassword.value
  confirmPassword.value
  if (myPassword.value !== confirmPassword.value) 
  {
    document.querySelector("#pass").style.display = "block";
    var reapsser = document.querySelector("#repasserr")
    reapsser.innerText = "passwords do not match";
    console.log(repasser);
    // console.log(myPassword, confirmPassword);
    console.log("myPassword:", myPassword, "confirmPassword:", confirmPassword);
  }
  else
  {
    myPassword.style.border = "1px black solid";
    document.querySelector("#repasserr").style.display = "none";
  }
}

// function repassvliadtion()
// {
//   var myPassword=document.getElementById("confirmPassword");

//   if (confirmPassword.value != myPassword.value)
//         {
//           document.getElementById("repassvliadtion").style.display="block";
//           confirmPasswordLabel.innerHTML = "not the same";
//         }
//         else
//         {
//           myPassword.style.border="1px black solid";
//             document.getElementById("repasserr").style.display="none";
//         }
// }

  // document.getElementById('fullName').style.border = "1px blue solid";

  // function myFunction(x) {
  //   x.style.background = "yellow";
  // }

// function vliadtion()
// {
//   document.getElementById('fullName').style.removeProperty('border');
// }



// document.getElementById('myinput').style.removeProperty('border');
// function myFunction() {
//   let x = document.getElementById("fname");
//   x.value = x.value.toUpperCase();
// }
// var name=document.getElementById("fullName");
//     if(name.value.length<3)
//     {
//       name.style.border="3px red solid";
//       document.getElementById("err").style.display="block";
//     }
//     else
//     {
//       document.getElementById("err").style.display="none";
//     }




















// var fullName = document.getElementById("fullName");
// var fullNameLable = document.getElementById("fullNameLable");

// var myEmail = document.getElementById("myEmail");
// var myEmailLabel = document.getElementById("myEmailLabel");

// var myPassword = document.getElementById("myPassword");
// var myPasswordLabel = document.getElementById("myPasswordLabel");

// var confirmPassword = document.getElementById("confirmPassword");
// var confirmPasswordLabel = document.getElementById("confirmPasswordLabel");

// var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// var regularPassword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;



// name.style.border="1px blue solid";

// function vliadtion()
// {
//     var name=document.getElementById("fullName");
//     if(name.value.length<3)
//     {
//         name.style.border="3px red solid";
//         document.getElementById("err").style.display="block";
//     }
//     else
//     {
//         name.style.border="1px black solid";
//         document.getElementById("err").style.display="none";
//     }
// }


// function submit() {
//   if (
//     fullName.value == "" ||
//     isFinite(fullName.value) ||
//     fullName.value.indexOf(" ") != -1
//   ) {
//     fullNameError = fullNameLable.innerHTML = "enter a valid name";
//   } else if (!regexEmail.test(myEmail.value)) {
//     myEmailLabel.innerHTML = "enter a valid email";
//   } else if (!regularPassword.test(myPassword.value)) {
//     myPasswordLabel.innerHTML = "enter a strong password";
//   } else if (confirmPassword.value != myPassword.value) {
//     confirmPasswordLabel.innerHTML = "not the same";
//   }

// }
// var fullName=document.getElementById("fullName")
// var select=document.getElementById("myselect")
// var myEmail=document.getElementById("myEmail")
// var myPassword=document.getElementById("myPassword")
// var confirmPassword=document.getElementById("confirmPassword")


// document.write(fullName.value);
// document.write(select.value);
// document.write(myEmail.value);
// document.write(myPassword.value);
// document.write(confirmPassword.value);

