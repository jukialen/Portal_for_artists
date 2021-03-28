'use strict'

//DARK MODE
let $darkMode;
let $wholePage;
let $leftArrow;
let $rightArrow;


//SHOW FORM CREATEACCOUNT AND LOGIN

let $linkSignIn;
let $linkSignOut;
let $login;
let $createAccount;

//SHOW MENU

let $hamburgerMenu;
let $nav;

//REPLACE LI MENU AND REMOVE FORM LOGIN AND REGISTRATION

let $ulNavbar;
let $buttonLogin;
let $buttonCreateAccount;
let linkLogOut;
let linkAccount;

//CHECK FORM DATA

//CREATE FORM (+ LOGOFF - inside the function)

let $createName;
let $createPseudonym;
// let $email;
let $createPassword;

let $unCorrectCreatePassword;
let $unCorrectCreateName;
let $unCorrectCreatePseudonym;

let $loginPseudonym;
let $loginPassword;

let $unCorrectLoginPassword;
let $unCorrectLoginName;
let $unCorrectLoginPseudonym;

//SHOW AND CHANGE LANGUAGE

let $changeLanguage;
let $languages;


//ICON TO ASIDE

let $aside;
let $asideRight;
let $firstH3;

function main() {
    prepareDOMElements();
    prepareDOMEvents()
}

const prepareDOMElements = () => {
    $darkMode = document.querySelector('.dark__mode');
    $wholePage = document.querySelector('.whole__page');
    $leftArrow = document.querySelectorAll('.left__arrow');
    $rightArrow = document.querySelectorAll('.right__arrow');

    $linkSignIn = document.querySelector('.sign__in');
    $linkSignOut = document.querySelector('.sign__out');
    $login = document.querySelector('.login');
    $createAccount = document.querySelector('.create__account');

    $hamburgerMenu = document.querySelector('.hamburger__menu');
    $nav = document.querySelector('nav');

    $ulNavbar = document.querySelector('nav ul');
    $buttonLogin = document.querySelector('.login button');
    $buttonCreateAccount = document.querySelector('.create__account button');

    $createName = document.querySelector('#create__name');
    $createPseudonym = document.querySelector('#pseudonym');
    //$email = document.querySelector('#email');
    $createPassword = document.querySelector('#create__password');
    $unCorrectCreateName = document.querySelector('#un__correct__create__name');
    $unCorrectCreatePseudonym = document.querySelector('#un__correct__create__pseudonym');
    $unCorrectCreatePassword = document.querySelector('#un__correct__create__password');

    $loginPseudonym = document.querySelector('#login__pseudonym');
    $loginPassword = document.querySelector('#login__password');

    $unCorrectLoginName = document.querySelector('#un__correct__login__name');
    $unCorrectLoginPassword = document.querySelector('#un__correct__login__password');

    $changeLanguage = document.querySelector('.change__language a');
    $languages = document.querySelector('.languages');

    $aside = document.querySelector('.aside');
    $asideRight = document.querySelector('.aside__right');
    $firstH3 = document.querySelector('h3:nth-child(2)');
};

const prepareDOMEvents = () => {
    $darkMode.addEventListener('click', changeMode);

    $linkSignIn.addEventListener('click', showLoginForm);
    $linkSignOut.addEventListener('click', showCreateAccountForm);

    $hamburgerMenu.addEventListener('click', showMenu);

    $createName.addEventListener('click', hideNavAfter);
    $loginPseudonym.addEventListener('click', hideNavAfter);

    $buttonCreateAccount.addEventListener('click', submitCreateButton);
    $buttonLogin.addEventListener('click', submitLoginButton);

    $changeLanguage.addEventListener('click', showLanguages);

    $asideRight.addEventListener('click', leftMenuClick);
};

const changeMode = () => {
    $darkMode.classList.toggle('light__mode');
    $wholePage.classList.toggle('dark');
    $leftArrow.classList.toggle('left__arrow__dark');
    $rightArrow.classList.toggle('right__arrow__dark');
};


let $toggleLogin = false
let $toggleCreateAccount = false
const showLoginForm = () => {
    $login.classList.toggle('form__menu--active');
    $toggleLogin = true
}
const showCreateAccountForm = () => {
    $createAccount.classList.toggle('form__menu--active');
    $toggleCreateAccount = true
}

const showMenu = () => {
    $nav.classList.toggle('menu--active');
}

