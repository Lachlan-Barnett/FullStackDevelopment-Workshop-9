import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProddataService {
    url = 'http://localhost:3000/api/';

    constructor(private http: HttpClient) {}

    getlist(): Observable<Product[]> {
        return this.http.get<Product[]>(this.url + 'getlist');
    }

    add(product: Product): Observable<any> {
        return this.http.post<any>(this.url + 'add', product);
    }

    update(product: Product): Observable<any> {
        return this.http.post<any>(this.url + 'update', product);
    }

    delete(id: string): Observable<Product[]> {
        return this.http.post<Product[]>(this.url + 'delete', { _id: id });
    }
}