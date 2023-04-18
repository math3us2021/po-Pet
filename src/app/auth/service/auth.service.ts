import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, Subscription, catchError, map } from 'rxjs';
import { Owner } from 'src/app/model/types';
import { PoNotificationService } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  mySubscription: Subscription | undefined;
  owner: Owner[] = [];
  url = 'http://localhost:3001/owner';

  menuEmitter = new EventEmitter<boolean>();

  constructor(
    private router: Router,
    private http: HttpClient,
    private poNotification: PoNotificationService
  ) {

  }

  getAuth(email: string): Observable<Owner[]> {
    return this.http
      .get<Owner>(this.url, {
        params: {
          email: email,
        },
      })
      .pipe(
        map((obj: Owner) => {
          return obj;
        }),
        catchError((e) => this.errorHandler(e))
      );
  }

  showMenu(email: string) {
    this.mySubscription = this.getAuth(email).subscribe((obj) => {
      this.owner = obj;
      if (this.owner.length === 0) {
        this.poNotification.error('Email não cadastrado');
        throw new Error('Email não cadastrado');
      }
      localStorage.setItem('owner', JSON.stringify(this.owner));
      this.menuEmitter.emit(true);
      this.router.navigate(['/home']);
      this.poNotification.success({
        message: `Seja bem vindo ${this.owner[0].name}!`,
        actionLabel: 'OK',
        duration: 2000,
      });

    });
  }

  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }

  errorHandler(e: any): Observable<any> {
    alert('Ocorreu um erro!');
    return EMPTY; //Observable vazio
  }

  getCep(cep: string): Observable<any> {
    return this.http.get<any>(`https://viacep.com.br/ws/${cep}/json/`);
  }

  createOwner(owner: Owner): Observable<Owner> {
    return this.http.post<Owner>(this.url, owner).pipe(
      map((obj) => {
        this.poNotification.success({
          message: `Cadastro realizado com sucesso!`,
          actionLabel: 'OK',
          duration: 2000,
        });
        return obj;
      }),
      catchError((e) => this.errorHandler(e))
    );
  }
}
