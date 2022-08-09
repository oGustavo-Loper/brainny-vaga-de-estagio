// 11 - Implemente uma função que retorne os dados dos clientes que não compram há mais de 1 ano.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf8')
const list:[] = JSON.parse(data)

function calculatelastPurchaseDate(lastPurchaseDateCliente: Date) {
  const data = new Date(lastPurchaseDateCliente);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const birthdayThisYear = new Date(data.getDay(), data.getMonth(), currentYear);
  var lastPurchaseDate = currentYear - data.getFullYear();
  
  if(birthdayThisYear > currentDate) {
    lastPurchaseDate--;
  } 
  return lastPurchaseDate;
}

function busca() {
  list.filter((client: Client) => {
    const dataConvertida = calculatelastPurchaseDate(client.lastPurchaseDate)
    if(dataConvertida >= 1){
      console.log(client);
    }
  })
}
busca()