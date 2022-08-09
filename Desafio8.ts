// 8 - Desenvolva uma função que retorne todos os usuários que são maiores de idade.

import fs from 'fs';
import { Client } from './ClassDados';

const data = fs.readFileSync('./dados.json', 'utf-8');
const list:[] = JSON.parse(data);
  
function searchAdultUser(){
    return list.filter((client: Client) => {
        const birthDate = new Date(client.birthDate).getTime();
        const today = new Date().getTime();
        const diffMilissegundos = today - birthDate;
        const diffSeconds = diffMilissegundos / 1000;
        const diffMinutes = diffSeconds / 60;
        const diffHours = diffMinutes / 60;
        const diffDias = diffHours / 24;
        const diffMonths = diffDias / 30;
        const diffYears = diffMonths / 12;
        return diffYears > 18; 
    })
}
console.log(searchAdultUser());