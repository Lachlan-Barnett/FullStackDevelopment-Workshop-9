import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProddataService } from '../services/proddata';
import { Product } from '../models/product.model';

@Component({
    imports: [FormsModule],
    selector: 'app-update-product',
    styleUrl: './update-product.css',
    templateUrl: './update-product.html',
})
export class UpdateProduct implements OnInit {
    product: Product = { _id: '', id: 0, name: '', description: '', price: 0, units: 0 };

    constructor(private proddata: ProddataService, private router: Router) {}

    ngOnInit(): void {
        const stored = localStorage.getItem('product');
        if (stored) {
            this.product = JSON.parse(stored);
        }
    }

    updateProduct(): void {
        this.proddata.update(this.product).subscribe(() => {
            localStorage.removeItem('product');
            this.router.navigate(['']);
        });
    }
}