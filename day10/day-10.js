// Activity 1: Basic Event Handling
// Task 1: Add a click event listner to a button that changes the text content of a paragraph.
const para = document.querySelector('#task1')
const button = document.querySelector('#bt1')
button.addEventListener('click', () => {
    para.innerText = "As the darkness prevailes, Batman takes over"
})

// Task 2: Add a double-click event listener to an image that toggles its visibility.
const task2Img = document.querySelector('#task2')
task2Img.addEventListener('dblclick', () => {
    task2Img.style.display = 'none'
})

// Activity 2: Mouse Events
// Task 3: Add a mouseover event listener to an element that changes its background color.
const task3 = document.querySelector('#task3')
task3.addEventListener('mouseover', () => {
    task3.style.backgroundColor = 'blue'
})

// Task 4: Add a mouseout event listener to an element that resets its background color.
task3.addEventListener('mouseout', () => {
    task3.style.backgroundColor = 'red'
})

// Activity 3: Keyboard Events
// Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const task5 = document.querySelector('#task5')
task5.addEventListener('keydown', (e) => {
    console.log('key is pressed:', e.key);
})

// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
const task6 = document.querySelector('#task6')
const para6 = document.querySelector('#opt6')
task6.addEventListener('keyup', (e) => {
    para6.textContent = task6.value
})

// Activity 4: Form Events
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.querySelector('#form')
const name = document.querySelector('#name')
const email = document.querySelector('#email')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(name.value, email.value)
})

// Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.
const select = document.querySelector('#select')
const pt8 = document.querySelector('#task8')
select.addEventListener('change', (e) => {
    pt8.textContent = e.target.value
})

// Activity 5: Event Delegation
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
const ul = document.querySelector('ul')
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        console.log(e.target.textContent)
    }
})

// Task 10: Add an event listener to a parent that listens for events from dynamically added child elements.
const addItem = document.querySelector('#addItem')
const list = document.querySelector('#list')
addItem.addEventListener('click', (e) => {
    const li = document.createElement('li')
    li.classList.add('newli')
    li.textContent = 'second'
    list.appendChild(li)
}
)
list.addEventListener('click', (e) => {
    if (e.target.matches('.newli')) {
        console.log(e.target.textContent);
    }
})