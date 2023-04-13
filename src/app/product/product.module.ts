import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './component/product-create/product.component';
import { ProductRoutingModule } from './product-routing.module';
import { PoDynamicModule } from '@po-ui/ng-components';
import { PoContainerModule } from '@po-ui/ng-components';
import { PoModule } from '@po-ui/ng-components';
import { PetSpeciesComponent } from './component/pet-species/pet-species.component';



@NgModule({
  declarations: [
    ProductComponent,
    PetSpeciesComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    PoDynamicModule,
    PoContainerModule,
    PoModule
  ]
})
export class ProductModule { }
