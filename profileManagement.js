const name = document.getElementById('name')
const address1 = document.getElementById('address1')
const address2 = document.getElementById('address2')
const city = document.getElementById('city')
const state = document.getElementById('state')
const zip = document.getElementById('zip')
const form = document.getElementById('profileManagementForm')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (address1.value === '' || address1.value == null) {
        messages.push('Address is required')
    }

    if (city.value === '' || city.value == null) {
        messages.push('City is required')
    }

    if (state.value === '' || state.value == null) {
        messages.push('State is required')
    }

    if (zip.value === '' || zip.value == null) {
        messages.push('Zipcode is required')
    }

    if (name.value.length > 50) {
        messages.push('Name can not be longer than 50 characters')
    }

    if (address1.value.length > 100) {
        messages.push('Address 1 can not be longer than 100 characters')
    }

    if (address2.value.length > 100) {
        messages.push('Address 2 can not be longer than 100 characters')
    }

    if (city.value.length > 100) {
        messages.push('City can not be longer than 100 characters')
    }

    if (zip.value.length < 5 || zip.value.length > 9) {
        messages.push('Zipcode must contain 5 to 9 digits')
    }

    if (isNaN(zip.value)) {
        messages.push('Zipcode must contain only numbers')
    }

    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})