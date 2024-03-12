import angular from "angular";

import template from './shopping-list.template.html';

angular.module('shoppingList').component('shoppingList', {
    template: template,
    controller: function ShoppingListController() {
        const self = this;

        self.newItem = '';
        self.items = [];

        self.addNewItem = () => {
            if(self.newItem === '') return;

            self.items.push({
                id: self.items.length,
                name: self.newItem
            });
            self.newItem = '';
        };

        self.deleteItem = (itemToDelete) => {
            self.items = self.items.filter(item => item.id !== itemToDelete.id);
        }
    }
})