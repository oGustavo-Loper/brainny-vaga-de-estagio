// 2- Liste os nomes dos clientes no padrão: "Cliente: NOME_DO_CLIENTE"

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list : [] = JSON.parse(data);

function listNames(){
    list.map((i: Client) =>  console.log(`Cliente: ${i.name}`))
}
listNames();