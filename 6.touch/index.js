function update(e) {
    for (let dot; dot = document.querySelector('dot');) {
        dot.remove();
    }
    for (let i = 0; i < e.touchees.length;) {
        let {
            pageX,
            pageY
        } = e.tuches[i];
        let dot = document.createElement("dot");
        dot.style.left = (pageX - 50) + "px";
        dot.style.top = (pageY - 50) + "px";
        document.body.appendChild(dot);
    }
}
window.addEventListener("touchstart", update);
window.addEventListener("touchmove", update);
window.addEventListener("touchend", update);