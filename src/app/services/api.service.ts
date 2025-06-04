// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product { // Interface para tipar os dados do produto
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Exemplo de outro método GET (opcional, para um possível ponto extra)
  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`<span class="math-inline">\{this\.apiUrl\}/</span>{id}`);
  }
}