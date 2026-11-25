
// Alpha Bird Farm Website

console.log("Alpha Bird Farm Website Berhasil Dibuka!");

// FORMULIR KONTAK

const abyContactForm = document.getElementById("aby_contact_form");

if (abyContactForm) {
    abyContactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const abyNama = document.getElementById("aby_nama").value;
        const abyStatus = document.getElementById("aby_form_status");

        abyStatus.textContent =
            "Terima kasih, " + abyNama +
            "! Formulir berhasil diisi. Untuk saat ini pesan belum dikirim ke pemilik website.";

        abyContactForm.reset();
    });
}
