export type Item = {
    id: number;
    name: string;
    price: number;
}

const meat: Item = {
    id: 1,
    name: 'meat',
    price: 3
}

const fish: Item = {
    id: 2,
    name: 'fish',
    price: 4
}

export const addProductToCart = (cart: Item[], item: Item) => {
    cart.push(item);
    return cart;
}

export const calculatePrice = (cart: Item[]) => {
    let price = 0;

    // for (let i = 0; i < cart.length; i++ ) {
    //     price += cart[i].price;
    // }

    cart.forEach((item)=>price += item.price);

    return price;
}

let cart: Map<Item,number> = new Map();

cart.set(fish, 1);
cart.set(meat, 1);

//check if item exist
cart.has(meat);

//is not new item
cart.get(meat);
if (cart.get(meat)){
    const quantity = cart.get(meat);
    cart.set(meat, quantity? quantity + 1: 0);
};


export const addProductToCart2 = (cart: Map<Item, number>, item: Item) => {
    if (cart.has(item)) {
        let quantity = cart.get(item);
        cart.set(item, quantity?quantity+ 1:0);
    } else {
        cart.set(item, 1);
    }
    return cart;
}

export const calculatePrice2 = (cart: Map<Item, number>) => {
    let price = 0;
    cart.forEach((quantity, item) => {
        price += item.price * quantity;
    })
    return price;
}

//Array - collection of elements

//Map - key value pairs
//entry set = pair of key and value
//no multiple keys
// set(key, value) add entry in the map
// get(key) log(n)
// has(key)








//