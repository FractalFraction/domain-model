// Source Code for Basket Class

class Basket {
    constructor(items,capacity){
        this._items = items;
        this._capacity = capacity;
    }

    // Getters
    get capacity () {
        return this._capacity;
    }

    get items () {
        return this._items;
    }

    //Methods

    addItem () {
        return this.items.length < this.capacity ? this.items.push(newItem) : "Sorry,the basket is full."
    }

}