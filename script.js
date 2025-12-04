// Small greeting animation
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    let colors = ['#f54291', '#42f5e6', '#f5e642', '#42f554'];
    let i = 0;

    setInterval(() => {
        header.style.color = colors[i];
        i = (i + 1) % colors.length;
    }, 1000);
});
