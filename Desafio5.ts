// 5 - Desenvolva uma função que retorne apenas os nomes dos clientes.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list:[] = JSON.parse(data);

function returnName(){
    list.map((i: Client) => console.log(i.name));
}

returnName();