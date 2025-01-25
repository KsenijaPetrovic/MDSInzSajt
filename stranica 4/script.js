document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Sprečava podnošenje forme
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        alert("Poruka je uspešno poslata!");
    } else {
        alert("Molimo vas da popunite sva polja!");
    }
});

