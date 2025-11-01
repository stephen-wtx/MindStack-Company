// js/typing-effect.js
document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('typing-text');
  const cursor = document.getElementById('cursor');
  const fullText = textElement.innerHTML.trim(); // HTML completo
  let index = 0;

  textElement.innerHTML = '';
  cursor.style.display = 'inline-block';

  function type() {
    const plainText = fullText.replace(/<[^>]*>/g, '');
    const currentText = plainText.substring(0, index);

    let htmlContent = '';
    let charIndex = 0;
    let inSpan = false;
    let spanOpen = false;

    for (let char of fullText) {
      if (char === '<') {
        inSpan = true;
        if (fullText.includes('class="text-[#f58b1d]"', charIndex)) {
          spanOpen = true;
        }
      }
      if (inSpan) {
        htmlContent += char;
        if (char === '>') inSpan = false;
      } else {
        if (charIndex < currentText.length && currentText[charIndex] === char) {
          // Se estamos dentro do span laranja, mantém
          if (spanOpen && !/>.*?</.test(htmlContent.slice(-20))) {
            htmlContent += char;
          } else {
            htmlContent += char;
          }
          charIndex++;
        }
      }
    }

    textElement.innerHTML = htmlContent;

    if (index < plainText.length) {
      index++;
      setTimeout(type, 70);
    } else {
      cursor.style.display = 'none'; // remove cursor
    }
  }

  setTimeout(type, 600);
});