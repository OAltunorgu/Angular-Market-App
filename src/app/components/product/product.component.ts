import { BasketModel } from './../../models/basket';
import { ProductModel } from './../../models/product';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [
    {
      name: 'Peynir',
      price: 32.95,
      imageUrl:
        'https://www.peynircibaba.com/image/cache/catalog/urunler/1011-257x257.jpg',
    },
    {
      name: 'Zeytin',
      price: 109.75,
      imageUrl:
        'https://www.peynircibaba.com/image/cache/catalog/urunler/8680395182424-257x257.jpg',
    },
    {
      name: 'Afitat Ceviz İçi',
      price: 114.95,
      imageUrl:
        'https://www.peynircibaba.com/image/cache/catalog/urunler/1065-257x257.jpg',
    },
    {
      name: 'Sarelle Şekersiz',
      price: 66.5,
      imageUrl:
        'https://www.peynircibaba.com/image/cache/catalog/urunler/8690550914883-257x257.jpg',
    },
    {
      name: 'Dut Pekmezi',
      price: 28.5,
      imageUrl:
        'https://www.peynircibaba.com/image/catalog/urunler/8697911381674.jpg',
    },
    {
      name: 'Erzurum Kıtlama',
      price: 43.95,
      imageUrl: 'https://www.peynircibaba.com/image/catalog/urunler/1155.jpg',
    },
    {
      name: 'Patlıcan Kurusu',
      price: 42.75,
      imageUrl:
        'https://www.peynircibaba.com/image/catalog/urunler/8699036590023.jpg',
    },
    {
      name: 'Jalapeno Biber',
      price: 21.75,
      imageUrl:
        'https://www.peynircibaba.com/image/catalog/urunler/8680395186019.jpg',
    },
  ];

  baskets: BasketModel[] = [];
  @Output() myEvent: EventEmitter<any> = new EventEmitter();

  constructor(private toastrService: ToastrService) {}

  addBasket(product: ProductModel) {
    let basketModel = new BasketModel();
    basketModel.product = product;
    basketModel.quantity = parseInt(
      (<HTMLInputElement>document.getElementById('quantity-' + product.name))
        .value
    );
    (<HTMLInputElement>(
      document.getElementById('quantity-' + product.name)
    )).value = '1';
    this.baskets.push(basketModel);

    this.myEvent.emit({ data: this.baskets });
    this.toastrService.success(
      basketModel.quantity + ' adet ' + product.name + ' sepete eklenmiştir.'
    );
  }

  ngOnInit(): void {}
}
