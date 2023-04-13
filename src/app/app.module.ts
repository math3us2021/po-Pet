
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { MenuModule } from './template/menu/menu.module';

import { PoMenuModule } from '@po-ui/ng-components';
import { HomeModule } from './view/home/home.module';
import { DescriptionModule } from './description/description.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PoTemplatesModule,
    AuthModule,
    MenuModule,
    PoMenuModule,
    HomeModule,
    DescriptionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
