document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Cegah refresh halaman

    let name = document.getElementById("name").value;
    let activity = document.getElementById("activity").value;

    if (name === "") {
        alert("Sila masukkan nama anda!");
        return;
    }

    let list = document.getElementById("participantList");
    let listItem = document.createElement("li");
    listItem.textContent = `${name} - ${activity}`;

    list.appendChild(listItem);

    // Reset Form
    document.getElementById("registrationForm").reset();
});
