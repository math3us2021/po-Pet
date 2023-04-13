import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {
  PoDynamicFormField,
  PoDynamicFormFieldChanged,
  PoDynamicFormValidation,
  PoNotificationService
} from '@po-ui/ng-components';
import { Pet } from 'src/app/model/types';
import { ProductService } from '../../service/product.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent{
  setSpecieId : string = '';
  mySubscription: Subscription;

  person = {
    name: '',
    breed: '',
    age: '',
    birthDate: '',
  }
  validateFields: Array<string> = ['name'];

  fields: Array<PoDynamicFormField> = [
    { property: 'name', label: 'Name', required: true, gridColumns: 6, placeholder: 'Nome do Pet' },
    { property: 'breed', label: 'Raça', required: true, gridColumns: 6 },
    { property: 'age', label: 'Idade', required: true, gridColumns: 3, type: 'number', minLength: 1, maxLength: 3 },
    { property: 'birthDate', label: 'Data de nascimento', required: true, gridColumns: 3, type: 'date' },
    // {
    //   property: 'image',
    //   type: 'upload',
    //   gridColumns: 12,
    //   gridSmColumns: 12,
    //   label: 'Adicione a foto do pet',
    //   optional: true,
    //   url: 'https://po-sample-api.fly.dev/v1/uploads/addFile'
    // }
  ]

  constructor(
    private poNotification: PoNotificationService,
    private router: Router,
    private productService: ProductService,
    ) {
      this.mySubscription = this.productService.imageEmitter.subscribe(
        (id: string) => {
          this.setSpecieId = id;
        }
      )
    }


  ngOnInit(){

  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }

  onChangeFields(changedValue: PoDynamicFormFieldChanged): PoDynamicFormValidation {
    return {
      value: changedValue.value,
      fields: [
        {
          property: 'name',
          minLength: 3,
          maxLength: 50,
        },
        {
          property: 'type',
          minLength: 3,
          maxLength: 20,
        },
        {
          property: 'breed',
          minLength: 3,
          maxLength: 20,
        },
        {
          property: 'birthDate',
        }
      ]
    }
  }

  onLoadFields():PoDynamicFormField { //aqui carrega os dados do banco de dados
    // return this.registerService.getUserDocument(value);
    return{
      property: 'name',
    }
  }

  dataSave(value: Pet ) {
    const specie = this.setSpecieId;
    this.mySubscription = this.productService.createPet(value, specie ).subscribe(() => {
      this.poNotification.success('Cadastro realizado com sucesso!');
      this.router.navigate(['/home']);
    });
  }

  cancel() {
    this.router.navigate(['/home']);
  }
}
