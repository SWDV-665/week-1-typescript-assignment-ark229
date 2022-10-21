// CREATE THE GROCERY CLASS
var Grocery = /** @class */ (function () {
    // create a class constructor
    function Grocery(name, desc, quantity, item_price) {
        this.name = name;
        this.desc = desc;
        this.quantity = quantity;
        this.item_price = item_price;
        this.total = quantity * item_price;
    }
    return Grocery;
}());
//GROCERY ITEMS
var bacon = new Grocery('Bacon', 'Fields Smoked Bacon', 2, 6.99);
var fruit_punch = new Grocery('Punch', 'Kits Fruit Punch Drink', 2, 2.50);
var eggs = new Grocery('Eggs', 'Dozen Fresh Eggs', 3, 1.99);
var oatmeal = new Grocery('Oatmeal', 'Stars Quick Oats', 1, 2.59);
var chicken = new Grocery('Chicken', 'Meals Drumsticks', 3, 9.99);
//CREATE THE ARRAY FOR GROCERY ITEMS
var items = [];
//PUSH METHOD TO APPEND ITEMS IN THE ARRY/ RETURN LENGTH OF NEW ARRAY
items.push(bacon);
items.push(fruit_punch);
items.push(eggs);
items.push(oatmeal);
items.push(chicken);
//CREATE THE TABLE FOR THE HTML DOCUMENT
var create_table = document.getElementById('grocery');
items.map(function (grocery) {
    var name = grocery.name, desc = grocery.desc, quantity = grocery.quantity, item_price = grocery.item_price, total = grocery.total;
    var row = create_table.insertRow();
    row.innerHTML = "\n        <td id=\"name\">".concat(name, "</td>\n        <td id=\"desc\">").concat(desc, "</td>\n        <td id=\"quantity\">").concat(quantity, "</td>\n        <td id=\"item_price\">").concat(item_price, "</td>\n        <td id=\"total\">").concat(total, "</td>");
});
