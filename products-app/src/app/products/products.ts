import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ProddataService } from '../services/proddata';
import { Product } from '../models/product.model';

@Component({
    imports: [CommonModule],
    selector: 'app-products',
    styleUrl: './products.css',
    templateUrl: './products.html',
})
export class Products implements OnInit {
    products: Product[] = [];

    constructor(private proddata: ProddataService, private router: Router) {}

    ngOnInit(): void {
        this.getProducts();
    }

    getProducts(): void {
        this.proddata.getlist().subscribe(data => {
            this.products = data;
        });
    }

    deleteProduct(id: string | undefined): void {
        if (!id) return;
        if (confirm('Are you sure you want to delete this item')) {
            this.proddata.delete(id).subscribe(data => {
                this.products = data;
            });
        }
    }

    updateProduct(product: Product): void {
        localStorage.setItem('product', JSON.stringify(product));
        this.router.navigate(['/update']);
    }
}