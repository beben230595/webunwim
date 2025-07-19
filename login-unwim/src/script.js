const form = document.getElementById("loginForm");
const background = document.getElementById("background");
const loginBox = document.getElementById("loginBox");
const loginBtn = document.getElementById("loginBtn");
const loginContainer = document.getElementById("loginContainer");

// Tampilkan login setelah intro selesai
window.addEventListener("load", () => {
  setTimeout(() => {
    loginContainer.style.opacity = "1";
    loginBox.style.transform = "translateY(0)";
  }, 2500); // 2,5 detik delay
});

form.addEventListener("submit", function(e) {
  e.preventDefault();
  loginBtn.classList.add("clicked");

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user !== "admin" || pass !== "1234") {
    background.style.background = "linear-gradient(135deg, #ef5350, #b71c1c)";
    loginBox.style.animation = "shake 0.5s ease";
    setTimeout(() => {
      loginBox.style.animation = "";
      loginBtn.classList.remove("clicked");
      background.style.background = "linear-gradient(135deg, #ffffff, #e0e0e0)";
    }, 1000);
  } else {
    alert("Login Berhasil!");
    window.location.href = "#";
  }
});

// Google SSO dummy
function handleGoogleLogin(response) {
  console.log("Google JWT:", response.credential);
  alert("Login dengan Google berhasil!");
}
