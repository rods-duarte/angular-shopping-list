import angular from "angular";

import './shopping-list/shopping-list.module';
import './shopping-list/shopping-list.component';

import './app.css';

angular.module('shoppingListApp', [
    'shoppingList'
]);