// Fungsi untuk mengecek apakah user sudah ter login
function isLoggedIn() {
    const userRaw = localStorage.getItem("loginUser");
    if (!userRaw) return false; // Safety check before parsing

    try {
        const user = JSON.parse(userRaw);
        return Boolean(user && users.some((i) => i.id === user.id));
    } catch {
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
