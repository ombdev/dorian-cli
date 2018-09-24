import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { Factura } from '../factura';
import { ItemFactura } from '../item-factura';

@Component({
  selector: 'app-factura-form',
  templateUrl: './factura-form.component.html',
  styleUrls: ['./factura-form.component.css']
})
export class FacturaFormComponent implements OnInit {
  factura: Factura;

  constructor() {
    this.factura = new Factura('moral',
                                'MOB800114KW1',
                                'email@example.com',
                                'Gastos en general',
                                [new ItemFactura('', '', 0, 0, 'IVA_16', 0)]);
  }

  ngOnInit() {
  }

  printItemsFactura() {
    this.factura.items.forEach((item, index) => {
      console.log(item, index);
    });
  }

  onSubmit(f: NgForm) {
    this.printItemsFactura();
    console.log(f.value, f.valid); // Verificar los indices de los componentes cuando se borran items, no guardan la secuencia
  }

  onAgregarLinea() {
    this.factura.items.push(new ItemFactura('', '', 0, 0, 'IVA_16', 0));
    this.printItemsFactura();
  }

  onBorrarLinea(i: number) {
    if (this.factura.items.length > 1) {
      this.factura.items.splice(i, 1);
      this.printItemsFactura();
    }
  }
}
