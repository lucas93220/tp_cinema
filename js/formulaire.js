document.addEventListener("DOMContentLoaded", e => {
    var submit = document.getElementById("formulaire");

    const form = {

        first_name: document.getElementsByName("nom")[0],
        last_name: document.getElementsByName("prenom")[0],
        email: document.getElementsByName("email")[0],
        tel: document.getElementsByName("tel")[0],
        btn_validation: document.getElementById("submit"),
        warning: document.querySelector(".warning"),
        valide: document.querySelector(".valide"),
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

                //Alert Warning 
                form.warning.classList.remove("show-warning");
                form.valide.classList.add("show-valide");
                form.valide.innerText = "Envoyée !";
            }

            //Alert Valide
            else {
                    form.valide.classList.remove("show-valide");
                    form.warning.classList.add("show-warning");
                    form.warning.innerText = "Veuillez remplir tout les champs.";
                }
        }

    };
    // Bouton validation formulaire
    form.btn_validation.addEventListener("click", e => {
        e.preventDefault();
        form.control();
    });
});