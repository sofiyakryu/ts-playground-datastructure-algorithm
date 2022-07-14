import { addProductToCart, Item, calculatePrice, addProductToCart2, calculatePrice2 } from './shopping-cart';
describe('Shopping cart', () => {

    it('should add an item to the cart', () => {

        let cart: Item[] = [];
        let item: Item = {
            id: 2,
            name: 'fish',
            price: 4
        };

        let result = addProductToCart(cart, item);

        expect(result[0]).toEqual(item);
    });

    it('should calculate the price', () => {

        let fish: Item = {
            id: 2,
            name: 'fish',
            price: 4
        };
        let meat: Item = {
            id: 1,
            name: 'meat',
            price: 3
        };

        let cart: Item[] = [fish, meat, meat, fish];
        let result = calculatePrice(cart);

        expect(result).toEqual(14);

    });

    it('should add an item to the cart 2', () => {

        let cart: Map<Item, number> = new Map();
        let item: Item = {
            id: 1,
            name: 'fish',
            price: 4
        };
        let item2: Item = {
            id: 2,
            name: 'meat',
            price: 4
        };

        addProductToCart2(cart, item);
        addProductToCart2(cart, item);
        addProductToCart2(cart, item2);

        expect(cart.get(item)).toEqual(2);
        expect(cart.get(item2)).toEqual(1);
    });

    it('should calculate the price2', () => {

        let fish: Item = {
            id: 2,
            name: 'fish',
            price: 4
        };
        let meat: Item = {
            id: 1,
            name: 'meat',
            price: 3
        };

        let cart: Map<Item, number> = new Map();

        
        addProductToCart2(cart,fish);
        addProductToCart2(cart, fish);
        addProductToCart2(cart, fish);
        addProductToCart2(cart, fish);

        addProductToCart2(cart, meat);
        addProductToCart2(cart, meat);
        addProductToCart2(cart, meat);
        addProductToCart2(cart, meat);

        const result = calculatePrice2(cart);

        expect(result).toEqual(28);

    });

});