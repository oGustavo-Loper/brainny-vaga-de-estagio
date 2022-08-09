// 3- Liste os nomes dos clientes no padrão: "Cliente INDEX: NOME_DO_CLIENTE".

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list:[] = JSON.parse(data);

function listNamesWithIndex(){
    list.forEach((cliente: Client, index) => console.log(`Cliente ${index}: ${cliente.name}`))
}
listNamesWithIndex();