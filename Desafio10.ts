// 10 - Implemente uma função que retorna o total de vendas realizadas somando o total de compras de todos os clientes.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');

function salesAmount(): ReturnType<any>{
    const totalValue = JSON.parse(data)?.reduce(
        (sum:number, e:any) => sum + parseInt(e?.lastPurchase),
        0,
    )
    return totalValue;
}

console.log(salesAmount())