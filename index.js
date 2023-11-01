const cardName = document.querySelector('.name') 
const cardNumber = document.querySelector('.number')
const cardMonthExpiration = document.querySelector('.month')
const cardYearExpiration = document.querySelector('.year')
const cardCVC = document.querySelector('.cvc')
const buttonConfirm = document.querySelector('form .button')
const errorMessageName = document.querySelector('.error-name')
const errorMessageNumber = document.querySelector('.error-number')
const errorMessageDate = document.querySelector('.error-date')
const errorMessageExpiration = document.querySelector('.error-expiration')
const errorMessageCVC = document.querySelector('.error-cvc')
var cardFrontName = document.querySelector('.card-name')
var cardFrontNumber = document.querySelector('.card-number')
var cardFrontDate = document.querySelector('.card-date')
var cardBackCVC = document.querySelector('.card-cvc')
const validateMessage = document.querySelector('.container__complete')
const containerInformationCard = document.querySelector('form')
const buttonValidate = document.querySelector('.button--js');

// buttonConfirm.addEventListener('click', checkInput());
buttonConfirm.addEventListener('click', (e) => {
    e.preventDefault();
    const valueCardName = cardName.value
    const valueCardNumber = cardNumber.value
    const valueCardMonthExpiration = cardMonthExpiration.value
    const valueCardYearExpiration = cardYearExpiration.value
    const valueCardCVC = cardCVC.value
    checkName(valueCardName);
    checkNumber(valueCardNumber);
    checkMonth(valueCardMonthExpiration);
    checkYear(valueCardYearExpiration);
    addMonthYear(valueCardMonthExpiration, valueCardYearExpiration);
    checkCVC(valueCardCVC);

    if(checkName(valueCardName) && checkNumber(valueCardNumber) && checkMonth(valueCardMonthExpiration) && checkYear(valueCardYearExpiration) && addMonthYear(valueCardMonthExpiration, valueCardYearExpiration) && checkCVC(valueCardCVC)){
        validateMessage.style.display="block"
        containerInformationCard.style.display="none"
    }
})

buttonValidate.addEventListener('click', () => {
    location.reload();
})




const checkName = (name) => {
    var regex = /^[A-Za-z\s]+$/;

    if(regex.test(name)){
        errorMessageName.style.display='none';
        cardFrontName.textContent = name
        return true
    } else{
        errorMessageName.style.display ='block';
    }
}

const formatCreditCardNumber = (cardNumber) =>{
        cardNumber = cardNumber.replace(/\s/g, '').replace(/\D/g, '');
        cardNumber = cardNumber.replace(/\d{4}(?=\d)/g, '$& ');
        return cardNumber;
}

const checkNumber = (number) => {
    var regex = /^[0-9]+$/;
    const numberCard = number.split('').join('');
    
    if (regex.test(numberCard) && numberCard.length === 16) {
    const formattedNumber = formatCreditCardNumber(numberCard);
    cardFrontNumber.textContent = formattedNumber;
    errorMessageNumber.style.display = 'none';
    return true
    } else {
        errorMessageNumber.style.display = 'block';
    }
}


const checkMonth = (month) => {
    var regex = /^[0-9]+$/;
    if(regex.test(month) && month <= 12){
        errorMessageDate.style.display="none"
        return true
    } else{
        errorMessageDate.style.display="block"
        return false
    }
}


const checkYear = (year) => {
    var regex = /^[0-9]+$/;
    if(regex.test(year) && year >= 23){
        errorMessageDate.style.display='none'
        errorMessageExpiration.style.display='none'
        return true
    } else if(year !=='' && year < 23){
        errorMessageExpiration.style.display='block'
        return false
    } else {
        errorMessageDate.style.display='block'
        return false
    }
}


const addMonthYear = (month,year) => {
    const arrayMonthYear = [month,year]
    if(checkMonth(month) && checkYear(year)){
        cardFrontDate.textContent = arrayMonthYear.join(' / ')
        return true
    } else{
        cardFrontDate.textContent = '00 / 00';
        return false
    }
}


const checkCVC = (cvc) => {
    var regex = /^[0-9]+$/;
    const numberCVC = cvc.split('').join('');
    if(regex.test(cvc) && numberCVC.length === 3){
        cardBackCVC.textContent = cvc
        errorMessageCVC.style.display = 'none'
        return true
    } else{
        errorMessageCVC.style.display = 'block'
    }
}