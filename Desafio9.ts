// 9 - Desenvolva uma função que, dado um nome de entrada, retorna se o nome está contido na lista.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list: [] = JSON.parse(data);

function nameContainedInTheList(caracter: string){
    var message = '';
    const names = list.reduce((previousValue, client: Client) => {
        const search = caracter.replace(new RegExp("/" + caracter + "/"), 'replacement')
        const firstName = client.name.split(" ");
        if(firstName[0].match(search)){
            message = `${caracter} está contido na lista`;
        }
        return message;
    }, {})
    if(names){
        console.log(names);
    }else{
        console.log(`${caracter} não contido na lista`)
    }
}

nameContainedInTheList('Gildomar')