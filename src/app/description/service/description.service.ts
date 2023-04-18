import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, catchError, map } from 'rxjs';
import { Owner } from 'src/app/model/types';

@Injectable({
  providedIn: 'root'
})
export class DescriptionService {
  // teste: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)


  constructor(
    private http: HttpClient
  ) { }

  getItems(): Observable<Owner[]>{
    return this.http.get<Owner>('http://localhost:3001/owner').pipe(
      map((res: Owner) => {
        console.log(res)
        return res
      }),
      catchError((error: string) => this.errorHandler(error))
    )
  }

  errorHandler(e: any): Observable<any> {
    console.log('Ocorreu um erro!')
    return EMPTY //Observable vazio
  }

}
