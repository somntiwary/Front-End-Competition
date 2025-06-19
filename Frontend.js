// Chart.js rendering
window.onload = function () {
  const barChart = new Chart(document.getElementById('barChart'), {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      datasets: [{
        label: 'Sales',
        data: [1200, 1900, 3000, 2200, 2700],
        backgroundColor: '#00bfff',
      }]
    },
    options: { responsive: false, plugins: { legend: { display: false } } }
  });

  const lineChart = new Chart(document.getElementById('lineChart'), {
    type: 'line',
    data: {
      labels: ['Q1', 'Q2', 'Q3', 'Q4'],
      datasets: [{
        label: 'Users',
        data: [150, 400, 300, 650],
        borderColor: '#00ffff',
        borderWidth: 2,
        fill: false,
      }]
    },
    options: { responsive: false, plugins: { legend: { display: false } } }
  });

  const areaChart = new Chart(document.getElementById('areaChart'), {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Forecast',
        data: [300, 600, 450, 900],
        borderColor: '#00ff99',
        backgroundColor: 'rgba(0, 255, 153, 0.2)',
        fill: true,
      }]
    },
    options: { responsive: false, plugins: { legend: { display: false } } }
  });
};


let progressFill = document.getElementById("progressFill");
let counterContainer = document.getElementById("counter");
let loader = document.getElementById("loader");
let mainContent = document.getElementById("main-content");

// Create 0–100 numbers as divs
for (let i = 0; i <= 100; i++) {
  const num = document.createElement("div");
  num.textContent = i;
  counterContainer.appendChild(num);
}

let count = 0;
let translateY = 0;
let delay = 120; // initial slow delay
let speedFactor = 0.95; // controls how fast speed increases (smaller = faster acceleration)

function updateLoader() {
  if (count <= 100) {
    // Move counter up
    translateY -= 60; // each div is 60px tall
    counterContainer.style.transform = `translateY(${translateY}px)`;
    progressFill.style.width = `${count}%`;
    count++;

    // Gradually reduce delay to speed up (acceleration)
    delay *= speedFactor;
    if (delay < 20) delay = 20;

    setTimeout(updateLoader, delay);
  } else {
    loader.style.display = "none";
    mainContent.style.display = "block";
  }
}

updateLoader();


const toggle = document.getElementById("toggle-dark");

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark-mode");
});




document.addEventListener("mousemove", function (e) {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");
  ripple.style.left = `${e.clientX - 10}px`;
  ripple.style.top = `${e.clientY - 10}px`;
  document.querySelector(".ripple-effect-container").appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 1000); // Remove ripple after animation
});
