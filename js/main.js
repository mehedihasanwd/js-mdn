const text = document.getElementById('demo');
const btn = document.getElementById('btn');

const timer = () => {
  const time = new Date().toLocaleTimeString();
  text.innerHTML = time;
};

btn.onclick = () => {
  setInterval(timer, 1000);
};

console.log();
