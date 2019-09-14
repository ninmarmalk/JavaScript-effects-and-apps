function bgChanger() {
  if (this.scrollY > this.innerHeight / 1.5) {
    document.body.classList.add("bg-active");
    document.body.classList.add("font-change");
  } else {
    document.body.classList.remove("bg-active");
    document.body.classList.remove("font-change");
  }
}

function bgChanger2() {
  if (this.scrollY > innerHeight / 0.6) {
    document.body.classList.add("bg2-active");
  } else {
    document.body.classList.remove("bg2-active");
  }
}

window.addEventListener("scroll", bgChanger);
window.addEventListener("scroll", bgChanger2);
