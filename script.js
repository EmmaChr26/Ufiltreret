//Finder hamburger knappen i HTML'en
const bars = document.querySelector("#bars");

//Finder ikonet inde i selve knappen
const icon = document.querySelector("#bars > i");

//Finder menuen via dens ID
const menu = document.querySelector("#menu");

//Funktionen der åbner og lukker menuen
const openNav = () => {

//Viser eller skjuler menuen ved at tilføje eller fjerne "show"
menu.classList.toggle("show");

//Skifter mellem hamburger-ikon og kryds
icon.classList.toggle("fa-bars");
icon.classList.toggle("fa-xmark");

//Undersøger om menuen er åben
const expanded = bars.getAttribute("aria-expanded") ==="true";

//Opdatere aria-exspanded, så skærmlæsere får besked
bars.setAttribute("aria-expanded", expanded ? "false" : "true");

//Opdatere knappens beskrivelse til skærmlæser
bars.setAttribute(
    "aria-label",
    expanded ? "Åben navigation" : "Luk navigation"
);

};

//Aktiverer funktionen, når brugeren klikker på knappen
bars.addEventListener("click", openNav);
