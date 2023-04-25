import { Component } from '@angular/core';
import { of, range } from 'rxjs';
import { Owner, Pet } from 'src/app/model/types';

@Component({
  selector: 'app-pet-information',
  templateUrl: './pet-information.component.html',
  styleUrls: ['./pet-information.component.sass'],
})
export class PetInformationComponent {
  pets: Pet[] = [];
  items: Owner[] = [];
  numbers$ = of([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  // numbers$ = range(0,23);


  ngOnInit() {

  }


}
