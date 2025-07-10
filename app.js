const countBtn = document.getElementById("counter");
const resetBtn = document.getElementById("reset");
let count = 0;
const clickSound = new Audio('assets/click.mp3');
clickSound.preload = "auto";

function playClickSound() {
  clickSound.currentTime = 0; // rewind to start
  clickSound.play();
}

// Button clicks
countBtn.addEventListener("click", function () {
  count++;
  countBtn.innerHTML = `Count ${count}`;
  playClickSound();
});

resetBtn.addEventListener("click", function () {
  count = 0;
  countBtn.innerHTML = `Count`;
  playClickSound();
});

// Show buttons, hide title after 3s
setTimeout(() => {
  const title = document.getElementById("title");
  const btnGroup = document.getElementById("btn-group");

  // Hide title
  title.style.opacity = 0;

  // After fade out, remove from layout
  setTimeout(() => {
    title.style.display = "none";

    // Show button group with fade in
    btnGroup.classList.remove("hidden");
    btnGroup.classList.add("visible");
  }, 1000); // Wait for title fade out to finish
}, 3000);
