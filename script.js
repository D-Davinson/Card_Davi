
// instragram
const l1 = document.querySelectorAll("a1");
[...l1].map(lien => lien.addEventListener("click", (event) => {
    event.preventDefault();
    location.href="https://www.instagram.com/d_davi30/"
}));

//github

const l2 = document.querySelectorAll("a2");
[...l2].map(lien => lien.addEventListener("click", (event)=> {
    event.preventDefault();
    location.href="https://github.com/D-Davinson"
}));


//linkedin
const l3 = document.querySelectorAll("a3");
[...l3].map(lien => lien.addEventListener("click", (event) => {
    event.preventDefault();
    location.href="https://www.linkedin.com/in/davinson-doglas-prince-960ba8255/"
}));

//whatsapp
const l4 = document.querySelectorAll("a4");
[...l4].map(lien => lien.addEventListener("click", (event) => {
    event.preventDefault();
    alert("☎️ Tel : +33.7.67.35.60.02");
}));


const contact = document.querySelectorAll("button");
[...contact].map(lien => lien.addEventListener("click", (event) => {
    event.preventDefault();
    alert(" 📤 : doglasprincedavinson@gmail.com  \n\n 📱 : 07.67.35.60.02" );
}));
