window.onload = function () {

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const title = document.querySelector("#message-box h1");
  const messageBox = document.getElementById("message-box");
  const question = document.getElementById("question");
  const buttons = document.getElementById("buttons");

  yesBtn.onclick = function () {

  title.innerText = " Some stories don't end because they were wrong...";

  question.style.display = "none";
  buttons.style.display = "none";

  // Change background image
  document.body.style.background = "url('sanchlmj.jpeg')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";

  setTimeout(() => {
      title.innerText = "They ended because they were complete. 🌙";
    }, 2000);

  setTimeout(() => {
      title.innerText = "Every moment with you was real. None of it was a mistake. 💛";
    }, 5000);

  setTimeout(() => {
      title.innerText = "You'll always be the chapter I read slowly... even knowing how it ends.";
    }, 9000);

  setTimeout(() => {
      title.innerText = "Wherever life takes you — I hope it's somewhere beautiful. 🌸";
    }, 13000);

  setInterval(createLeaf, 400);
  };

  setInterval(createHeart, 300);
};

  noBtn.onmouseover = function () {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "%";
    noBtn.style.top = Math.random() * 80 + "%";
  };

  function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = ["🍂", "🌸", "✨", "💛", "🌙"][Math.floor(Math.random() * 5)];

    heart.style.left = Math.random() * 100 + "vw";
    leaf.style.position = "fixed";
    leaf.style.top = "-50px";
    leaf.style.fontSize = "1.5rem";
    leaf.style.animation = "fall 4s linear forwards";


    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 4000);
  }

};


@keyframes fall {
  0%   { top: -50px; opacity: 1; }
  100% { top: 100vh; opacity: 0; }
}

