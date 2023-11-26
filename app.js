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
        navPopupBtn.setAttribute('aria-label', 'menu dropdown is open')
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
    if(event.key === "Escape"){
        notificationPopup.classList.remove('notification-popup-open')
    }
}
notificationPopup.addEventListener('keyup', handleEscapeClickEventNotification)
//escape keyboard event on notification menu

//escape keyboard event on navigation menu
function handleEscapeEvent(event){
   if(event.key==="Escape"){
    navPopup.classList.remove('popup-navigation-open')
   }
}



navPopup.addEventListener('keyup', handleEscapeEvent)
//escape keyboard event on navigation menu



//notification pop-up
const notificationButton = document.querySelector('.bell-container')

notificationButton.addEventListener('click', () => {
    notificationPopup.classList.toggle('notification-popup-open')
    navPopup.classList.remove('popup-navigation-open')
    const allMenuItems = notificationPopup.querySelectorAll('[role="menuitem"]')

    if (notificationPopup.classList.contains('notification-popup-open')) {
        notificationButton.setAttribute('aria-label', 'notification drop down is open')
        notificationPopup.setAttribute('aria-expanded', 'true')
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
const accordionBtn = document.getElementById('accordionBtn')


accordionBtn.addEventListener('click', () => {
    const accordionItem = document.getElementById('accordionItem')
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

blocks.forEach(function (block) {
    block.addEventListener('click', () => {
        blocks.forEach(function (d) {
            d.classList.add('block-collapse')
        })

        block.classList.remove('block-collapse')
    })
})

// setup guide component js

//when checkbox is clicked
//it marks as complete and toggles the next div 
// blocks.forEach(function (block, index) {
//     const checkbox = block.querySelector('input[type="checkbox"]');
//     checkbox.addEventListener('click', () => {
//         if (checkbox.checked) {
//             block.classList.add('block-collapse');
//             // Check if there is a next block and if its checkbox is not checked
//             if (blocks[index + 1]) {
//                 const nextCheckbox = blocks[index + 1].querySelector('input[type="checkbox"]');
//                 if (!nextCheckbox.checked) {
//                     blocks[index + 1].classList.remove('block-collapse');
//                 }
//             }
//         }
//     });
// });

//checkbox  js
const totalCheckbox = document.querySelectorAll('input[type="checkbox"]');
const counterBar = document.querySelector(".counter-bar")

let counter = document.querySelector('#counter')
totalCheckbox.forEach(function (checkbox) {
    checkbox.addEventListener('click', () => {
        if(checkbox.checked){
            checkbox.ariaChecked='true'
            checkbox.ariaLabel="checkbox has been checked"
        }
        else{
            checkbox.ariaChecked="false"
            checkbox.ariaLabel="checkbox has been unchecked press enter or space to check checkbox"
        }
      
        const checked = document.querySelectorAll('input[type="checkbox"]:checked')
        counter.innerHTML = `${checked.length} / ${totalCheckbox.length} completed`
        // counter bar js

        counterBar.style.width = (checked.length / totalCheckbox.length) * 100 + "%";
        counter.setAttribute('aria-label', `${checked.length} out of ${totalCheckbox.length} checkboxes have been checked`)

        // counter bar js
    })

})

//checkbox-loader
const checkboxLabel = document.querySelectorAll('.checkbox-label');
document.addEventListener('DOMContentLoaded', () => {
    checkboxLabel.forEach(function (checkboxLabel) {
        const loader = document.createElement('div');
        loader.classList.add('loader')
        checkboxLabel.appendChild(loader);
    })
})
//checkbox-loader


//checkbox js

