'use strict'

//DARK MODE
let $darkMode;
let $wholePage;
let $leftArrow;
let $rightArrow


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

let $nameCreatAccount;
let $userName;
// let $email;
let $createPassword;
let $unCorrectPassword;
let $unCorrectName;
let $unCorrectUserName;
let $giveName;

//SHOW AND CHANGE LANGUAGE

let $changeLanguage;
let $languages;

function main() {
    prepareDOMElements();
    prepareDOMEvents()
}

const prepareDOMElements = () => {
     $darkMode = document.querySelector('.darkMode');
     $wholePage = document.querySelector('.wholePage');
     $leftArrow = document.querySelectorAll('.leftArrow');
     $rightArrow = document.querySelectorAll('.rightArrow');

     $linkSignIn = document.querySelector('.signIn');
     $linkSignOut = document.querySelector('.signOut');
     $login = document.querySelector('.login');
     $createAccount = document.querySelector('.createAccount');

     $hamburgerMenu = document.querySelector('.hamburgerMenu');
     $nav = document.querySelector('nav');

     $ulNavbar = document.querySelector('nav ul');
     $buttonLogin = document.querySelector('.login button');
     $buttonCreateAccount = document.querySelector('.createAccount button');

    $nameCreatAccount = document.querySelector('#giveName');
    $userName = document.querySelector('#userName');
    //$email = document.querySelector('#email');
    $createPassword = document.querySelector('#createPassword');
    $unCorrectPassword = document.querySelector('.unCorrectPassword');
    $unCorrectName = document.querySelector('.unCorrectName');
    $unCorrectUserName = document.querySelector('.unCorrectUserName');
    $giveName = document.querySelector('#giveName');

    $changeLanguage = document.querySelector('.changeLanguage a')
    $languages = document.querySelector('.languages');


};

const prepareDOMEvents = () => {
    $darkMode.addEventListener('click', changeMode);

    $linkSignIn.addEventListener('click', showLoginForm);
    $linkSignOut.addEventListener('click', showCreateAccountForm);

    $hamburgerMenu.addEventListener('click', showMenu);

    $giveName.addEventListener('click', hideNavAfter);

    $buttonCreateAccount.addEventListener('click', submitCreateButton);
    $buttonLogin.addEventListener('click', submitLoginButton);

    $changeLanguage.addEventListener('click', showLanguages);
};

const changeMode = () => {
    $darkMode.classList.toggle('lightMode');
    $wholePage.classList.toggle('dark');
    $leftArrow.classList.toggle('leftArrowDark');
    $rightArrow.classList.toggle('rightArrowDark');
};


//** stworzenie toogli po to ze gdy tworzysz ten sam przycisk Zaloguj w kolejnych funkcjach to się one dubluja
let $toggleLogin = false
let $toggleCreateAccount = false
const showLoginForm = () => {
    $login.classList.toggle('activeFormMenu');
    $toggleLogin = true
}
const showCreateAccountForm = () => {
    $createAccount.classList.toggle('activeFormMenu');
    $toggleCreateAccount = true
}

const showMenu = () => $nav.classList.toggle('activeMenu');

const replaceMenu = () => {
    if ($linkSignIn.classList.contains('signIn') && $linkSignOut.classList.contains('signOut')) {
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
        linkLogOut.classList.add('logOut');
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

    console.log('Wyloguj')

}

const hideNavAfter = () => {
    if ($hamburgerMenu) {
        $nav.classList.remove('activeMenu');
    }
}

//REGEXPs
const checkName = /^(?:[A-Z])(?:[a-z]){2,}/g;
const  checkUserName = /(?:\w){3,10}(?:[0-9])+/g;
const checkPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]+).{8,}$/;

const submitCreateButton = e => {

    e.preventDefault();
    if (checkName.test($nameCreatAccount.value) && checkUserName.test($userName.value) && checkPassword.test($createPassword.value)) {
        replaceMenu();
        console.log('Działa')
    }

    if(checkName.test($nameCreatAccount.value) === false) {
        if ($unCorrectName.innerText === '') {
            $unCorrectName.innerHTML += 'Dane nie są poprawne. \n\
            Pole Imię przyjmuje tylko litery, w tym pierwsza musi być dużą literą. ';
        }
    }

    if(checkUserName.test($userName.value) === false) {
        if ($unCorrectUserName.innerText === '') {
            $unCorrectUserName.innerHTML += 'Dane nie są poprawne. \n\
            Pole Nazwa użytkownika wymaga conajmniej jedną cyfrę i nie może być dłuższe niż 10 \n\
            znaków.';
        }
    }

    if(checkPassword.test($createPassword.value) === false) {
        if ($unCorrectPassword.innerText === '') {
            $unCorrectPassword.innerHTML += 'Dane nie są poprawne. \n\
            Pole Hasło musi zawierać conajmniej jedną cyfrę, dużą literę, jeden symbol (#?!@$%^&*-) \n\
            i nie może być krótsze niż 9 znaków';
        }
    }
}

const submitLoginButton = e => {
    e.preventDefault();
    if (checkName.test($nameCreatAccount.value) && checkPassword.test($createPassword.value)) {
        replaceMenu();
        console.log('Działa')
    }

    if(checkUserName.test($userName.value) === false) {
        $unCorrectUserName.innerHTML += 'Dane nie są poprawne. \n\
            Pole Nazwa użytkownika wymaga conajmniej jedną cyfrę i nie może być dłuższe niż 10 znaków.';
    }

    if(checkPassword.test($createPassword.value) === false) {
        $unCorrectPassword.innerHTML = 'Dane nie są poprawne. \n\
            Pole Hasło musi zawierać conajmniej jedną cyfrę i dużą literę i nie może być \n\
            krótsze niż 9 znaków ';
    }
}

const logoff = () => {
    console.log('logoff start')
    // przez to ze funkcja logoff jest wywowyłana przez linkLogOut wewnątrz replaceMenu() nie potrzebne jest sprawdzania warunkowe (a nawet moze byc z nim problem)
    const signInNavbar = document.createElement('li');
    signInNavbar.classList.add('menu');
    $ulNavbar.appendChild(signInNavbar);

    $linkSignIn = document.createElement('a');
    $linkSignIn.classList.add('signIn');
    $linkSignIn.setAttribute('href', '#');
    $linkSignIn.textContent = 'Zaloguj się';
    //** linkSignIn tworzy sie na nowo wiec po wylogowaniu trzeba znow dac mu mozliwosc otwarcia formy do logowania/rejestracji
    $linkSignIn.addEventListener('click',() => showLoginForm())
    signInNavbar.appendChild($linkSignIn);

    const signOutNavbar = document.createElement('li');
    signOutNavbar.classList.add('menu');
    $ulNavbar.appendChild(signOutNavbar);

    $linkSignOut = document.createElement('a');
    $linkSignOut.classList.add('signOut');
    $linkSignOut.setAttribute('href', '#');
    $linkSignOut.textContent = 'Zarejestruj się';
    //** to samo co linkSignIn
    $linkSignOut.addEventListener('click',() => showCreateAccountForm())
    signOutNavbar.appendChild($linkSignOut);

    linkAccount.parentElement.remove();
    linkLogOut.parentElement.remove();

}

const showLanguages = () => $languages.classList.toggle('showLanguages');


document.addEventListener('DOMContentLoaded', main)