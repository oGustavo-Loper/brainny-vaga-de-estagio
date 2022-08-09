// 4 -Desenvolva uma função que, dado o caractere de entrada, retorna apenas um número com o total de registros encontrados que iniciam com o caractere dado.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list: [] = JSON.parse(data);

function search(caracter: string){
    var counter = 0;
    const counterNomes = list.reduce((previousValue, client: Client) => {  
        const search = caracter.toUpperCase().replace(new RegExp("/" + caracter + "/"), 'replacement')
        const firstName = client.name.split(" ");
        if(firstName[0].match(search)){
            counter++;
        }
        return counter
        }, {})
    console.log(counterNomes);
}
search('B')