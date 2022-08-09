import { faker } from '@faker-js/faker';
import fs from 'fs';

faker.locale = 'pt_BR'

let ListaDeDados = [];

function GerarLista(){
    const name = faker.name.findName();
    const birthDate = faker.date.birthdate({ min: 1910, max: 2006, mode: "year"});
    const gender = faker.name.gender();
    const lastPurchaseDate = faker.date.between('2010-01-01T00:00:00.000Z', '2022-01-01T00:00:00.000Z')
    const lastPurchase = faker.random.numeric(2);

    return { name, birthDate, gender, lastPurchaseDate, lastPurchase };
}

for(let i = 0; i < 1000; i++){
    ListaDeDados.push(GerarLista());
}

const dadosJson = JSON.stringify(ListaDeDados);

fs.writeFile('dados.json', dadosJson, (err) => {
    if(err){
        console.log(err , "Deu Erro");
    }
    else{
        console.log("Dados Gerados com Sucesso");
    }
})