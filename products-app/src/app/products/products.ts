import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { ProddataService } from '../services/proddata';
import { Product } from '../models/product.model';

@Component({
    imports: [CommonModule, RouterLink],
    selector: 'app-products',
    styleUrl: './products.css',
    templateUrl: './products.html',
})
export class Products implements OnInit {
    products: Product[] = [];

    constructor(private proddata: ProddataService, private router: Router) {}

    ngOnInit(): void {
        console.log('Products ngOnInit fired');
        this.getProducts();
    }

    getProducts(): void {
        this.proddata.getlist().subscribe({
            next: data => {
                console.log('getlist response:', data);
                this.products = data;
            },
            error: err => {
                console.error('getlist FAILED:', err);
            }
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