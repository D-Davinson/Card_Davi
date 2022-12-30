/******************************************************************REDIRECTION********************************************************************/
// instragram
[...document.querySelectorAll("a1")].map(lien => lien.addEventListener("click", (e) => {
    event.preventDefault();
    location.href="https://www.instagram.com/d_davi30/"
}));

//github
[...document.querySelectorAll("a2")].map(lien => lien.addEventListener("click", (e)=> {
    e.preventDefault();
    location.href="https://github.com/D-Davinson"
}));


//linkedin
[...document.querySelectorAll("a3")].map(lien => lien.addEventListener("click", (e) => {
    e.preventDefault();
    location.href="https://www.linkedin.com/in/davinson-doglas-prince-960ba8255/"
}));

//whatsapp

[...document.querySelectorAll("a4")].map(lien => lien.addEventListener("click", (e) => {
    e.preventDefault();
    alert("☎️ Tel : +33.7.67.35.60.02");
}));

//contact button
[...document.querySelectorAll("button")].map(lien => lien.addEventListener("click", (e) => {
    e.preventDefault();
    alert(" 📤 : doglasprincedavinson@gmail.com  \n\n 📱 : 07.67.35.60.02" );
}));


/******************************************************************ANIMATION********************************************************************/


const card = document.querySelector('.card');
const container = document.querySelector('.container');
const h1 = document.querySelector('.h1');
const img = document.querySelector('.img');







//Moving Animation Event
container.addEventListener('mousemove', e => {
    let xAixs = (window.innerWidth/2 - e.pageX)/10;
    let yAixs = (window.innerHeight/2 - e.pageY)/10;
    card.style.transform = `rotateY(${xAixs}deg) rotateX(${yAixs}deg)`;

});

//Animaiton in
container.addEventListener('mouseenter' , (e) =>{
    card.style.transition = "none";
    h1.style.transform = 'translateZ(50px)';
    img.style.transform = 'translateZ(15px) rotateZ(360deg)';
   



});



//Animation out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    h1.style.transform = 'translateZ(0px)';
    img.style.transform = 'translateZ(0px)';


});
