document.addEventListener("DOMContentLoaded", (e) => {
    console.log(navigator.userAgent);
  
    let el, modal, closed, open_modal, closed_all, footer_right;
  
    el = document.querySelectorAll(".main-grid li");
    modal = document.querySelector(".parent-modale");
    closed = document.querySelector(".modale button");
    closed_all = document.querySelector(".modale image");
    footer_right = document.querySelector("footer p")
     
    let time = new Date().getFullYear()
      footer_right.innerText+=` ${time}`
    /* property elements */
  
    open_modal = function () {
      console.log(this.dataset);
      /* les variables */
      let image = this.dataset.image;
      let title = this.dataset.title;
      let desc = this.dataset.description;
      let dates = this.dataset.dates;
      modal.classList.add("modale-active"); /* ajouter la classe active */
      /* sélectionner les sélecteurs html*/
      document.querySelector(".modale img").setAttribute("src", image);
      document.querySelector(".modale .desc h2").innerText = title;
      document.querySelector(
        ".modale .desc p"
      ).innerHTML = `<strong>Description : </strong>${desc}`;
      document.querySelector(".modale .desc time").innerHTML = `<strong>Année : </strong> ${dates}`;
      document
        .querySelector(".modale .desc time")
        .setAttribute("datetime", dates);
    };
    for (rows of el) {
      rows.addEventListener("click", open_modal);
    }
    closed.addEventListener("click", () => {
      modal.classList.remove("modale-active");
    });
    closed_all.addEventListener("click", () => {
      modal.classList.remove("modale-active");
    });
  })