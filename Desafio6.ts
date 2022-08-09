// 6 - Desenvolva uma função que retorne apenas o primeiro nome dos clientes.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list:[] = JSON.parse(data);

function returnFirstName(){
    list.filter((client: Client) => {
        var firstName = client.name.split(" ")
        console.log(firstName[0]);
    })
}

returnFirstName()