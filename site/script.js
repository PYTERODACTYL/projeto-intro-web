animal1={nome:"Dara",idade:6,castrado:true,racoesQueGosta:["Babadog","Pitty","Qualquer uma"]};
animal2={nome:"Dexter",idade:8,castrado:false,racoesQueGosta:["Babadog","Onix","Qualquer uma"]};
animal3={nome:"Phoebe",idade:4,castrado:true,racoesQueGosta:["Babadog","A que tiver no pote dos outros"]};
animal4={nome:"Frida",idade:7,castrado:true,racoesQueGosta:["Golden","Golden Selecao Especial","Qualquer uma"]};
animal5={nome:"Blanco",idade:5,castrado:true,racoesQueGosta:["Todas"]};

arrayBichinhos=[];


const mediaIdades= (animal1.idade+animal2.idade+animal3.idade+animal4.idade+animal5.idade)/5

console.log(mediaIdades)

const castrados = animal1.castrado && animal2.castrado && animal3.castrado && animal4.castrado && animal5.castrado;

console.log(castrados)

console.log("\n"+animal1.nome.toUpperCase()+"\n"+"Idade: "+animal1.idade+"\n"+"É castrado(a)?: "+animal1.castrado+"\n"+"Rações que gosta: "+animal1.racoesQueGosta)
console.log("\n"+animal2.nome.toUpperCase() + "\n" + "Idade: " + animal2.idade + "\n" + "É castrado(a)?: " + animal2.castrado + "\n" + "Rações que gosta: " + animal2.racoesQueGosta)
console.log("\n" + animal3.nome.toUpperCase() + "\n" + "Idade: " + animal3.idade + "\n" + "É castrado(a)?: " + animal3.castrado + "\n" + "Rações que gosta: " + animal3.racoesQueGosta)
console.log("\n" + animal4.nome.toUpperCase() + "\n" + "Idade: " + animal4.idade + "\n" + "É castrado(a)?: " + animal4.castrado + "\n" + "Rações que gosta: " + animal4.racoesQueGosta)
console.log("\n" + animal5.nome.toUpperCase() + "\n" + "Idade: " + animal5.idade + "\n" + "É castrado(a)?: " + animal5.castrado + "\n" + "Rações que gosta: " + animal5.racoesQueGosta)

console.log("\n")

animal1.castrado ? arrayBichinhos.push(animal1) : console.log(animal1.nome+" Nao foi adicionado ao array, pois nao eh castrado")
animal2.castrado ? arrayBichinhos.push(animal2) : console.log(animal2.nome + " Nao foi adicionado ao array, pois nao eh castrado")
animal3.castrado ? arrayBichinhos.push(animal3) : console.log(animal3.nome + " Nao foi adicionado ao array, pois nao eh castrado")
animal4.castrado ? arrayBichinhos.push(animal4) : console.log(animal4.nome + " Nao foi adicionado ao array, pois nao eh castrado")
animal5.castrado ? arrayBichinhos.push(animal5) : console.log(animal5.nome + " Nao foi adicionado ao array, pois nao eh castrado")

console.log(arrayBichinhos)