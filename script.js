const roles = [
    "Software Developer",
    "PCB Designer",
    "Embedded Systems Engineer",
    "IoT Developer"
];

let roleIndex = 0;
let charIndex = 0;

const typingElement = document.getElementById("typing");

function typeText() {

    if (charIndex < roles[roleIndex].length) {

        typingElement.textContent += roles[roleIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeText, 100);

    } else {

        setTimeout(deleteText, 1500);

    }

}

function deleteText() {

    if (charIndex > 0) {

        typingElement.textContent =
            roles[roleIndex].substring(0, charIndex - 1);

        charIndex--;

        setTimeout(deleteText, 50);

    } else {

        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        setTimeout(typeText, 300);
    }
}

typeText();
// Active Navigation Menu

const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
const navLinks = document.querySelectorAll("nav ul li a");

navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        this.classList.add("active");
    });
});
const texts = [
    "Software Developer",
    "PCB Designer",
    "Embedded Systems Engineer"
];

let textIndex = 0;
let charIndex = 0;

function typeText() {
    const element = document.getElementById("typing-text");

    if (charIndex < texts[textIndex].length) {
        element.innerHTML += texts[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 1500);
    }
}

function eraseText() {
    const element = document.getElementById("typing-text");

    if (element.innerHTML.length > 0) {
        element.innerHTML = element.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50);
    } else {
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeText, 500);
    }
}

typeText();
const typingEl = document.getElementById('typing');
  const phrases = [
    'Embedded Systems Enthusiast',
    'IoT Developer',
    'PCB Designer',
    'ECE Student',
  ];
  let pIndex = 0, cIndex = 0, deleting = false;

  function type() {
    const current = phrases[pIndex];
    if (deleting) {
      cIndex--;
    } else {
      cIndex++;
    }
    typingEl.textContent = current.substring(0, cIndex);

    let delay = deleting ? 50 : 110;

    if (!deleting && cIndex === current.length) {
      delay = 1600;              // pause at full word
      deleting = true;
    } else if (deleting && cIndex === 0) {
      deleting = false;
      pIndex = (pIndex + 1) % phrases.length;
      delay = 400;
    }
    setTimeout(type, delay);
  }
  type();