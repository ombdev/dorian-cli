export class ItemFactura {
    cveProducto: string;
    descripcion: string;
    cantidad: number;
    precioUnit: number;
    impuesto: string;
    importe: number;
    idRandom: number;

    constructor(cveProducto: string,
                descripcion: string,
                cantidad: number,
                precioUnit: number,
                impuesto: string,
                importe: number) {
                    
        this.cveProducto = cveProducto;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
        this.precioUnit = precioUnit;
        this.impuesto = impuesto;
        this.importe = importe;
        this.idRandom = Math.floor((Math.random() * 10000) + 1);
    }
}
