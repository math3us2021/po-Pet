import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeederComponent } from './components/feeder/feeder.component';

const routes: Routes = [
  {
      path: '',
      component: FeederComponent,
  },
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class FeederRoutingModule { }
