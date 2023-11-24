//navigation pop-up
const navPopupBtn = document.querySelector('.account-name-container')
const navPopup = document.querySelector('.popup-navigation')

navPopupBtn.addEventListener('click', () => {
    navPopup.classList.toggle('popup-navigation-open')
    notificationPopup.classList.remove('notification-popup-open')

    if (navPopup.classList.contains('popup-navigation-open')) {
        navPopupBtn.setAttribute('aria-label', 'menu dropdown is open')
    }
    else {
        navPopupBtn.setAttribute('aria-label', 'menu dropdown is closed')
    }
})
//navigation pop-up


//notification pop-up
const notificationPopup = document.querySelector('.notification-popup');
const notificationButton = document.querySelector('.bell-container')

notificationButton.addEventListener('click', () => {
    notificationPopup.classList.toggle('notification-popup-open')
    navPopup.classList.remove('popup-navigation-open')

    if (notificationPopup.classList.contains('notification-popup-open')) {
        notificationButton.setAttribute('aria-label', 'notification drop down is open')
    }
    else notificationButton.setAttribute('aria-label', 'notification drop down is closed')
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
    } else {
        accordionItem.style.height = ""
        accordionItem.classList.add('mt-2')
        accordionBtn.setAttribute('aria-label', 'the setup guide dropdown has been opened')
    }
})
// setup guide accordion js

// setup guide component js
document.addEventListener('DOMContentLoaded', () => {
    const blocks = document.querySelectorAll('.block');

    blocks.forEach(function (block) {
        block.addEventListener('click', () => {
            blocks.forEach(function (d) {
                d.classList.add('block-collapse')
            })

            block.classList.remove('block-collapse')
        })
    })

})
// setup guide component js

//checkbox  js
const totalCheckbox = document.querySelectorAll('input[type="checkbox"]');
const counterBar = document.querySelector(".counter-bar")

let counter = document.querySelector('#counter')
totalCheckbox.forEach(function (checkbox) {
    checkbox.addEventListener('click', () => {

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
