document.addEventListener("DOMContentLoaded", (e) => {
    var submit = document.getElementById("formulaire");
    
    submit.addEventListener("submit", function(event) {
        event.preventDefault();

        var erreur

        var inputs = document.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Tous les champs ne sont pas remplis !";
                break
            }
        }

        if (erreur) {
            event.preventDefault()
            alert('Tous les champs ne sont pas remplis !');
            return false;
        } else {
            alert('Formulaire envoyé !');
        }
    });
});