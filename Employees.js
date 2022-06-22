import { getEmployees, getOrders } from "./database.js"


//imported employee data (which is an array, holding employee objects); 
//set the value of that data equal to the variable "employees"
const employees = getEmployees()
const orders = getOrders()

//created a function to loop through each employee from the list of employees and 
//return an HTML representation of an unordered list 
export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>` //adding the string with list item to our variable "html"; accessing the id and name of the employee using dot notation 
    }//this list of employees is using the employee id as an html id, to 

    html += "</ul>" //closing the unordered list while adding the closing tag to the html variable

    return html //returning our variable, which now has the string of list items in it. 
}

//Employees function is returning a list of the employees, being identified by their employee id in the html ID. 



//create a function to loop through the employee orders and return the sum of those orders
const employeeOrders = (employee) => {
    let sumOfOrders = 0

    for (const order of orders) {
        if (order.employeeId === employee.id) { //if employeeId from order is the same id of employee
            //increment the number of orders that have been filled
            sumOfOrders += 1
        }
    }
    return sumOfOrders //return the sum of orders that were filled
}



//Adding a click event on Employees to show how many products they sold 
//example: "emloyeeName sold numberSold products"

document.addEventListener(
    "click",        //param1= defined event name
    (clickEvent) => { //param2 = made up name
        const employeeClicked = clickEvent.target  //target the clickEvent and set it variable employeeClicked
        
        if (employeeClicked.id.startsWith("employee")) {   //check to see if the id from for loop below starts with employee
            const [, employeeId] = employeeClicked.id.split("--")    //splitting the id on line 13 here "--"; assigning employee.id from line 15 to employeeId on line 52

            
            
            for (const employee of employees) { //looping through each employee
                if (employee.id === parseInt(employeeId)) { //parseInt turns string to integer
                    const numberOfOrders = employeeOrders(employee)   //invoke employeeOrders function and set its value to the variable numberOfOrders
                    window.alert(`${employee.name} sold ${numberOfOrders} products`)  //create window alert that says "employeeName sold # products"
                }
            }
        }
    }
)
