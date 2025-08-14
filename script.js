
const myName = "Manoj Kumar"
const nameContainer = document.querySelector(".hero-text h1 span");
function typingEffect(text, element) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 175);
        }
    }
    type()
}
typingEffect(myName, nameContainer)

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach((reveal) => {
  observer.observe(reveal);
});