if (isLoggedIn()) window.location.href = "index.html";

document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("register");

    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const email = formData.get("email");
        const password = formData.get("password");
        const passwordConfirm = formData.get("password-confirm");
        const agreement = formData.get("agreement");

        if (!name) return formError("Nama kosong");

        if (!email.length || !validateEmail(email))
            return formError("Email tidak valid");

        if (!password.length) return formError("Password kosong");

        if (password !== passwordConfirm)
            return formError("Password tidak cocok");

        if (!agreement)
            return formError(
                "Kamu harus menyutujui Terms of Service dan Privacy Policy",
            );

        const newUser = {
            id: users.length + 1,
            name: name,
            email: email,
            password: password,
            role: "user",
        };

        users.push(newUser);
        console.log(users);

        alert(
            `User didaftar: \n\n${JSON.stringify(newUser)}\n\nCek console untuk melihat array users`,
        );
    });
});
