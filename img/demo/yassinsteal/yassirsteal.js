
function typing() {
    const text = 'Welcome to Standard Models Holding Limited';
    const typingElement = document.querySelector('.hero-txt');

    function typeText() {
        typingElement.textContent = '';
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                typingElement.textContent += text[i];
            }, 100 * i);
        }
    }

    typeText();

    setInterval(() => {
        typeText();
    }, 200 * text.length); 
}

typing();


//Cool typing effect

// Found This Useful -> Subscribe my Youtube Channel
// https://bit.ly/3m9avif
