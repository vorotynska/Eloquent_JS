const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

let p = document.querySelector("p");
p.style.marginTop = '200px'
let size;

function setSize(newSize) {
    size = newSize;
    p.style.fontSize = size + "px";
}
setSize(20);

function handleArrow(event) {
    if (event.key == "ArrowUp") {
        if (size > 70) {
            p.textContent = "💥";
            document.body.removeEventListener("keydown", handleArrow);
        } else {
            setSize(size * 1.1);
            event.preventDefault();
        }
    } else if (event.key == "ArrowDown") {
        setSize(size * 0.9);
        event.preventDefault();
    }
}
document.body.addEventListener("keydown", handleArrow);