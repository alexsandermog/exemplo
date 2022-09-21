import { animal } from "./animal";

 class Felino extends animal {
     public emitSound(sound: string): void {
       console.log (`Felino emite ${sound}`)
     }

 }
 export {Felino };
