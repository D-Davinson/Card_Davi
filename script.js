
// instragram
const l1 = document.querySelectorAll("a1");
const l1Array = Array.from(l1);
l1Array.map(lien => lien.addEventListener("click", function(event){
    event.preventDefault();
    location.href="https://www.instagram.com/d_davi30/"
}));

//github

const l2 = document.querySelectorAll("a2");
const l2Array = Array.from(l2);
l2Array.map(lien => lien.addEventListener("click", function(event){
    event.preventDefault();
    location.href="https://github.com/D-Davinson"
}));


//linkedin
const l3 = document.querySelectorAll("a3");
const l3Array = Array.from(l3);
l3Array.map(lien => lien.addEventListener("click", function(event){
    event.preventDefault();
    location.href="https://www.linkedin.com/in/davinson-doglas-prince-960ba8255/"
}));

//whatsapp
const l4 = document.querySelectorAll("a4");
const l4Array = Array.from(l4);
l4Array.map(lien => lien.addEventListener("click", function(event){
    event.preventDefault();
    alert("☎️ Tel : +33.7.67.35.60.02");
}));
