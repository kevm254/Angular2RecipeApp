System.register(['angular2/core', '../mock/shopping-list'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, shopping_list_1;
    var ShoppingListService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (shopping_list_1_1) {
                shopping_list_1 = shopping_list_1_1;
            }],
        execute: function() {
            ShoppingListService = (function () {
                function ShoppingListService() {
                }
                ShoppingListService.prototype.getAllItems = function () {
                    return shopping_list_1.SHOPPING_LIST;
                };
                ShoppingListService.prototype.getItem = function (index) {
                    return shopping_list_1.SHOPPING_LIST[index];
                };
                ShoppingListService.prototype.getIndexOfItem = function (item) {
                    return shopping_list_1.SHOPPING_LIST.indexOf(item);
                };
                ShoppingListService.prototype.insertItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.push(item);
                };
                ShoppingListService.prototype.insertItems = function (items) {
                    Array.prototype.push.apply(shopping_list_1.SHOPPING_LIST, items);
                };
                ShoppingListService.prototype.deleteItem = function (item) {
                    shopping_list_1.SHOPPING_LIST.splice(shopping_list_1.SHOPPING_LIST.indexOf(item), 1);
                };
                ShoppingListService.prototype.updateItem = function (index, item) {
                    shopping_list_1.SHOPPING_LIST[index] = item;
                };
                ShoppingListService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListService);
                return ShoppingListService;
            })();
            exports_1("ShoppingListService", ShoppingListService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zaG9wcGluZy1saXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOlsiU2hvcHBpbmdMaXN0U2VydmljZSIsIlNob3BwaW5nTGlzdFNlcnZpY2UuY29uc3RydWN0b3IiLCJTaG9wcGluZ0xpc3RTZXJ2aWNlLmdldEFsbEl0ZW1zIiwiU2hvcHBpbmdMaXN0U2VydmljZS5nZXRJdGVtIiwiU2hvcHBpbmdMaXN0U2VydmljZS5nZXRJbmRleE9mSXRlbSIsIlNob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbSIsIlNob3BwaW5nTGlzdFNlcnZpY2UuaW5zZXJ0SXRlbXMiLCJTaG9wcGluZ0xpc3RTZXJ2aWNlLmRlbGV0ZUl0ZW0iLCJTaG9wcGluZ0xpc3RTZXJ2aWNlLnVwZGF0ZUl0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUlBO2dCQUFBQTtnQkE2QkFDLENBQUNBO2dCQTNCR0QseUNBQVdBLEdBQVhBO29CQUNJRSxNQUFNQSxDQUFDQSw2QkFBYUEsQ0FBQ0E7Z0JBQ3pCQSxDQUFDQTtnQkFFREYscUNBQU9BLEdBQVBBLFVBQVFBLEtBQWFBO29CQUNqQkcsTUFBTUEsQ0FBQ0EsNkJBQWFBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNoQ0EsQ0FBQ0E7Z0JBRURILDRDQUFjQSxHQUFkQSxVQUFlQSxJQUFnQkE7b0JBQzNCSSxNQUFNQSxDQUFDQSw2QkFBYUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ3ZDQSxDQUFDQTtnQkFFREosd0NBQVVBLEdBQVZBLFVBQVdBLElBQWdCQTtvQkFDdkJLLDZCQUFhQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtnQkFDN0JBLENBQUNBO2dCQUVETCx5Q0FBV0EsR0FBWEEsVUFBWUEsS0FBaUJBO29CQUN6Qk0sS0FBS0EsQ0FBQ0EsU0FBU0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsNkJBQWFBLEVBQUVBLEtBQUtBLENBQUNBLENBQUNBO2dCQUNyREEsQ0FBQ0E7Z0JBRUROLHdDQUFVQSxHQUFWQSxVQUFXQSxJQUFnQkE7b0JBQ3ZCTyw2QkFBYUEsQ0FBQ0EsTUFBTUEsQ0FBQ0EsNkJBQWFBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO2dCQUN6REEsQ0FBQ0E7Z0JBRURQLHdDQUFVQSxHQUFWQSxVQUFXQSxLQUFhQSxFQUFFQSxJQUFnQkE7b0JBQ3RDUSw2QkFBYUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsR0FBR0EsSUFBSUEsQ0FBQ0E7Z0JBQ2hDQSxDQUFDQTtnQkE1QkxSO29CQUFDQSxpQkFBVUEsRUFBRUE7O3dDQTZCWkE7Z0JBQURBLDBCQUFDQTtZQUFEQSxDQTdCQSxBQTZCQ0EsSUFBQTtZQTdCRCxxREE2QkMsQ0FBQSIsImZpbGUiOiJzaGFyZWQvc2hvcHBpbmctbGlzdC5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcclxuaW1wb3J0IHtJbmdyZWRpZW50fSBmcm9tIFwiLi9pbmdyZWRpZW50XCI7XHJcbmltcG9ydCB7U0hPUFBJTkdfTElTVH0gZnJvbSAnLi4vbW9jay9zaG9wcGluZy1saXN0JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdFNlcnZpY2Uge1xyXG4gICAgZ2V0QWxsSXRlbXMoKXtcclxuICAgICAgICByZXR1cm4gU0hPUFBJTkdfTElTVDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0SXRlbShpbmRleDogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIFNIT1BQSU5HX0xJU1RbaW5kZXhdO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRJbmRleE9mSXRlbShpdGVtOiBJbmdyZWRpZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIFNIT1BQSU5HX0xJU1QuaW5kZXhPZihpdGVtKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaW5zZXJ0SXRlbShpdGVtOiBJbmdyZWRpZW50KSB7XHJcbiAgICAgICAgU0hPUFBJTkdfTElTVC5wdXNoKGl0ZW0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpbnNlcnRJdGVtcyhpdGVtczogSW5ncmVkaWVudCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KFNIT1BQSU5HX0xJU1QsIGl0ZW1zKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGVsZXRlSXRlbShpdGVtOiBJbmdyZWRpZW50KSB7XHJcbiAgICAgICAgU0hPUFBJTkdfTElTVC5zcGxpY2UoU0hPUFBJTkdfTElTVC5pbmRleE9mKGl0ZW0pLCAxKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdXBkYXRlSXRlbShpbmRleDogbnVtYmVyLCBpdGVtOiBJbmdyZWRpZW50KSB7XHJcbiAgICAgICAgU0hPUFBJTkdfTElTVFtpbmRleF0gPSBpdGVtO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
