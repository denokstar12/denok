function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
        document.getElementById("loginPage").classList.add("hidden");
        document.getElementById("absensiPage").classList.remove("hidden");
    } else {
        alert("Silakan isi username dan password!");
    }
}

function logout() {
    document.getElementById("absensiPage").classList.add("hidden");
    document.getElementById("loginPage").classList.remove("hidden");
}

document.getElementById("absensiForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Absensi berhasil dikirim. Terima kasih!");
    this.reset();
});
