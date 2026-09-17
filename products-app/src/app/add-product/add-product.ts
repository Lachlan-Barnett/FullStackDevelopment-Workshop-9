import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProddataService } from '../services/proddata';
import { Product } from '../models/product.model';

@Component({
    imports: [CommonModule, FormsModule],
    selector: 'app-add-product',
    styleUrl: './add-product.css',
    templateUrl: './add-product.html',
})
export class AddProduct {
    productid: number | null = null;
    productname = '';
    productdesc = '';
    productprice: number | null = null;
    productunits: number | null = null;
    message = '';

    constructor(private proddata: ProddataService, private router: Router) {}

    addNewProduct(): void {
        const newProduct: Product = {
            id: this.productid!,
            name: this.productname,
            description: this.productdesc,
            price: this.productprice!,
            units: this.productunits!
        };

        this.proddata.add(newProduct).subscribe(data => {
            if (data.ok) {
                this.router.navigate(['']);
            } else {
                this.message = data.err;
            }
        });
    }
}