import { getProducts, getEmployees, getOrders } from "./database.js"
//importing the arrays of product objects, employee objects and order objects

//GOAL OF THIS FILE is to produce a string in the orders article, saying "nameOfDrink was sold by nameOfEmployee on dateSold"

// create a variable to store the value of the arrays of objects. 
const products = getProducts() //products = the array of product objects
const employees = getEmployees() //employees = the array of employee objects
const orders = getOrders() //orders = the array of order objects


// Function whose responsibility is to find the product for an order
const findProduct = (order, allProducts) => { //set a variable with two parameters/inputs. One for the product and one for the order, because it will need the product id from the product and the product id from the order. 
    let orderProduct = null     //create variable "orderProduct" and set it equal to null

    for (const product of allProducts) {        //looping through each product from the array of product objects
        if (product.id === order.productId) {   //checking to see if the product id matches the product id on the order
            orderProduct = product              //if so, our variable orderProduct will hold the value of the product, which is still an object. 
        }
    }

    return orderProduct  //returns the product whos productID matched the order's productId; product is an object
}
//findproduct now has the product/drink object that was on the order

// Function whose responsibility is to find the employee for an order
const findEmployee = (order, allEmployees) => { //set a variable that takes two parameters (employee and order), because we are checking to see if the employee id matches the employee id on the order
    let orderEmployee = null  

    for (const employee of allEmployees) {  //looping through each employee object in the array
      
        if (employee.id === order.employeeId) { // checking to see if the employee ID matches the employee id on the order
            orderEmployee = employee            //if so, the variable orderEmployee now has the value of the employee that matched the condition
            return orderEmployee  //return the orderEmployee variable, which now has the employee that matched the order's employee id; return it inside the function to stop looping through data after condition is met. 
        }
    }

}
//findEmployee now has the employee object that matched the employee that made the order
//note: employee.name (line 62) was coming back as null because there was an extra empoyeeID that findEmployee was looking for that did not exist in the data. Data has now been fixed. 


//Order function creates a string interpolation to put the name of the product (drink) with the name of the employee and add the date the product was sold.
//"nameOfDrink was sold by nameOfEmployee on dateSold"
export const Orders = () => {
    let html = ""
    html = "<ul>"

    for (const order of orders) { //loops through each order object in the array of orders
        const employee = findEmployee(order, employees)
        //invoked the employee function and set it equal to employee variable;
        //passed findEmployess the single order and single employee object
        //employee now holds each employee object from the order;

        const product = findProduct(order, products)
        //invoked our produt function and set it equal to the product variable
        //passed findProduct the order object and the product object 
        //product now has the product object from our order


        //this is adding string interpolation to our "html" variable 
        html += `<li>${product.name} was sold by ${employee.name} on ${new Date(order.timestamp).toLocaleDateString()}</li>`
    }

    html += "</ul>" //closing our unordered list tag 

    return html //returning "html" variable, which now has an HTML representation of the list of orders
}

//Orders function returns a string of list items saying "productName was sold by nameOfEmployee on dateSold"