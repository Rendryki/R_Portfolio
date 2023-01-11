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
    document.querySelectorAll(".ConteudoTexto")[1].innerHTML += "<br> Concluí o ensino médio e técnico na modalidade integral, no Instituto Federal de Educação, Ciência e Tecnologia de Minas Gerais - Campus Ibirité, no curso técnico de Automação Industrial, onde desenvolvi projetos de nível acadêmico. Dentre estes projetos, uma urna eletrônica inteiramente em C++, este foi o meu primeiro contato real com a programação.<br> Além de projetos, também cursei disciplinas voltadas a programação, tendo contato com Microcontroladores e Arduínos. Posteriormente à conclusão do meu curso técnico, cheguei a cursar o primeiro período de Engenharia Elétrica na Universidade Federal de Minas Gerais, onde também tive contato com a programação através do C#, mas no decorrer do primeiro semestre, resolvi mudar de curso e buscar inserção ná área do TI, interessando-me pelo desenvolvimento Front-End e pela possibilidade de me tornar um desenvolvedor.";
    
    document.getElementById("VejaMaisSobreMim").style.display = "none";
});

document.getElementById("VejaMaisHabilidades").addEventListener("click", () => { // texto complementar "habilidades"
    document.querySelectorAll(".ConteudoTexto")[2].innerHTML += "<br> Meu conhecimentos sobre as técnologias Front-End é de nível avançado. Também estou buscando ampliar meu nível de conhecimento na biblioteca <strong>React</strong> e nas técnicas e habilidades voltadas ao <strong>Design Web</strong>, <strong>UX</strong> e <strong>UI</strong>. Além disso, pretendo me desenvolver nas tecnologias Mobile <strong>React Native</strong> e <strong>Flutter</strong>.";

    const barrasProgresso = document.createElement("div"); // criar div conteúdo complementar e barras de progresso do Bootstrap
    barrasProgresso.className = "BarrasProgresso";
    barrasProgresso.innerHTML = `<h2 class="progress-titulo" style="font-size:20px;">Meus níveis de habilidade</h2>
                                <h3 class="progress-titulo">HTML e CSS</h3>
                                <div class="progress">
                                    <div class="progress-bar" style="width:98%;"></div>
                                </div>
                                <h3 class="progress-titulo">Bootstrap</h3>
                                <div class="progress">
                                    <div class="progress-bar" style="width:95%;"></div>
                                </div>
                                <h3 class="progress-titulo">JavaScript</h3>
                                <div class="progress">
                                    <div class="progress-bar" style="width:75%;"></div>
                                </div>
                                <h3 class="progress-titulo">Design Web</h3>
                                <div class="progress">
                                    <div class="progress-bar" style="width:60%;"></div>
                                </div>
                                <h3 class="progress-titulo">React</h3>
                                <div class="progress">
                                    <div class="progress-bar" style="width:50%;"></div>
                                </div>
                                <h3 class="progress-titulo">PHP</h3>
                                <div class="progress">
                                    <div class="progress-bar" style="width:50%;"></div>
                                </div>
                                <h3 class="progress-titulo">C++ e C#</h3>
                                <div class="progress">
                                    <div class="progress-bar" style="width:40%;"></div>
                                </div>
                                <h3 class="progress-titulo">React Native e Flutter</h3>
                                <div class="progress">
                                    <div class="progress-bar" style="width:15%;"></div>
                                </div>`;
    barrasProgresso.style.marginTop = "50px";
    document.getElementById("Habilidades").appendChild(barrasProgresso); // append barras de progresso à página

    document.getElementById("VejaMaisHabilidades").style.display = "none";
});

document.getElementById("VejaMaisProjetos").addEventListener("click", () => { // conteúdo complementar "projetos"
    const projetosEscondidos = document.querySelectorAll(".GridProjetosEscondidosWrapped");
    projetosEscondidos.forEach((e) => { // mudar a classe de cada ítem escondido selecionado;
        e.className = "GridProjetosWrapped";
        e.style.marginTop = "50px";
    });
    document.getElementById("VejaMaisProjetos").style.display = "none";
})