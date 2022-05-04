export class Payment {
    constructor(respient, details, amount) {
        this.respient = respient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.respient} is owed $${this.amount} for ${this.details}`;
    }
}
