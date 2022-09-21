import { Felino } from "./felino";

class Leao extends Felino {
    public emitSound(sound: string): void {
        console.log (`Leao emite ${sound}`)
    }
    public caca ( presa: string): void;
    public caca (presa: string, qtpresas: number): void;
    public caca ( presa: string ,qtpresas: number,tipopresa: string): void;

    public caca ( presa: string ,qtpresas?: number,tipopresa?: string){
        if(tipopresa != undefined) {
            console.log (`Leao está caçando um ${tipopresa}`);


        }
        const numpresas = (qtpresas == undefined)? 1: qtpresas;
        console.log (`Leao está caçando ${numpresas} ${presa}`)
    }
    
}
 export {Leao}

