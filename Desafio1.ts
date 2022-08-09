//1 - Desenvolva, utilizando filter , uma função que, dado um caractere de entrada, retorne todos os registros de clientes cujo o nome inicia com o caractere dado.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list : [] = JSON.parse(data);

function getNameByInitial( caracter: string ){
    list.filter((client: Client) => {
        const search = caracter.toUpperCase().replace(new RegExp("/" + caracter + "/"), 'replacement')
        const firstName = client.name.split(" ");
        if(firstName[0].match(search)){
            console.log(client);
        }
    }) 
}
getNameByInitial('G')