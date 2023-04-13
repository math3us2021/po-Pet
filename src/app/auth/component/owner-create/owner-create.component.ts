// import { Component, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';

// import { Subscription } from 'rxjs';
// import { Owner } from 'src/app/model/types';
// import { NgForm } from '@angular/forms';
// import { PoModalComponent } from '@po-ui/ng-components';
// import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-owner-create',
//   templateUrl: './owner-create.component.html',
//   styleUrls: ['./owner-create.component.sass']
// })
// export class OwnerCreateComponent {
//   // reactiveForm!: UntypedFormGroup;

// owner: Owner = {
//   name: '',
//   cpf : '',
//   rg : '',
//   email: '',
//   birthDate: '',
//   phone: '',
//   address: {
//     street: '',
//     number: 0,
//     complement: '',
//     district: '',
//     city: '',
//     state: '',
//     zipCode: '',
//   },
//   pets: []
// }

// constructor (
//   private fb: UntypedFormBuilder,
//   private router: Router,
//   ) {
//     // this.createReactiveForm();


//   }

// // createReactiveForm() {
// //   this.reactiveForm = this.fb.group({
// //     name: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(30)])],
// //     address: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(50)])],
// //     number: ['', Validators.compose([Validators.required, Validators.min(1), Validators.max(99999)])],
// //     email: ['', Validators.required],
// //     website: ['', Validators.required]
// //   });
// // }

// onSubmit(form: any ){
//   console.log("🚀 ~ file: owner-create.component.ts:17 ~ OwnerCreateComponent ~ onSubmit ~ form:", form)
// }

// }
