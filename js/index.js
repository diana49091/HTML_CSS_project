var formElement=document.forms.contact_form;
formElement.onsubmit=validateInfoForm;

function validateInfoForm() {
    var imElement=formElement.elements.im;
    var emailElement=formElement.elements.email;
    var phoneElement=formElement.elements.phone;

    var imValue=imElement.value;
    var emailValue=emailElement.value;
    var phoneValue=parseInt(phoneElement.value);

    if ( imValue.length < 3) {          
        alert('Введите пожалуйста имя не короче 3 символов!');
        imElement.focus();                
        return false;
    }

    if ( emailValue.length < 6) {
        alert('Введите корректный адрес электронной почты!');
        imElement.focus();        
        return false;
    }
 

    if ((phoneElement.value.length < 9) || isNaN(phoneValue)) {
        alert('Пожалуйста, введите Ваш номер телефона в формате 375ХХХХХХХХХ!');
        phoneElement.focus();
        return false;
    }

    else {
        alert('Ваш запрос отправлен! В ближайшее время наши консультанты с Вами свяжутся!');
        formElement.focus();
        return true;
    }
}


window.onload = function () {
    let preloader = document.getElementById("preloader");
    preloader.style.display = "none";
}
