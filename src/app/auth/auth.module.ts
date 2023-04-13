import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './component/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { PoPageLoginModule } from '@po-ui/ng-templates';
import { PoFieldModule } from '@po-ui/ng-components';
import { PoButtonModule } from '@po-ui/ng-components';
import { FormsModule } from '@angular/forms';
import { PoContainerModule } from '@po-ui/ng-components';
import { AuthService } from './service/auth.service';
// import { OwnerCreateComponent } from './component/owner-create/owner-create.component';
import { PoModalModule } from '@po-ui/ng-components';
import { PoDynamicModule } from '@po-ui/ng-components';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    AuthComponent,
    // OwnerCreateComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PoPageLoginModule,
    PoFieldModule,
    PoButtonModule,
    FormsModule,
    PoContainerModule,
    PoModalModule,
    PoDynamicModule,
    PoModule
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
