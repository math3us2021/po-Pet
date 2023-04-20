import { PoContainerModule } from '@po-ui/ng-components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeederComponent } from './components/feeder/feeder.component';
import { FeederRoutingModule } from './feeder-routing.module';
import { PetInformationComponent } from './components/pet-information/pet-information.component';
import { PoListViewModule } from '@po-ui/ng-components';
import { PoInfoModule} from '@po-ui/ng-components';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FormsModule } from '@angular/forms';
// import { ButtonsModule } from 'ngx-bootstrap/buttons' ;


@NgModule({
  declarations: [
    FeederComponent,
    PetInformationComponent
  ],
  imports: [
    // ButtonsModule.forRoot(),
    // TimepickerModule.forRoot(),
    CommonModule,
    FeederRoutingModule,
    PoContainerModule,
    PoListViewModule,
    PoInfoModule,
    FormsModule
  ]
})
export class FeederModule { }
