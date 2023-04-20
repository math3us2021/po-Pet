import { Component } from '@angular/core';
import {
  PoCheckboxGroupOption,
  PoSelectOption,
  PoListViewAction,
  PoListViewLiterals,
  PoNotificationService
} from '@po-ui/ng-components';
import { DescriptionService } from '../service/description.service';
import { Owner, Pet } from 'src/app/model/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.sass']
})
export class DescriptionComponent {
  items: Owner[] = [];
  pets: Pet[] = [];

  items$: Observable<Owner[]>
  constructor(
    private descriptionService: DescriptionService,
  ) {
    this.items$ = this.descriptionService.getItems();
  }

  ngOnInit() {


    const owner = localStorage.getItem('owner');
    if (owner) {
      this.items = JSON.parse(owner);
      this.items.map((item) => {
        this.pets = item.pets
      })
    }

    // this.descriptionService.getItems().subscribe(
    //   (items: Owner[]) => {
    //     this.items = items;
    //     items.map((item) => {
    //       this.pets = item.pets
    //     })
    //   })
  }
  showDetail() {
    return false
  }
}
