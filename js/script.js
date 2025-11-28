// efeito digitando
const subtitle = document.querySelector('.subtitle');
let text = subtitle.textContent;
subtitle.textContent = '';
let i = 0;

function type() {
if (i < text.length) {
    subtitle.textContent += text.charAt(i);
    i++;
    setTimeout(type, 80);
}
}
type();

// glitch nos botões
document.querySelectorAll('.btn').forEach(btn => {
btn.addEventListener('mousemove', e => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left;
    btn.style.setProperty('--x', `${x}px`);
});
});
