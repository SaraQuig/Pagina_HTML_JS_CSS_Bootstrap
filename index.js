//Código para la encuesta de opinion
document.getElementById("opinion-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    var name = document.getElementById("name").value;
    var opinion = document.getElementById("opinion").value;
    var socialMedia = document.getElementById("social-media").value;

    // Send data to server (replace this with your own code to process the data)
    // Here, we are simply displaying a success message
    var successMessage = document.getElementById("success-message");
    successMessage.style.display = "block";
    successMessage.textContent = "¡Gracias por compartir tu opinión, " + name + "!";

    // Reset form
    document.getElementById("opinion-form").reset();
});
