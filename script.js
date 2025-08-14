
const myName = "Manoj Kumar"
const nameContainer = document.querySelector(".hero-text h1 span");
function typingEffect(text, element) {
    let index = 0;
    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }
    type()
}
typingEffect(myName, nameContainer)

