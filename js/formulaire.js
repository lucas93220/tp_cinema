document.addEventListener("DOMContentLoaded", e => {
    var submit = document.getElementById("formulaire");

    submit.addEventListener("submit", function (event) {
        event.preventDefault();

        var erreur;

        var inputs = document.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Remplissez les champs.";
                break;
            }
        }

        if (erreur) {
            event.preventDefault();
            alert('Remplissez les champs.');
            return false;
        } else {
            alert('Envoyé !');
        }
    });
});