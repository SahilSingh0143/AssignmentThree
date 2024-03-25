// Dynamically adding student ID and name
document.getElementById('studentInfo').innerText = 'Student ID: 200553813 | Name: Sahil Singh';

// Function to capture form values and display pizza description
function orderPizza() {
    const size = document.getElementById('pizzaSize').value;
    const toppings = [...document.querySelectorAll('input[name="topping"]:checked')].map(topping => topping.value);
    const quantity = document.getElementById('quantity').value;

    // Create Pizza object
    const pizza = new Pizza(size, toppings, quantity);

    // Output pizza description
    document.getElementById('pizzaDescription').innerText = pizza.getDescription();
}

// Class for Pizza object
class Pizza {
    constructor(size, toppings, quantity) {
        this.size = size;
        this.toppings = toppings;
        this.quantity = quantity;
    }

    getDescription() {
        return `Size: ${this.size}, Toppings: ${this.toppings.join(', ')}, Quantity: ${this.quantity}`;
    }
}

// Event listener for order button click
document.getElementById('orderBtn').addEventListener('click', orderPizza);
