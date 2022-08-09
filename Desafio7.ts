// 7 - Desenvolva uma função que retorne apenas o primeiro nome dos clientes cujo os nomes começam com o caractere de entrada da função.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list:[] = JSON.parse(data);

function returnFirstNameCaracter(caracter: string){
    list.filter((client: Client) =>{ 
        const search = caracter.toUpperCase().replace(new RegExp("/" + caracter + "/"), 'replacement')
        const firstName = client.name.split(" ");
        if(firstName[0].match(search)){
            console.log(firstName[0]);
        }
    })
}
returnFirstNameCaracter('g')