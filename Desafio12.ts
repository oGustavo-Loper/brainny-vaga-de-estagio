// 12 - Implemente uma função que retorne os dados dos clientes que já realizaram mais de 15 compras.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list:[] = JSON.parse(data)

function search() {
    list.filter((client: Client) => {
    if((client.lastPurchase) > 15){
      console.log(client);
    }
  })
}

search();