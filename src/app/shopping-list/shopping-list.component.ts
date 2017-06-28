import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;

  constructor(private slService: ShoppingListService, private router: Router) { }

  ngOnInit() {
    this.ingredients = this.slService.getIngredients();
    this.subscription = this.slService.ingredientsChanged
      .subscribe(
        (ingredients: Ingredient[]) => {
          this.ingredients = ingredients;
        }
      );
  }

  onEditItem(index: number) {
    this.slService.startedEditing.next(index);
  }

  checkout(){
    this.slService.buyIngredients();
    this.ingredients = this.slService.getIngredients();
    this.router.navigate(['shopping-exec']);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
