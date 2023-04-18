import { Component, Input } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs';
import { Owner } from 'src/app/model/types';
import { PoNotificationService } from '@po-ui/ng-components';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass']
})
export class AuthComponent {
  mySubscription: Subscription | undefined;

  email1(event: string) {
    console.log("🚀 ~ file: auth.component.ts:18 ~ AuthComponent ~ email1 ~ event:", event)
    this.email = event
  }
  email: string = '';
  password: string = '';
  valid = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
  owner: Owner[] = [];

  constructor(
    private authService: AuthService,
  ) {}

  onEmailChange() {
    this.authService.showMenu(this.email)
  }


}
