import {Component, ElementRef, Input, ViewChild} from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-pet-species',
  templateUrl: './pet-species.component.html',
  styleUrls: ['./pet-species.component.sass'],
})
export class PetSpeciesComponent {
  // @Input() setSpecieId: number = 0;
  setImg: boolean = false;
  imagens = [
    {id:'cachorro', url: 'assets/image/cachorro.jpg', alt: 'cachorro' },
    {id:'gato', url: 'assets/image/gato.jpg', alt: 'gato' },
    {id:'passaro',  url: 'assets/image/passaro.jpg', alt: 'passaro' },
  ];

  selectedImageId: string | null = null;
  constructor(
    private productService: ProductService,
    private el: ElementRef
  ) {}

  ngOnInit() {}

  setSpecie(id: string){
    this.selectedImageId = id;
    this.setImg = !this.setImg;

    // const imagemAnterior = this.el.nativeElement.querySelector('.clickFixed');
    // if (imagemAnterior) {
    //   imagemAnterior.classList.remove('clickFixed');
    // }

    // const imagemAtual = this.el.nativeElement.querySelector(`#${id}`);
    // if (imagemAtual) {
    //   imagemAtual.classList.add('clickFixed');
    // }


    // this.el.nativeElement.querySelector('.imag').classList.remove('clickFixed');
    // this.el.nativeElement.querySelector('.imag').classList.add('clickFixed');
    // this.productService.setImageId(id);
  }
}
