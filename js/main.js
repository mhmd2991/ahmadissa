let btn = document.querySelector("#menu");
let header = document.querySelector("#header");

btn.addEventListener("click", function (e) {
    btn.classList.toggle('fa-times');
    header.classList.toggle("active");
});

let lis = document.querySelectorAll(".navbar ul li a");
let lisArray = Array.from(lis);

lisArray.forEach((li) => {
    li.addEventListener("click", function (e) {
        lisArray.forEach((ele) => {
            ele.classList.remove("active");
        });
        li.classList.add("active");
    });
});

var i = 0;
var txt = 'Senior Manager at monitor deloitte'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("demo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

typeWriter();

let scrollToTop = document.querySelector("#scrollToTop");
window.onscroll = function () {

    if (this.scrollY >= 558) {
        scrollToTop.classList.add("show");
        scrollToTop.addEventListener("click", function (e) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        });
    } else {
        scrollToTop.classList.remove("show");
    }
}

let form = document.querySelector("#form");
let email = document.querySelector("input[name = 'txt_email']");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let emailVal = email.value;
    //check if it's a valid email
    if (!validateEmail(emailVal) || emailVal === "") {
        form.classList.add('error');
        form.classList.remove('success');
    } else {
        form.classList.remove('error');
        form.classList.add('success');
        email.value = "";
    }
});

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

let workArray = ['business consulting', 'business strategy', 'leadership', 'negotiation'];
let post = document.querySelector("#post");

function rend() {
    let randomWork = workArray[Math.floor(Math.random() * workArray.length)];
    post.innerHTML = randomWork;
}
setInterval(function () {
    rend()
}, 1500);

let sections = document.querySelectorAll("section");
let navLi = document.querySelectorAll(".navbar ul li a");

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        let sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove("active");
        if (li.classList.contains(current)) {
            li.classList.add("active");
        }
    })
});