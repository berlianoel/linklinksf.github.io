document.addEventListener("DOMContentLoaded", function() {
    let countdownElement = document.getElementById('countdown');
    let bypassBtn = document.getElementById('bypassBtn');
    let countdownValue = 5; // Waktu countdown dalam detik

    let countdownInterval = setInterval(function() {
        countdownValue--;
        countdownElement.textContent = countdownValue;

        if (countdownValue === 0) {
            clearInterval(countdownInterval);
            redirect();
        }
    }, 1000);

    bypassBtn.addEventListener('click', function() {
        clearInterval(countdownInterval);
        redirect();
    });

    function redirect() {
        window.location.href = 'https://example.com'; // Ganti dengan URL tujuan
    }
});


