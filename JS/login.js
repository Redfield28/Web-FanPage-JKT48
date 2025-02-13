document.getElementById("button").addEventListener("click", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();


    if (username === "adminjot" && password === "jotbaiksekali") {
        window.location.href = "home.html"; 
    } else {
        alert("Id dan Password tidak sesuai!!");
    }
});
