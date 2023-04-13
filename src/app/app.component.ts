import { Component, Input } from '@angular/core';
import { AuthService } from './auth/service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'po-vendas';
  menu: boolean = false;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.menuEmitter.subscribe((menu) => {
      this.menu = menu;
    });
  }


}
