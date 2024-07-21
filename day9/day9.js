//Activity 1 :Selection and Manipulation Elements
//Selct an HTML element by its id and change its text
const heading = document.getElementById("heading")
heading.innerText = "new heading"

//Select an HTML element by its class and change its class and change its background color
const container = document.getElementsByClassName("container")
container[0].style.backgroundColor = "blue"


//Activity 2:Creating and Appending Elements
//create a new div element with some text content and append it to the body
const newDiv = document.createElement("div")
newDiv.innerText = "new div"
newDiv.id = '2nd div'
console.log(newDiv);
document.body.appendChild(newDiv)


//create a new li element adn add it to an existing ul list
const newLi = document.createElement("li")
newLi.innerText = "new li"
document.querySelector('ul').append(newLi)


//Activity 3:Removing element
//Select an HTML element and remove it from the DOM
const headind2 = document.querySelector('h2')
headind2.remove()

//remove the last child of a specific HTML element
const ul = document.querySelector('ul')
ul.removeChild(ul.lastChild)

//Activity 4:Modifying Attributes and classes
//select and HTML element and change one of its attributes(eg.,src of an image)
const img = document.querySelector('img')
img.src = "https://images.unsplash.com/photo-1586399254662-c8948cd73421?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
img.alt = "nature"

//Add and remove CSS class to/form an HTML element.
const greet = document.getElementById('L1')
greet.classList.remove('greet')
greet.classList.add('list-1')

//Activity 5:Event Handling
//Add a click event listener to a button that changes the text content of a paragraph
const p = document.querySelector('#lastP')
const button = document.querySelector('button')

button.addEventListener('click', () => {
    p.innerText = "As the darkness priveils, Batman takes over"
})

//Add a mouse event listener to and element that change its border color
img.addEventListener('dblclick', () => {
    img.style.border = '10px solid black'
    img.style.transition = '1s'
    img.style.transitionBehavior = 'ease '
})