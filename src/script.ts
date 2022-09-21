import { Felino } from "./felino";
import { Leao } from "./leao";

const felino = new Felino ();
const simba = new Leao ('simba');



felino.emitSound ('mroul');
simba.emitSound('Roar');
simba.caca('javali')
simba.caca('zebra',3)
simba.caca('girafa',1,'mamifero')


const leoes: Leao[] = [];

const leao1 = new Leao ('Scar')
const leao2 = new Leao ('Mufasa')
const leao3 = new Leao ('kiara')

leoes.push (simba,leao1,leao2,leao3);
leoes.pop();

leoes.forEach((leao) => {
    console.log(leao.name);

} )
