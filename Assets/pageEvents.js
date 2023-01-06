var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
        var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
        }) // bootstrap popover contatos

const item = document.querySelectorAll("[data-animation]");
const animeScroll = () => { // função carregar animações ao scroll down da página
const windowTop = window.pageYOffset + window.innerHeight * 0.75 ; // valor do scroll descido

item.forEach((element) => {
    if (windowTop > element.offsetTop) {
    element.classList.add("animate"); // add class animação
    } else {
    element.classList.remove("animate"); // remove class animação
    }
});
};

window.addEventListener("scroll", ()=>{ // call função de scroll enquanto a pagina estiver realizando scroll down
animeScroll();
})

document.getElementById("btn-tela-clara").addEventListener("click", (e) => { // onclick botao tela clara
    document.querySelector("body").className = "light-style"; // edit class body para tema claro
    document.getElementById("btn-tela-clara").style.display = "none"; // esconder botão após click
    document.getElementById("btn-tela-escura").style.display = "block"; // mostrar botão inverso após click

    document.getElementById("LogoRM").src = "Images/SVG/logoRM-light.svg"; // mudar logo clara nav

    document.getElementById("FotoPessoal").src = "Images/SVG/logoRM-light.svg"; // mudar logo clara tela inicial
    
    // mudar icons contatos claros
    document.getElementById("imgLinkedIn").src = "Images/SVG/logoLinkedIn-light.svg";
    document.getElementById("imgGitHub").src = "Images/SVG/logoGitHub-light.svg";
    document.getElementById("imgEmail").src = "Images/SVG/logoEmail-light.svg";
    document.getElementById("imgTelefone").src = "Images/SVG/logoTelefone-light.svg";
    document.getElementById("imgLocalizacao").src = "Images/SVG/logoLocalizacao-light.svg";
});

document.getElementById("btn-tela-escura").addEventListener("click", (e) => { // onclick botao tela escura
    document.querySelector("body").className = "dark-style"; // edit class body para tema escuro
    document.getElementById("btn-tela-escura").style.display = "none"; // esconder botão após click
    document.getElementById("btn-tela-clara").style.display = "block"; // mostrar botão inverso após click

    document.getElementById("LogoRM").src = "Images/SVG/logoRM.svg"; // mudar logo escura nav
    
    document.getElementById("FotoPessoal").src = "Images/SVG/logoRM.svg"; // mudar logo escura tela inicial
    
    // mudar icons contatos escuros
    document.getElementById("imgLinkedIn").src = "Images/SVG/logoLinkedIn.svg";
    document.getElementById("imgGitHub").src = "Images/SVG/logoGitHub.svg";
    document.getElementById("imgEmail").src = "Images/SVG/logoEmail.svg";
    document.getElementById("imgTelefone").src = "Images/SVG/logoTelefone.svg";
    document.getElementById("imgLocalizacao").src = "Images/SVG/logoLocalizacao.svg";
});