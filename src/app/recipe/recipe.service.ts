import { Recipe } from "./recipe.modal";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Koftay',
            'This is recipe description for Koftay', 'https://c.pxhere.com/photos/9a/90/food_gastronomy_meat_tasty_dinner_restaurant_meal-1376098.jpg!d',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Onion', 5)
            ]),
        new Recipe('Aloo Qeema', 'This is recipe description for Aloo Qeema', 'https://fortheloveofyum.files.wordpress.com/2011/02/img_1118.jpg?w=460&h=306',
            [
                new Ingredient('Qeema', 5),
                new Ingredient('potato', 2)])
    ];
    constructor(private slService: ShoppingListService) { }

    getRecipes() {
        return this.recipes.slice();
    }
    addIngredientsToShoppingList(ingredient: Ingredient[]) {
        this.slService.addIngredientsFromRecipe(ingredient);
    }

}