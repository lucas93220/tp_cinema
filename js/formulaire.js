document.addEventListener("DOMContentLoaded", e => {
    var submit = document.getElementById("formulaire");

    submit.addEventListener("submit", function (event) {

        var erreur;

        var inputs = document.getElementsByTagName("input");

        for (var i = 0; i < inputs.length; i++) {
            if (!inputs[i].value) {
                erreur = "Tous les champs ne sont pas remplis !";
                break;
            }
        }

        if (erreur) {
            event.preventDefault();
            alert('Tous les champs ne sont pas remplis !');
            return false;
        } else {
            alert('Formulaire envoyé !');
        }
    });

    const form = {

        first_name: document.getElementsByName("nom")[0],
        last_name: document.getElementsByName("prenom")[0],
        email: document.getElementsByName("email")[0],
        tel: document.getElementsByName("tel")[0],
        btn_validation: document.getElementById("submit"),
        warning: document.querySelector(".warning"),
        info: [],

        control() {
            if (this.first_name.value && this.last_name.value && this.email.value && this.tel.value) {
                console.log(`
                    nom : ${this.first_name.value} 
                    prenom : ${this.last_name.value}
                    email : ${this.email.value}
                    tel   : ${this.tel.value}
                    `);

                form.info.push(this.first_name.value, this.last_name.value, this.email.value, this.tel.value);
                console.table(form.info);
                localStorage.setItem('User', JSON.stringify(form.info));
                form.warning.classList.remove("show-warning");
            } else {

                form.warning.classList.add("show-warning");
                form.warning.innerText = "Veuillez remplir tout les champs.";
            }
        }

    };

    form.btn_validation.addEventListener("click", e => {
        e.preventDefault();
        form.control();
    });
});