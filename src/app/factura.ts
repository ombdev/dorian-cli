import { ItemFactura } from './item-factura'

export class Factura {
    tipoPersona: string;
    rfc: string;
    email: string;
    uso: string;
    items: ItemFactura[];
    
    constructor(tipoPersona: string,
                rfc: string,
                email: string,
                uso: string,
                items: ItemFactura[]) {

        this.tipoPersona = tipoPersona;
        this.rfc = rfc;
        this.email = email;
        this.uso = uso;
        this.items = items;
    }
}
