import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { Pet } from 'src/app/model/types';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  imageEmitter = new EventEmitter<string>();
  url = 'http://localhost:3001/pet';

  constructor(
    private http: HttpClient,
  ) { }

  setImageId(id: string){
    this.imageEmitter.emit(id);
  }

  createPet(pet: Pet, specie:string): Observable<Pet> {
    return this.http.post<Pet>(this.url, {
      name: pet.name,
      breed: pet.breed,
      age: pet.age,
      birthDate: pet.birthDate,
      type: specie
    }).pipe(
      map((obj) => obj),
      catchError((e) => {
        console.log(e);
        return EMPTY;
      }
    ));
  }

}
