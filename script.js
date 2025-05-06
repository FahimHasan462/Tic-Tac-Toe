let boxes = document.querySelectorAll(".box");
let resetButton = document.getElementById("resetbut");
let currentPlayer = "X";

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.textContent === "") {
            box.textContent = currentPlayer;
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

resetButton.addEventListener("click", () => {
    boxes.forEach(box => {
        box.textContent = "";
    });
});

