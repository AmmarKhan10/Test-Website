const reasons = [
    "Youre the cutest hamster ever",
        "You feel like home",
        "Your laugh is the cutest.",
        "You smile is the warmest and best thing ever.",
        "You're hair always look so amazing.",
        "I love your energy in our 3AM video calls.",
        "i love talking to you.",
        "i love ur cute voice.",
        "Youre so fragile and smol.",
        "every moment i spend w u feels so unreal",
        "I love how you never fail to make me laugh.",
        "BB, ill be honest cuh that BB.",
        "youre eyes are so ducking pretty i get lost in them.",
        "i love ur smol cute nose and ears.",
        "You're my most favohrite person ever",
        "ur skin is always glowing mashallah.",
        "I love how no matter how much time i spend w u it seems very less.",
        "You're beautiful inside and out.",
        "I love your voice.",
        "i love ur body and ur looks everything top to bottom i love u for u."
];

function showReason() {
  const reason = reasons[Math.floor(Math.random() * reasons.length)];
  document.getElementById("reason").innerText = reason;
}

// Bouncing Hearts
const canvas = document.getElementById("heartCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

class Heart {
  constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 20 + 10;
      this.speedX = (Math.random() - 0.5) * 2;
      this.speedY = (Math.random() - 0.5) * 2;
      this.color = 'red';
  }

  draw() {
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.bezierCurveTo(this.x, this.y - this.size / 2, this.x - this.size, this.y - this.size / 2, this.x - this.size, this.y);
      ctx.bezierCurveTo(this.x - this.size, this.y + this.size, this.x, this.y + this.size * 1.5, this.x, this.y + this.size * 2);
      ctx.bezierCurveTo(this.x, this.y + this.size * 1.5, this.x + this.size, this.y + this.size, this.x + this.size, this.y);
      ctx.bezierCurveTo(this.x + this.size, this.y - this.size / 2, this.x, this.y - this.size / 2, this.x, this.y);
      ctx.fillStyle = this.color;
      ctx.fill();
  }

  update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.speedX *= -1;
      }
      if (this.y + this.size * 2 > canvas.height || this.y - this.size < 0) {
          this.speedY *= -1;
      }

      this.draw();
  }
}

const hearts = [];
for (let i = 0; i < 30; i++) {
  hearts.push(new Heart());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach(heart => heart.update());
  requestAnimationFrame(animate);
}

animate();
