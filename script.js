let btn = document.querySelectorAll('button');

const random = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r},${g},${b})`;
}

setInterval(() => {
    for (let i of btn) {
        i.style.backgroundColor = random();
    }
}, 2000);