import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './view/home/component/component.component';
import { DescriptionComponent } from './description/description/description.component';
const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent,
    },
    {
      path: 'product',
      loadChildren: () => import('./product/product.module').then(m => m.ProductModule)
    },
    {
      path: 'feeder',
      loadChildren: () => import('./feeder/feeder.module').then(m => m.FeederModule)
    },
    {
      path: 'description',
      component: DescriptionComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
