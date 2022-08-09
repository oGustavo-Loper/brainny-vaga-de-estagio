// 13 - Crie uma função que receba um cliente e adicione no INÍCIO do array de clientes.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf8')
const lista: Client[] = JSON.parse(data)

function inserir(name: string, birthDate: string, gender: string, lastPurchaseDate: string, countPurchase: string){
  const client: Client = {
      name: name,
      birthDate: new Date(birthDate),
      gender: gender,
      lastPurchaseDate: new Date(lastPurchaseDate),
      countPurchase: countPurchase,
      lastPurchase: 1
  }
  lista.unshift(client)
  console.log(lista)
}

inserir('Gustavo Loper','2001-05-16T21:35:02.443Z','man','2018-06-05T21:35:02.443Z','1')