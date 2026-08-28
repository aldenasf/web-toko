const userRaw = localStorage.getItem("loginUser");
const user = JSON.parse(userRaw);

if (user === null && !users.includes(user)) {
    alert("Kamu belum login");
    window.location.href = "/login.html";
}

if (user.role !== "admin") {
    alert("Kamu tidak mempunyai akses untuk membuka halaman ini");
    window.location.href = "/login.html";
}

document.addEventListener("DOMContentLoaded", () => {
    const username = document.getElementById("username");
    const role = document.getElementById("role");

    username.innerHTML = user.name;
    role.innerHTML = user.role;

    const logoutBtn = document.getElementById("logout");

    logoutBtn.addEventListener("click", () => {
        localStorage.setItem("loginUser", null);
        window.location.href = "/login.html";
    });
});
