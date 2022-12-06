
// function next()
// {

// }

// function slideShow()
// {

// }

// function stop()
// {

// }

// function previous()
// {

// }








// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");

//   if (n > slides.length)
//     {
//         slideIndex = 1
//     }

//    if (n < 1)
//     {
//         slideIndex = slides.length
//     }
//     else 
//     {
//         for (i = 0; i < slides.length; i++) 
//             {
//                 slides[i].style.display = "none";  
//             }
//     }

//   slides[slideIndex-1].style.display = "block";  
// }





var images=["2.jpg","3.jpg","4.jpg","5.jpg","6.jpg"];

// let slideIndex = 1;
// showSlides(slideIndex);

// var id;
// console.log(Math.random()*5)


// function plusSlides(n) {
//     showSlides(slideIndex += n);
//   }

function plusSlides()
{
    showSlides(slideIndex += n);
}

function slideShow()
{
id=setInterval(function()
{
    var i=Math.floor( Math.random()*images.length);
    var img=document.getElementById("my-img");
    img.src=images[i];
    i++;
    if(i>images.length-1)
    {
        i=0;
    }
},1000)
}

function stop()
{
    clearInterval(id);
}

// function  start()
// {
//      id=setInterval(function()
// {
//     var i=Math.floor( Math.random()*images.length);
//     var img=document.getElementById("my-img");
//     img.src=images[i];
//     i++;
//     if(i>images.length-1)
//     {
//         i=0;
//     }
// },1000)
// }
