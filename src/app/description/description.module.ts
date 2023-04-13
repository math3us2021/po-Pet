import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DescriptionComponent } from './description/description.component';
import { PoListViewModule } from '@po-ui/ng-components';
import { PoInfoModule} from '@po-ui/ng-components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PoContainerModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    DescriptionComponent,
  ],
  imports: [
    CommonModule,
    PoListViewModule,
    PoInfoModule,
    BrowserAnimationsModule,
    PoContainerModule
  ]
})
export class DescriptionModule { }
