import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProddataService } from '../services/proddata';
import { Product } from '../models/product.model';

@Component({
    imports: [CommonModule, FormsModule, RouterLink],
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

        this.proddata.add(newProduct).subscribe({
            next: data => {
                if (data.ok) {
                    this.router.navigate(['']);
                } else {
                    this.message = data.err;
                }
            },
            error: err => {
                console.error('Add product failed:', err);
                this.message = 'Request failed: ' + (err.status === 0 ? 'cannot reach server (is it running? CORS blocked?)' : err.message);
            }
        });
    }
}