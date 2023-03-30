window.addEventListener("click", e => {
    let dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = (e.pageX - 4) + "px";
    dot.style.top = (e.pageY - 4) + "px";
    document.body.appendChild(dot);
});