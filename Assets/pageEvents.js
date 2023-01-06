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

document.getElementById("btn-tela-clara").addEventListener("click", () => { // onclick botao tela clara
    document.querySelector("body").className = "light-style"; // edit class body para tema claro
    document.getElementById("btn-tela-clara").style.display = "none"; // esconder botão após click
    document.getElementById("btn-tela-escura").style.display = "block"; // mostrar botão inverso após click

    document.getElementById("LogoRM").src = "Images/SVG/logoRM-light.svg"; // mudar logo clara nav

    document.getElementById("FotoPessoal").src = "Images/SVG/logoRM-light.svg"; // mudar logo clara tela inicial
    // mudar icons contatos claro
    document.getElementById("imgLinkedIn").src = "Images/SVG/logoLinkedIn-light.svg";
    document.getElementById("imgGitHub").src = "Images/SVG/logoGitHub-light.svg";
    document.getElementById("imgEmail").src = "Images/SVG/logoEmail-light.svg";
    document.getElementById("imgTelefone").src = "Images/SVG/logoTelefone-light.svg";
    document.getElementById("imgLocalizacao").src = "Images/SVG/logoLocalizacao-light.svg";
});

document.getElementById("btn-tela-escura").addEventListener("click", () => { // onclick botao tela escura
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

document.getElementById("VejaMaisSobreMim").addEventListener("click", () => { // texto complementar "sobre mim"
    document.querySelectorAll(".ConteudoTexto")[1].innerHTML += "<br> Concluí o ensino médio e técnico na modalidade integral, no Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais - Campus Ibirité, meu curso técnico é na área da Automação Industrial, onde desenvolvi projetos de nível acadêmico. Dentre os diversos projetos, desenvolvi uma urna eletrônica inteiramente em C++, este foi o meu primeiro contato real com a programação. <br> Além de projetos, também cursei disciplinas voltadas a programação, tendo contato com Microcontroladores e Arduínos. Posteriormente à conclusão do meu curso técnico, cheguei a cursar o primeiro período de Engenharia Elétrica na Universidade Federal de Minas Gerais, onde também tive contato com a programação através do C#, mas no decorrer do primeiro semestre, resolvi mudar de curso e buscar inserção ná área do TI, me interessando pelo desenvolvimento Front-End e pela possibilidade de me tornar um desenvolvedor.";
    
    document.getElementById("VejaMaisSobreMim").style.display = "none";
});

document.getElementById("VejaMaisHabilidades").addEventListener("click", () => { // texto complementar "habilidades"
    document.querySelectorAll(".ConteudoTexto")[2].innerHTML = " Desde o início dos meus estudos, me desenvolvi nas tecnologias <strong>HTML</strong> e <strong>CSS</strong>, <strong>JavaScript</strong> e na biblioteca Front-End <strong>Bootstrap</strong>. <br> Possuo boa afinidade com a <strong>Lógica de Programação</strong>, sendo esse um dos primeiros motivos que me fizeram me interessar pelo Desenvolvimento. Além disso, também possuo conhecimento básico em <strong>C#</strong>, <strong>C++</strong> e <strong>PHP</strong>. <br> Ademais, sou fluente em <strong>Inglês</strong>. ";

    document.getElementById("VejaMaisHabilidades").style.display = "none";
});