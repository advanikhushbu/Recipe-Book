import { Component } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
    selector:'app-shopping-list',
    templateUrl:'./shopping-list.component.html',
    styleUrls:['./shopping-list.component.scss']
})

export class ShoppingList {
    ingredients: Ingredients[] = [
        new Ingredients('Banana', 10),
        new Ingredients('Apple', 2)
    ]
}