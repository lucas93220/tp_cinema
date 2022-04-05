document.addEventListener("DOMContentLoaded", e => {
    console.log(e.target);
    let first_name, last_name;
    first_name = document.getElementsByName("nom")[0];
    last_name = document.getElementsByName("prenom")[0];
    phone = document.getElementsByName("phone")[0];
    date = document.getElementsByName("date")[0];

    btn_validation = document.querySelector("button");

    btn_validation.addEventListener("click", () => {
        e.preventDefault();
        //condition
        if (first_name.value && last_name.value && phone && date) {
            console.log(` nom : ${first_name.value}
            prenom : ${last_name.value}
            date : ${date.value}
            phone : ${phone}
            `);
        } else {
            alert("Remplir les champs.");
        }
    });
    //console.log(btn_validation)//
});