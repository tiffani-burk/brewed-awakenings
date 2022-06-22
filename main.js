import { Employees } from "./Employees.js"
//importing a list of employee names, identified by their employee id
import { Orders } from "./Orders.js"
//importing a list of strings saying "nameOfDrink was sold by nameOfEmployee on dateSold"
import { Products } from "./Products.js"
//importing a list of product names, identified by their product id

//creating a variable "mainContainer". querySelector method is targeting the entire document and will match the CSS selector #container
const mainContainer = document.querySelector("#container")

//created another variable to hold the HTML representation of -H1 tag, article, sections with imported lists. 
//section with class of "detail--column list details_employees" has the list of employee names. 
//section with the class of "detail--column list details_prouducts" has the list of product names.
//article with the class of "orders" has the strings with the list of orders, with whom ordered them and on what date. 
const applicationHTML = `
<h1>Brewed Awakenings</h1>
<article class="details">
    <section class="detail--column list details__employees">
        <h2>Employees</h2>
        ${Employees()}
    </section>
    <section class="detail--column list details__products">
        <h2>Products</h2>
        ${Products()}
    </section>
</article>

<article class="orders">
    <h2>Orders</h2>
    ${Orders()}
</article>
`

mainContainer.innerHTML = applicationHTML // take the query selector "mainContainer" and set it to new value of applicatoinHTML 

//applicationHTML now has the lists of employees, products and orders. 

