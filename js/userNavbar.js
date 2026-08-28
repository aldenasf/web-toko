document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");

    if (!isLoggedIn()) {
        nav.innerHTML += `<a class="bg-sky-600 text-white px-4 py-2 rounded-lg" href="login.html">Login</a>`;
    } else {
        const userRaw = localStorage.getItem("loginUser");
        const user = JSON.parse(userRaw || "{}");

        nav.innerHTML += `
        <li class="flex items-center relative">
            <div class="w-0.5 h-6 mr-4 bg-gray-200"></div>
            <button id="userBtn" class="flex items-center gap-3 hover:bg-gray-200 transition-colors duration-200 px-2 py-1 rounded-sm">
                <div class="text-right hidden sm:block">
                    <p id="username" class="font-semibold text-sm text-gray-800">${user.name}</p>
                </div>
                <img src="https://api.dicebear.com/7.x/initials/svg?seed=Admin&backgroundColor=4f46e5"
                    alt="Foto profil admin" class="w-8 h-8 rounded-full object-cover border border-gray-200">
            </button>
            <div
                id="userContextMenu"
                class="flex flex-col overflow-clip absolute hidden top-14 bg-white w-full justify-center rounded-xl ">
                ${user.role === "admin" ? `<a class="flex py-3 px-2 w-full bg-white hover:bg-gray-200 transition-colors duration-200 text-sm" href="/dashboard.html">Dashboard</a>` : ""}
                <button id="logout" class="flex py-3 px-2 w-full bg-red-200 hover:bg-red-300 transition-colors duration-200 text-sm">Logout</button>
            </div>
        </li>`;

        const userBtn = document.getElementById("userBtn");
        userBtn.addEventListener("click", () => {
            const userContextMenu = document.getElementById("userContextMenu");
            userContextMenu.classList.toggle("hidden");
        });

        const logoutBtn = document.getElementById("logout");
        logoutBtn.addEventListener("click", () => {
            localStorage.setItem("loginUser", null);
            window.location.href = "/";
        });
    }
});
