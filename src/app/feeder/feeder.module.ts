import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeederComponent } from './components/feeder/feeder.component';
import { FeederRoutingModule } from './feeder-routing.module';



@NgModule({
  declarations: [
    FeederComponent
  ],
  imports: [
    CommonModule,
    FeederRoutingModule
  ]
})
export class FeederModule { }
