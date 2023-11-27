//navigation menu pop-up
//these select the navigation button and the menu 
const navPopupBtn = document.querySelector('.account-name-container')
const navPopup = document.querySelector('.popup-navigation')
const notificationPopup = document.querySelector('.notification-popup');


navPopupBtn.addEventListener('click', () => {
    navPopup.classList.toggle('popup-navigation-open')
    notificationPopup.classList.remove('notification-popup-open')

    ItContains = navPopup.classList.contains('popup-navigation-open')
    //this is to select all the menu items
    const allMenuItems = navPopup.querySelectorAll('[role="menuitem"]')



    //when its open, the aria attributes change
    if (ItContains) {
        navPopupBtn.setAttribute('aria-label', 'menu dropdown is open, use tab or keyup or keydown to navigate')
        navPopupBtn.setAttribute('aria-expanded', 'true')
        allMenuItems.item(0).focus()
    }
    //when its closed, the opposite happens
    if (!ItContains) {
        navPopupBtn.setAttribute('aria-label', 'menu dropdown is closed')
        navPopupBtn.setAttribute('aria-expanded', 'false')
    }
})
//navigation menu pop-up
//escape keyboard event on notification menu
function handleEscapeClickEventNotification(event) {
    if (event.key === "Escape") {
        notificationPopup.classList.remove('notification-popup-open')
    }
}
notificationPopup.addEventListener('keyup', handleEscapeClickEventNotification)
//escape keyboard event on notification menu

//escape keyboard event on navigation menu
function handleEscapeEvent(event) {
    if (event.key === "Escape") {
        navPopup.classList.remove('popup-navigation-open')
    }
}

navPopup.addEventListener('keyup', handleEscapeEvent)
//escape keyboard event on navigation menu

//keyup and keydown events

// this targets all the menu items
const allMenuItems = navPopup.querySelectorAll('[role="menuitem"]');

// this is the initial count
let active = -1;

navPopup.addEventListener('keydown', (e) => {

    if (e.keyCode == 40) {

        if (active < allMenuItems.length - 1) {
            active++
            //this focuses on the item on the active
            allMenuItems[active].focus()
        }

    }
    else if (e.keyCode == 38) {

        if (active > -1) {
            active--
            //this focuses on the item on the active
            allMenuItems[active].focus()
        }

    }
})
//keyup and keydown events



//notification pop-up
const notificationButton = document.querySelector('.bell-container')

notificationButton.addEventListener('click', () => {
    //this toggles the popup on the notification
    notificationPopup.classList.toggle('notification-popup-open')

    //this closes the popup on the navigation when notification is open
    navPopup.classList.remove('popup-navigation-open')

    //these select all the menu items with role of menu item
    const allMenuItems = notificationPopup.querySelectorAll('[role="menuitem"]')

    if (notificationPopup.classList.contains('notification-popup-open')) {
        notificationButton.setAttribute('aria-label', 'notification drop down is open')
        notificationPopup.setAttribute('aria-expanded', 'true')

        //if the notification popup is expanded it focuses on the first menu item in the menu
        allMenuItems.item(0).focus()
    }
    else notificationButton.setAttribute('aria-label', 'notification drop down is closed')
    notificationPopup.setAttribute('aria-expanded', 'false')
})

//notification pop-up





// black pop-up
const cancelButton = document.getElementById('cancelButton');
const popop = document.getElementById('popup')

cancelButton.addEventListener('click', () => {
    popop.style.display = 'none';
    popop.style.transition = 'all ease-in-out 250ms'
})
// black pop-up

// setup guide accordion js

//accordion button
const accordionBtn = document.getElementById('accordionBtn')


accordionBtn.addEventListener('click', () => {

    //this is the item being expanded
    const accordionItem = document.getElementById('accordionItem')

    //this toggles the class that rotates the arrow
    accordionBtn.classList.toggle('arrow-rotate')

    if (accordionItem.style.height == "") {
        accordionItem.style.height = 0;
        accordionItem.classList.remove('mt-2')
        accordionBtn.setAttribute('aria-label', 'the setup guide dropdown has been closed')
        accordionBtn.ariaExpanded = 'false'
    } else {
        accordionItem.style.height = ""
        accordionItem.classList.add('mt-2')
        accordionBtn.setAttribute('aria-label', 'the setup guide dropdown has been opened')
        accordionBtn.ariaExpanded = 'true'
    }
})
// setup guide accordion js

// setup guide component js

//to target the blocks
const blocks = document.querySelectorAll('.block');

//for each of the blocks being targeted
blocks.forEach(function (block) {

    //when the block beign iterated over is clicked
    block.addEventListener('click', () => {

        //it collapses all the blocks
        blocks.forEach(function (d) {
            d.classList.add('block-collapse')
        })

        //then it expands the block that was clicked initially
        block.classList.remove('block-collapse')
    })
})


//checkbox  js

//this is the total amount of checkboxes available
const totalCheckbox = document.querySelectorAll('input[type="checkbox"]');

//this is the progress bar
const counterBar = document.querySelector(".counter-bar")

//this is the counter eg. "5/10 checked"
let counter = document.querySelector('#counter')

//for each of the checkboxes
totalCheckbox.forEach(function (checkbox) {
    //if the particular checkbox beign iterated over is clicked
    checkbox.addEventListener('click', () => {

        //it checks if the checkbox is checked
        if (checkbox.checked) {
            checkbox.ariaChecked = 'true'
            checkbox.ariaLabel = "checkbox has been checked"
        }
        else {
            checkbox.ariaChecked = "false"
            checkbox.ariaLabel = "checkbox has been unchecked press enter or space to check checkbox"
        }
        
        //everytime a checkbox is clicked, this updates the amount of checkboxes being clicked
        const checked = document.querySelectorAll('input[type="checkbox"]:checked')

        //this is the counter beign updated in every click
        counter.innerHTML = `${checked.length} / ${totalCheckbox.length} completed`

        // counter bar js
        //this is the bars width changing everytime the amount of checkbox that is checked is increasing or reducing 
        counterBar.style.width = (checked.length / totalCheckbox.length) * 100 + "%";
        
        //this is the attributes of the counter everytime the amount of chekbox clicked changes
        counter.setAttribute('aria-label', `${checked.length} out of ${totalCheckbox.length} checkboxes have been checked`)

        // counter bar js
    })

})

//checkbox-loader

// this is the checkkbox label element
const checkboxLabel = document.querySelectorAll('.checkbox-label');

document.addEventListener('DOMContentLoaded', () => {
    checkboxLabel.forEach(function (checkboxLabel) {
        //for each of the checkbox label a new element is made called loader
        const loader = document.createElement('div');

        //and the elements class is added so it can be styled in the css
        loader.classList.add('loader')

        //then the element is appended to the loader
        checkboxLabel.appendChild(loader);
    })
})
//checkbox-loader


//checkbox js

