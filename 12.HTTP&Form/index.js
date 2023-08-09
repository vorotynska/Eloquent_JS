let form = document.querySelector('form')
form.addEventListener('submit', event => {
    console.log('Saving value', form.elements.value.value)
    event.preventDefault()
})

let text = document.querySelector("input");
let output = document.querySelector("#length");
text.addEventListener("input", () => {
    output.textContent = text.value.length;
});

//checkbox
let checkbox = document.querySelector("#purple");
checkbox.addEventListener("change", () => {
    document.body.style.background =
        checkbox.checked ? "mediumpurple" : "";
});

//radio button
let buttons = document.querySelectorAll('[name=color]')
for (let button of Array.from(buttons)) {
    button.addEventListener('change', () => {
        document.body.style.background = button.value
    })
}

//select fields
let select = document.querySelector("select");
let sel = document.querySelector("#sel");
select.addEventListener("change", () => {
    let number = 0;
    for (let option of Array.from(select.options)) {
        if (option.selected) {
            number += Number(option.value);
        }
    }
    sel.textContent = number;
});