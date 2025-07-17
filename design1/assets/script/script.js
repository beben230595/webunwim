

window.addEventListener('scroll', () => {
    const body = document.body;

    if (window.scrollY > 50) {
      body.classList.add('body-scrolled');
    } else {
      body.classList.remove('body-scrolled')
    }
  });


const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const data = {
  instagram: [
    "#ff9a9e", "#fad0c4", "#fbc2eb", "#a18cd1", "#fbc2eb", "#ffecd2"
  ],
  tiktok: [
    "#1f1c2c", "#928dab", "#1c92d2", "#f2fcfe", "#636363", "#a2ab58"
  ],
  youtube: [
    "#ff0000", "#c31432", "#ff4e50", "#f7b733", "#dd2476", "#e94057"
  ]
};

const grid = document.getElementById("sosmed-grid");
const main = document.getElementById("sosmed-main");
const tabs = document.querySelectorAll(".tab");

function loadContent(platform) {
  grid.innerHTML = ""; // Clear grid

  data[platform].forEach(color => {
    const box = document.createElement("div");
    box.className = "sosmed-box";
    box.style.background = color;
    grid.appendChild(box);
  });

  main.style.background = data[platform][0];
}

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    const platform = tab.getAttribute("data-platform");
    loadContent(platform);
  });
});

// Default load
loadContent("instagram");