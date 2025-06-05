import { Component, OnInit } from '@angular/core';
import { ApiService, Product } from '../services/api.service'; // Importe o serviço e a interface
import { LoadingController } from '@ionic/angular'; // Para feedback de carregamento
import { TruncatePipe } from '../pipes/truncate.pipe'; // <<--- IMPORTAR AQUI



@Component({
  selector: 'app-home',  
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage implements OnInit {
  products: Product[] = [];
  isLoading: boolean = false;
  errorMessage: string | null = null;

  constructor(
    private apiService: ApiService,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    await this.loadProducts();
  }

  async loadProducts() {
    this.isLoading = true;
    this.errorMessage = null;
    const loading = await this.loadingCtrl.create({
      message: 'Carregando produtos...',
    });
    await loading.present();

    this.apiService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
        this.isLoading = false;
        loading.dismiss();
      },
      error: (err) => {
        console.error('Erro ao buscar produtos:', err);
        this.errorMessage = 'Não foi possível carregar os produtos. Tente novamente mais tarde.';
        this.isLoading = false;
        loading.dismiss();
      }
    });
  }
}