const modules = [
  {
    icon: "fas fa-building",
    label: "Administrasi Aplikasi",
    color: "text-warning",
    roles: ["Super Admin", "Pengelola Sistem"]
  },
  {
    icon: "fas fa-link",
    label: "Edlink",
    color: "text-success",
    roles: ["Admin LMS", "Pengajar"]
  },
  {
    icon: "fas fa-book",
    label: "SIM Akademik",
    color: "text-primary",
    roles: ["Dosen", "Mahasiswa", "Admin Fakultas"]
  },
  {
    icon: "fas fa-chart-bar",
    label: "Dashboard dan Pelaporan",
    color: "text-info",
    roles: ["Pimpinan", "Admin"]
  },
  {
    icon: "fas fa-wallet",
    label: "SIM Keuangan Mahasiswa",
    color: "text-teal",
    roles: ["Keuangan", "Mahasiswa"]
  },
  {
    icon: "fas fa-users",
    label: "SIM Kepegawaian",
    color: "text-orange",
    roles: ["Admin Kepegawaian", "Dosen"]
  },
  {
    icon: "fas fa-user-check",
    label: "SIM Seleksi Penerimaan",
    color: "text-secondary",
    roles: ["Admin Fakultas", "Admin Prodi"]
  },
  {
    icon: "fas fa-briefcase",
    label: "KarirLink",
    color: "text-danger",
    roles: ["Alumni", "Admin Karir"]
  },
  {
    icon: "fas fa-graduation-cap",
    label: "SIM Merdeka Belajar Kampus",
    color: "text-primary",
    roles: ["Admin MBKM", "Mahasiswa"]
  }
];

const moduleList = document.getElementById("module-list");
const roleSection = document.querySelector(".col-md-4");

function renderDefaultRole() {
  roleSection.innerHTML = `
    <h5 class="mb-3">Daftar Role</h5>
    <div class="sidebar-title text-muted">Klik salah satu modul untuk melihat role</div>
  `;
}

function renderRoles(label, roles) {
  let html = `
    <h5 class="mb-3 fade-in">Daftar Role</h5>
    <div class="sidebar-title fade-in">${label}</div>
  `;
  roles.forEach(role => {
    html += `
      <div class="role-box fade-in">
        <strong>${role}</strong><br>
        <small>FEB</small>
      </div>
    `;
  });
  roleSection.innerHTML = html;
}

modules.forEach((mod, index) => {
  const col = document.createElement("div");
  col.className = "col-sm-4 mb-4";

  col.innerHTML = `
    <div class="bg-white p-3 text-center module-card" id="mod-${index}">
      <div class="module-icon ${mod.color} mb-2"><i class="${mod.icon}"></i></div>
      <div>${mod.label}</div>
    </div>
  `;

  col.querySelector(".module-card").addEventListener("click", () => {
    document.querySelectorAll(".module-card").forEach(card => card.classList.remove("active"));
    col.querySelector(".module-card").classList.add("active");
    renderRoles(mod.label, mod.roles);
  });

  moduleList.appendChild(col);
});

renderDefaultRole();
