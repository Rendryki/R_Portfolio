let ArrRepositories = new Array();
let projetoList = document.getElementById("ProjetosWrapper");

fetch("https://api.github.com/users/Rendryki/repos").then(response => response.json()).then(response => {
    response.forEach(list => {
        console.log(list.updated_at);
        if(list.name != "Rendryki" && list.name != "R_Portfolio" && list.name != "R_Time_Capsule" && list.name != "R_Poke_App" && list.name != "R_My_Products_Storage" && list.fork == false){
            let formatedLastCommitDate = list.updated_at.substring(0, 10);
            let repositoriesObject = {
                name : list.name,
                url : list.html_url,
                Programing_Language: list.language,
                LastCommitDate: formatedLastCommitDate
            }
            ArrRepositories.push(repositoriesObject);
        }else if(list.name === "R_Not_So_Fake"){
            let formatedLastCommitDate = list.updated_at.substring(0, 10);
            let repositoriesObject = {
                name : list.name,
                url : list.html_url,
                Programing_Language: list.language,
                LastCommitDate: formatedLastCommitDate
            }
            ArrRepositories.push(repositoriesObject); 
        }
        else if(list.name === "R_Time_Capsule" || list.name === "R_Poke_App" || list.name === "R_My_Products_Storage"){
            let formatedLastCommitDate = list.updated_at.substring(0, 10);
            let repositoriesObject = {
                name : list.name,
                url : list.html_url,
                Programing_Language: list.language,
                LastCommitDate: formatedLastCommitDate
            }
            ArrRepositories.unshift(repositoriesObject); 
        }
    });
    ArrRepositories.forEach((e, index) => {
        let projectName = e.name;        
        let projectUrl = e.url;
        let projectLastCommitDate = e.LastCommitDate;
        let projectProgramingLanguage = e.Programing_Language;
        projectName = projectName.toUpperCase();     
        function createProjectCard(){
            return`<li class='GridProjetosWrapped' id=${index}>
                        <div class="projectCardInformation">
                        <h2 class="TituloProjeto">${projectName}</h2>
                        <p class="ProjectLanguage">${projectProgramingLanguage}</p>
                        <p class="ProjectDate">Último Commit: ${projectLastCommitDate}</p>
                        </div>
                        <a href=${projectUrl} target='blank' class='VerProjetoButton'><button>Ver no GitHub</button></a>
            </li>`
        }
        function createHiddenProjectCard(){
            return`<li class='GridProjetosEscondidosWrapped' id=${index}>
                        <div class="projectCardInformation">
                        <h2 class="TituloProjeto">${projectName}</h2>
                        <p class="ProjectLanguage">${projectProgramingLanguage}</p>
                        <p class="ProjectDate">Último Commit: ${projectLastCommitDate}</p>
                        </div>
                        <a href=${projectUrl} target='blank' class='VerProjetoButton'><button>Ver no GitHub</button></a>
            </li>`
        }
        if(index <= 2){
            projetoList.innerHTML += createProjectCard();
        }else{
            projetoList.innerHTML += createHiddenProjectCard();
        }   
    })   
}).catch();
