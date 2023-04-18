import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { Owner } from 'src/app/model/types';
import { NgForm } from '@angular/forms';
import { PoModalComponent } from '@po-ui/ng-components';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { PoSelectOption } from '@po-ui/ng-components';

@Component({
  selector: 'app-owner-create',
  templateUrl: './owner-create.component.html',
  styleUrls: ['./owner-create.component.sass']
})
export class OwnerCreateComponent {
  @Output() email = new EventEmitter<string>();
  mySubscription!: Subscription;
  fieldLabel : string;

  nameMask = 'AAAAAAAAAAAA';
  cpfMask = '999.999.999-99';
  rgMask = '99.999.999-9';
  phoneMask = '(99) 99999-9999';
  valid = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  zipMask = '99.999-999';

owner: Owner = {
  name: '',
  cpf : '',
  rg : '',
  email: '',
  birthDate: '',
  phone: '',
  address: {
    street: '',
    number: 0,
    complement: '',
    city: '',
    state: '',
    zipCode: '',
  },
  pets: []
}


constructor (
  private router: Router,
  private authService: AuthService,
  ) {
    this.fieldLabel = 'SP'
  }


  getAddressByZipCode(){
    this.mySubscription = this.authService.getCep(this.owner.address.zipCode).subscribe((obj) => {
      this.owner.address.street = obj.logradouro
      this.owner.address.city = obj.localidade
      this.owner.address.state = obj.uf
      this.fieldLabel = obj.uf
    })
  }

onSubmit(form: any){
  console.log("🚀 ~ file: owner-create.component.ts:61 ~ OwnerCreateComponent ~ onSubmit ~ form:", form)
  this.authService.createOwner(form.value).subscribe((obj) => {
    this.email.emit(form.value.email)
  })
}

public readonly optionsSelect: Array<PoSelectOption> = [
  { label: 'SP', value: 'sp' },
  { label: 'RJ', value: 'rj' },
  { label: 'MG', value: 'mg' },
  { label: 'RS', value: 'rs' },
  { label: 'PR', value: 'pr' },
]

onChange(value: string) {
  console.log("🚀 ~ file: owner-create.component.ts:75 ~ OwnerCreateComponent ~ onChange ~ value:", value)
  this.fieldLabel = value;
}

}
