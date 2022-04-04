const btns = document.querySelectorAll(".btn");
const value = document.getElementById("value");
let count = 0;

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if (e.target.classList.contains("dcrs")) {
            count -= 1;
            colorCheck()
        } else if (e.target.classList.contains("icrs")) {
            count += 1;
            colorCheck()
        } else if (e.target.classList.contains("res")) {
            count = 0;
            colorCheck()
        }

        value.textContent = count;
    })
});

function colorCheck() {
    if (count > 0) {
        value.style.color = "green";
    } else if (count < 0) {
        value.style.color = "red";
    } else {
        value.style.color = "black";
    }
}