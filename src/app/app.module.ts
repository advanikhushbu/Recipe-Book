import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Recipes } from './recipes/recipes.component';
import { RecipeList } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetail } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItem } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEdit } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingList } from './shopping-list/shopping-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Recipes,
    RecipeList,
    RecipeDetail,
    RecipeItem,
    ShoppingEdit,
    ShoppingList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
