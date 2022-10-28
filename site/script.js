animal1={nome:"Dara",idade:6,castrado:true,racoesQueGosta:["Babadog","Pitty","Qualquer uma"],imagem:"/imgs/dara.png"};
animal2 = { nome: "Dexter", idade: 8, castrado: false, racoesQueGosta: ["Babadog", "Onix", "Qualquer uma"], imagem: "/imgs/dexter.png" };
animal3 = { nome: "Phoebe", idade: 4, castrado: true, racoesQueGosta: ["Babadog", "A que tiver no pote dos outros"], imagem: "/imgs/phoebe.png" };
animal4 = { nome: "Frida", idade: 7, castrado: true, racoesQueGosta: ["Golden", "Golden Selecao Especial", "Qualquer uma"], imagem: "/imgs/frida.png" };
animal5 = { nome: "Blanco", idade: 5, castrado: true, racoesQueGosta: ["Todas"], imagem: "/imgs/blanco.png" };

let linkHead = "https://pt.wikipedia.org/wiki/Vira-lata";


arrayBichinhos=[];

const mediaIdades= (animal1.idade+animal2.idade+animal3.idade+animal4.idade+animal5.idade)/5

console.log(mediaIdades)

const castrados = animal1.castrado && animal2.castrado && animal3.castrado && animal4.castrado && animal5.castrado;

console.log(castrados)

animal1.castrado ? arrayBichinhos.push(animal1) : console.log(animal1.nome + " Nao foi adicionado ao array, pois nao eh castrado")
animal2.castrado ? arrayBichinhos.push(animal2) : console.log(animal2.nome + " Nao foi adicionado ao array, pois nao eh castrado")
animal3.castrado ? arrayBichinhos.push(animal3) : console.log(animal3.nome + " Nao foi adicionado ao array, pois nao eh castrado")
animal4.castrado ? arrayBichinhos.push(animal4) : console.log(animal4.nome + " Nao foi adicionado ao array, pois nao eh castrado")
animal5.castrado ? arrayBichinhos.push(animal5) : console.log(animal5.nome + " Nao foi adicionado ao array, pois nao eh castrado")

arrayBichinhos.push(animal2)

const exibeArrayString = (arrayRacoes) =>{
    let racoesString = " ";
    for(let i=0;i<arrayRacoes.length;i++){
        i==arrayRacoes.length-1? racoesString = racoesString+arrayRacoes[i] : racoesString = racoesString+arrayRacoes[i]+", "
    }

return racoesString
}

for(bichinho of arrayBichinhos){
    console.log("\n" + bichinho.nome.toUpperCase() + "\n" + "Idade: " + bichinho.idade + "\n" + "É castrado(a)?: " + bichinho.castrado + "\n" + "Rações que gosta: "+exibeArrayString(bichinho.racoesQueGosta))
}

console.log("\n")
console.log(arrayBichinhos)




const filtraArrayBichinhos = (arrayBichos,string)=>{
   for(bicho of arrayBichos){
    for(info in bicho){
        if(bicho[info]==string){
            console.log(bicho)
            return bicho
        }else{
            return alert("Nao foi encontrado nenhum item")
        }
    }
   }
}

let exemplo = "Dara"

filtraArrayBichinhos(arrayBichinhos,exemplo)

function castradoString(bichinho){
    let castradoImprime= "";
    bichinho?castradoImprime = "Sim" : castradoImprime = "Não";
    return castradoImprime
}


for (bichinho of arrayBichinhos) {
    let lista = document.getElementById("lista")
    let newBichinho = document.createElement("article")
    newBichinho.setAttribute("class","Bichinho")
    newBichinho.innerHTML += "<img src= "+bichinho.imagem+" />"+"<a HREF="+linkHead+">"+"<h1>"+bichinho.nome+"</h1>"+"</a>"+"<ul>"+"<li> Idade: "+bichinho.idade+"</li>"+"<li> Castrado(a): "+castradoString(bichinho.castrado)+"</li>"+"<li>Rações que gosta: "+exibeArrayString(bichinho.racoesQueGosta)+"</li>"
    newBichinho.setAttribute("id",bichinho.nome)
    lista.insertAdjacentElement("beforeend",newBichinho)
}

function retornaBichinho(event){
    let pesquisa = document.getElementById("pesquisa")
    let lista = document.getElementById("lista")
    let bichinhos = document.getElementsByTagName("h1")

    if(pesquisa.value===""){
        alert("Pesquisa inválida")
    }else{
        for(bichinho of bichinhos){
            console.log(bichinho.innerHTML);
            if(bichinho.innerHTML===pesquisa.value){
                let bicho = document.getElementById(pesquisa.value)
                bicho.style.display="flex"
            }else{
                let bicho = document.getElementById(bichinho.innerHTML)
                bicho.style.display = "none"
            }
        }
    }
}

function daltonismoProtanopia(evente){
    let daltonismoBichinho = document.getElementsByClassName("Bichinho")
    let daltonismoHeader = document.getElementsByTagName("header")
    let daltonismoBody = document.getElementsByTagName("body")
    let daltonismoFooter = document.getElementsByTagName("footer")
    let daltonismoNomes = document.getElementsByTagName("a")

    for(bichinho of daltonismoBichinho){
        bichinho.style.backgroundColor = "rgb(0, 64, 255)"
        bichinho.style.color = "yellowgreen"
    }
    
    daltonismoHeader[0].style.backgroundColor = "rgb(0, 64, 255)"
    daltonismoHeader[0].style.color = "yellowgreen"
    
    daltonismoBody[0].style.background = "linear-gradient(white,yellowgreen)"

    daltonismoFooter[0].style.backgroundColor = "rgb(0, 64, 255)"
    daltonismoFooter[0].style.color = "yellowgreen"

    for(nome of daltonismoNomes){
        nome.style.color = "yellowgreen"
    }

}

function daltonismoDeuteranopia(event){
    
}