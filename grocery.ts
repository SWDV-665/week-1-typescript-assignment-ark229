// CREATE THE GROCERY CLASS
class Grocery {
    name: string;
    desc: string;
    quantity: number;
    item_price: number;
    total: number

    // create a class constructor
    constructor(name: string, desc: string, quantity: number, item_price: number) {
        this.name = name;
        this.desc = desc;
        this.quantity = quantity;
        this.item_price = item_price;
        this.total = quantity * item_price;
    }

}

//GROCERY ITEMS
let bacon = new Grocery('Bacon', 'Fields Smoked Bacon', 2, 6.99);
let fruit_punch = new Grocery('Punch', 'Kits Fruit Punch Drink', 2, 2.50);
let eggs = new Grocery('Eggs', 'Dozen Fresh Eggs', 3, 1.99 );
let oatmeal = new Grocery('Oatmeal', 'Stars Quick Oats', 1, 2.59);
let chicken = new Grocery('Chicken', 'Meals Drumsticks', 3, 9.99);

//CREATE THE ARRAY FOR GROCERY ITEMS
let items: Grocery[] = [];

//PUSH METHOD TO APPEND ITEMS IN THE ARRY/ RETURN LENGTH OF NEW ARRAY
items.push(bacon);
items.push(fruit_punch);
items.push(eggs);
items.push(oatmeal);
items.push(chicken);

//CREATE THE TABLE FOR THE HTML DOCUMENT
const create_table = document.getElementById('grocery') as HTMLTableElement;

items.map(grocery => {
    const {name, desc, quantity, item_price, total} = grocery;
    const row = create_table.insertRow()
    row.innerHTML = `
        <td id="name">${name}</td>
        <td id="desc">${desc}</td>
        <td id="quantity">${quantity}</td>
        <td id="item_price">${item_price}</td>
        <td id="total">${total}</td>`;
});

