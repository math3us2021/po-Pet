import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './component/product-create/product.component';

const routes: Routes = [
  {
      path: '',
      component: ProductComponent,
  },
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class ProductRoutingModule { }
