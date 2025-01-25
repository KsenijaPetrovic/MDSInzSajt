document.getElementById('signinForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Primer provere podataka (u stvarnoj aplikaciji ovo bi bilo povezano sa backendom)
    if (email === "test@firma.com" && password === "lozinka123") {
        alert('Uspešno ste se prijavili!');
        window.location.href = '#'; // Preusmeravanje na dashboard stranicu nakon prijave
    } else {
        alert('Neispravan email ili lozinka!');
    }
});
