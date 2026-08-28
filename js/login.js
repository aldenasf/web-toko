document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get("email");
        const password = formData.get("password");

        if (!email.length || !validateEmail(email))
            return formError("Email tidak valid");

        if (!password.length) return formError("Password kosong");

        const user = users.find(
            (user) => user.email == email && user.password == password,
        );

        if (!user) {
            formError("Email atau password salah");
        }

        localStorage.setItem("loginUser", JSON.stringify(user));

        if (user.role === "admin") {
            window.location.href = "/dashboard.html";
        } else {
            window.location.href = "/";
        }
    });
});

// Fungsi untuk mengecek apakah user sudah ter login
function isLoggedIn() {
    const userRaw = localStorage.getItem("loginUser");
    const user = JSON.parse(userRaw);

    // Mengecek apakah `user` pada localStorage tidak kosong dan terdaftar di database
    if (user !== undefined && users.includes(user)) {
        return true;
    } else {
        return false;
    }
}

function formError(message) {
    const element = document.getElementById("error");

    element.innerHTML = message;
    element.classList.remove(["hidden"]);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
