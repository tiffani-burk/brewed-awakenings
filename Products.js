import { getProducts } from "./database.js"

//imported the array of product objects from the database
//set the array of product objects equal to the variable "products"
const products = getProducts()

//This function will loop through each product from the list of product objects and 
//return an html representation of a list, holding the product id and product title
export const Products = () => {
    let html = "<ul>" //set a variable "html" equal to an unordered list

    //looping through each product of the list of products
    for (const product of products) { 
        html += `<li id="product--${product.id}">${product.name}</li>` // loop creates a list of the product id and product name by adding string interpolation to the html variable we created earlier
    }//this list is using the product id as part of the html ID to identify the product with the name. 

    html += "</ul>" //closing the unordered list tag and adding it to our variable "html"

    return html //return our variable "html," which now has a string with a list in it. 
}

//Products function is returning a list of the products, being identified by their product id in the HTML ID. 


//adding my click event to the products to show how much each product costs
// example: "productName cost $productPrice"
document.addEventListener(
    "click", 
    (clickEvent) => { //has 2 params, param1 is a defined name and param2 is a made up name to describe the event. 
    const productClicked = clickEvent.target //this is targeting the name i selected
    if (productClicked.id.startsWith("product")) {  //checking to see if the id from the for loop below starts with the word product
        const [,productId] = productClicked.id.split("--")  //splits the id on line 14 with the "--"

        for (const product of products) {       //looping through each product
            if (product.id === parseInt(productId)) {   //parseInt turns a string into an integer
                window.alert(`${product.name} costs $${product.price} `) //popup window alert with the string "productName costs productPrice" in it
            }
        }
    }
}
)

