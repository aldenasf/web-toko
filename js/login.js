if (isLoggedIn()) window.location.href = "/";

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
