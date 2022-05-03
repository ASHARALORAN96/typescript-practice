import { HasFormmater } from "../interfaces/hasFormmater";

export class Payment implements HasFormmater{
    constructor (
        readonly respient : string,
        private details : string,
        public amount : number
    ){}
    format (){
        return `${this.respient} is owed $${this.amount} for ${this.details}`
    }
}