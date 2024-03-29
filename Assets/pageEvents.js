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
    
    // mudar icons contatos escuros
    document.getElementById("imgLinkedIn").src = "Images/SVG/logoLinkedIn.svg";
    document.getElementById("imgGitHub").src = "Images/SVG/logoGitHub.svg";
    document.getElementById("imgEmail").src = "Images/SVG/logoEmail.svg";
    document.getElementById("imgTelefone").src = "Images/SVG/logoTelefone.svg";
    document.getElementById("imgLocalizacao").src = "Images/SVG/logoLocalizacao.svg";
});

document.getElementById("VejaMaisSobreMim").addEventListener("click", () => { // texto complementar "sobre mim"
    let sobreMim = document.createElement("p"), sobreMimP2 = document.createElement("p");
    sobreMim.className = "ConteudoTexto";
    sobreMimP2.className = "ConteudoTexto";
    sobreMim.innerHTML = "Concluí o ensino médio e técnico integral no IFMG - Campus Ibirité, no curso técnico de Automação Industrial, onde desenvolvi projetos de nível acadêmico. Dentre estes projetos, uma urna eletrônica inteiramente em C++, este foi o meu primeiro contato real com a programação. Além disso, também tive contanto com Microcontroladores e Arduínos.";
    sobreMimP2.innerHTML = "Posteriormente à conclusão do meu curso técnico, cheguei a cursar o primeiro período de Engenharia Elétrica na UFMG, onde também tive contato com a programação através do C#, mas no decorrer do primeiro semestre, resolvi mudar de curso e buscar inserção ná área do TI, interessando-me pelo desenvolvimento Front-End e pela possibilidade de me tornar um desenvolvedor.";
    document.getElementById("SobreMim").appendChild(sobreMim);
    document.getElementById("SobreMim").appendChild(sobreMimP2);
    
    document.getElementById("VejaMaisSobreMim").style.display = "none";
});

document.getElementById("VejaMaisHabilidades").addEventListener("click", () => { // texto complementar "habilidades"
    let sobreHabilidades = document.createElement("p");
    sobreHabilidades.className = "ConteudoTexto";
    sobreHabilidades.innerHTML = "Além disso, me desenvolvi nas tecnologias <strong>Angular</strong>, <strong>TypeScript</strong> e <strong>Next.js</strong>. Por fim, também já tive contato com <strong>C#</strong>, <strong>C++</strong>, <strong>Java</strong>, <strong>Python</strong>, <strong>Express</strong>, <strong>MySQL</strong> e diversas outras tecnologias. Ademais, sou fluente em <strong>Inglês</strong>."
    document.getElementById("TextoComplementarHabilidades").appendChild(sobreHabilidades);

    let barrasTitulo = document.createElement("div");
    barrasTitulo.innerHTML = `<h2 class="progress-titulo" style="font-size:20px; margin: 20px 0px 0px;">Meus níveis de habilidade</h2>`;
    document.getElementById("Habilidades").appendChild(barrasTitulo);

    let barrasProgresso = document.createElement("div"); // criar div conteúdo complementar e barras de progresso do Bootstrap
    barrasProgresso.className = "BarrasProgresso";
    barrasProgresso.style.marginTop = "50px";
    fetch("./Assets/Habilidades.json", {method: 'GET'}).then(resp => resp.json()).then(resp => {
        console.log(resp)
        resp.forEach(e => {
            function CarregarBarrasProgresso(){
                return `<div class="card-habilidades">
                        <h3 class="progress-titulo">${e.Habilidades}</h3>
                        <div class="progress">
                            <div class="progress-bar" style="width:${e.Nivel}%;"></div>
                        </div>
                        </div>`
            }barrasProgresso.innerHTML += CarregarBarrasProgresso();
        })
    })
    document.getElementById("Habilidades").appendChild(barrasProgresso); // append barras de progresso à página

    document.getElementById("VejaMaisHabilidades").style.display = "none";
});

document.getElementById("VejaMaisProjetos").addEventListener("click", () => { // conteúdo complementar "projetos"
    let cont = document.getElementById("ProjetosWrapper").children.length;

    for(let i = 0; i < cont; i++){
        document.getElementById("ProjetosWrapper").children[i].className = 'GridProjetosWrapped';
    }

    document.getElementById("VejaMaisProjetos").style.display = "none";
});