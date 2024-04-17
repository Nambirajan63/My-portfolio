// Block contextmenu and keydown event

document.addEventListener('contextmenu',function(event) {
   event.preventDefault();
});

document.addEventListener('keydown',function(event) {
     if (event.key == "F12" ||  event.ctrlKey && event.shiftKey && event.key == "C" || event.ctrlKey && event.key == "U") {
         event.preventDefault();
     }
   
});


// Send Message 

// function sendMsg() {
//     const fullName = document.getElementById('f-name').value;
//     const mNumber = document.getElementById('m-num').value;
//     const email = document.getElementById('e-address').value;
//     const eSubject = document.getElementById('e-sub').value;
//     const message = document.getElementById('message').value;

//     // Use callback function 

//     setTimeout( function () {
//         if (fullName.length > 0 && mNumber.length >= 10 && email.length > 10 && eSubject.length > 0 && message.length > 0 ) {
//             window.open('https://wa.me/911234567890?text=' + message, '_blank');
//             window.location.reload();
//         }
//         else {
//             alert("Please fill the form then click the send message button")
//         }
//     }, 500);

// };


// Responsive navbar

const btn = document.getElementsByClassName('menu')[0];
const navbar = document.getElementsByClassName('nav-link')[0];

btn.addEventListener('click',()=>{
    navbar.classList.toggle('active');
});