const replaceMenu = () => {
    if ($linkSignIn.classList.contains('sign__in') && $linkSignOut.classList.contains('sign__out')) {
        const accountNavbar = document.createElement('li');
        accountNavbar.classList.add('menu');
        $ulNavbar.appendChild(accountNavbar);

        linkAccount = document.createElement('a');
        linkAccount.classList.add('account');
        linkAccount.setAttribute('href', 'account.html');
        linkAccount.textContent = 'Konto';
        accountNavbar.appendChild(linkAccount);

        const logOutNavbar = document.createElement('li');
        logOutNavbar.classList.add('menu');
        $ulNavbar.appendChild(logOutNavbar);

        linkLogOut = document.createElement('a');
        linkLogOut.classList.add('log__out');
        linkLogOut.setAttribute('href', '#');
        linkLogOut.textContent = 'Wyloguj';
        linkLogOut.addEventListener('click',() => logoff())
        logOutNavbar.appendChild(linkLogOut);

        $linkSignIn.parentElement.remove();
        $linkSignOut.parentElement.remove();

        // close forms after logoff
        if($toggleLogin) showLoginForm()
        if($toggleCreateAccount) showCreateAccountForm()

    }

}

const hideNavAfter = () => {
    if ($hamburgerMenu) {
        $nav.classList.remove('active__menu');
    }
}


//REGEXPs
const checkName = /^(?:[A-Z])(?:[a-z]){2,}/g;
const  checkUserName = /(?:\w){3,10}(?:[0-9])+/g;
const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]+).{8,}$/;

const submitCreateButton = e => {

    e.preventDefault();
    if (checkName.test($createName.value) && checkUserName.test($createPseudonym.value) && checkPassword.test($createPassword.value)) {
        replaceMenu();
        console.log('Działa')
    }

    if(checkName.test($createName.value) === false) {
        if ($unCorrectCreateName.innerText === '') {
            $unCorrectCreateName.innerText += 'Dane nie są poprawne. \n\
            Pole Imię przyjmuje tylko litery, w tym pierwsza musi być dużą literą. ';
        }
    }

    if(checkUserName.test($createPseudonym.value) === false) {
        if ($unCorrectCreatePseudonym.innerText === '') {
            $unCorrectCreatePseudonym.innerText = 'Dane nie są poprawne. \n\
            Pole Nazwa użytkownika wymaga conajmniej jedną cyfrę i nie może być dłuższe niż 10 \n\
            znaków.';
        }
    }

    if(checkPassword.test($createPassword.value) === false) {
        if ($unCorrectCreatePassword.innerText === '') {
            $unCorrectCreatePassword.innerText += 'Dane nie są poprawne. \n\
            Pole Hasło musi zawierać conajmniej jedną cyfrę, dużą literę, jeden symbol (#?!@$%^&*-) \n\
            i nie może być krótsze niż 9 znaków';
        }
    }
}

const submitLoginButton = e => {
    e.preventDefault();
    if (checkName.test($loginPseudonym.value) && checkPassword.test($loginPassword.value)) {
        replaceMenu();
        console.log('Działa')
    }

    if(checkUserName.test($createPseudonym.value) === false) {
        $unCorrectLoginPseudonym.innerText += 'Dane nie są poprawne. \n\
            Pole Hasło musi zawierać conajmniej jedną cyfrę, dużą literę, jeden symbol (#?!@$%^&*-) \n\
            i nie może być krótsze niż 9 znaków';
    }

    if(checkPassword.test($createPassword.value) === false) {
        $unCorrectLoginPassword.innerText += 'Dane nie są poprawne. \n\
            Pole Hasło musi zawierać conajmniej jedną cyfrę i dużą literę i nie może być \n\
            krótsze niż 9 znaków ';
    }
}

const logoff = () => {

    const signInNavbar = document.createElement('li');
    signInNavbar.classList.add('menu');
    $ulNavbar.appendChild(signInNavbar);

    $linkSignIn = document.createElement('a');
    $linkSignIn.classList.add('sign__in');
    $linkSignIn.setAttribute('href', '#');
    $linkSignIn.textContent = 'Zaloguj się';

    $linkSignIn.addEventListener('click',() => showLoginForm())
    signInNavbar.appendChild($linkSignIn);

    const signOutNavbar = document.createElement('li');
    signOutNavbar.classList.add('menu');
    $ulNavbar.appendChild(signOutNavbar);

    $linkSignOut = document.createElement('a');
    $linkSignOut.classList.add('sign__out');
    $linkSignOut.setAttribute('href', '#');
    $linkSignOut.textContent = 'Zarejestruj się';

    $linkSignOut.addEventListener('click',() => showCreateAccountForm())
    signOutNavbar.appendChild($linkSignOut);

    linkAccount.parentElement.remove();
    linkLogOut.parentElement.remove();

}

const showLanguages = () => $languages.classList.toggle('languages--show');


// LEFT MENU CLICK
const leftMenuClick = () => {
    $aside.classList.toggle('aside--active');
    $firstH3.classList.toggle('first__h3')
}

document.addEventListener('DOMContentLoaded', main)