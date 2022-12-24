
// instragram
[...document.querySelectorAll("a1")].map(lien => lien.addEventListener("click", (event) => {
    event.preventDefault();
    location.href="https://www.instagram.com/d_davi30/"
}));

//github
[...document.querySelectorAll("a2")].map(lien => lien.addEventListener("click", (event)=> {
    event.preventDefault();
    location.href="https://github.com/D-Davinson"
}));


//linkedin
[...document.querySelectorAll("a3")].map(lien => lien.addEventListener("click", (event) => {
    event.preventDefault();
    location.href="https://www.linkedin.com/in/davinson-doglas-prince-960ba8255/"
}));

//whatsapp

[...document.querySelectorAll("a4")].map(lien => lien.addEventListener("click", (event) => {
    event.preventDefault();
    alert("☎️ Tel : +33.7.67.35.60.02");
}));

//contact button
[...document.querySelectorAll("button")].map(lien => lien.addEventListener("click", (event) => {
    event.preventDefault();
    alert(" 📤 : doglasprincedavinson@gmail.com  \n\n 📱 : 07.67.35.60.02" );
}));
