document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form from submitting

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dalam contoh ini, kita menggunakan username: admin dan password: 12345 sebagai contoh
    if (username === "admin" && password === "admin") {
        alert("Login berhasil!");
        window.location.href = "https://www.youtube.com/watch?v=DeIk06jAULc"; // Alihkan ke tampilan utama web
    } else {
        alert("Username atau password salah!");
    }
});
