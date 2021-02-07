'use strict'

//DARK MODE

const darkMode = document.querySelector('.darkMode');
const wholePage = document.querySelector('.wholePage');
// const aPropertyAll = document.getElementsByTagName('a');
//
// const leftArrow = document.getElementsByClassName('leftArrow');
// const rightArrow = document.getElementsByClassName('rightArrow');

const changeMode = () => {
    darkMode.classList.toggle('lightMode');
    wholePage.classList.toggle('dark');
    // leftArrow.classList.toggle('leftArrowDark');
    // rightArrow.classList.toggle('rightArrowDark');
    // aPropertyAll.classList.toggle('aDark');

};

darkMode.addEventListener('click', changeMode);

//SHOW FORM CREATEACCOUNT AND LOGIN

let linkSignIn = document.querySelector('.signIn');
let linkSignOut = document.querySelector('.signOut');
const login = document.querySelector('.login');
const createAccount = document.querySelector('.createAccount');

//** stworzenie toogli po to ze gdy tworzysz ten sam przycisk Zaloguj w kolejnych funkcjach to się one dubluja
let toggleLogin = false
let toggleCreateAccount = false
const showLoginForm = () => {
    login.classList.toggle('activeFormMenu');
    toggleLogin = true
}
const showCreateAccountForm = () => {
    createAccount.classList.toggle('activeFormMenu');
    toggleCreateAccount = true
}

linkSignIn.addEventListener('click', showLoginForm);
linkSignOut.addEventListener('click', showCreateAccountForm);

//SHOW MENU

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const nav = document.querySelector('nav');

const showMenu = () => nav.classList.toggle('activeMenu');

hamburgerMenu.addEventListener('click', showMenu);


//REPLACE LI MENU AND REMOVE FORM LOGIN AND REGISTRATION

const ulNavbar = document.querySelector('nav ul');
const buttonLogin = document.querySelector('.login button')
const buttonCreateAccount = document.querySelector('.createAccount button')

//*** */ Stworzenie zmiennych do wylogowania i konta zeby miec do nich dostęp w kolejnych fukcjach
let linkLogOut;
let linkAccount;

const replaceMenu = () => {
    if (linkSignIn.classList.contains('signIn') && linkSignOut.classList.contains('signOut')) {
        const accountNavbar = document.createElement('li');
        accountNavbar.classList.add('menu');
        ulNavbar.appendChild(accountNavbar);

        linkAccount = document.createElement('a');
        linkAccount.classList.add('account');
        linkAccount.setAttribute('href', 'account.html');
        linkAccount.textContent = 'Konto';
        accountNavbar.appendChild(linkAccount);

        const logOutNavbar = document.createElement('li');
        logOutNavbar.classList.add('menu');
        ulNavbar.appendChild(logOutNavbar);

        linkLogOut = document.createElement('a');
        linkLogOut.classList.add('logOut');
        linkLogOut.setAttribute('href', '#');
        linkLogOut.textContent = 'Wyloguj';
        linkLogOut.addEventListener('click',() => logoff())
        logOutNavbar.appendChild(linkLogOut);

        linkSignIn.parentElement.remove();
        linkSignOut.parentElement.remove();

        // close forms after logoff
        if(toggleLogin) showLoginForm()
        if(toggleCreateAccount) showCreateAccountForm()

    }

    console.log('Wyloguj')

}

//CHECK FORM DATA

//CREATE FORM

const nameCreatAccount = document.querySelector('#giveName').value;
const userName = document.querySelector('#userName').value;
// const email = document.querySelector('#email').value;
const createPassword = document.querySelector('#createPassword').value;

const unCorrectPassword = document.querySelector('.unCorrectPassword');
const unCorrectName = document.querySelector('.unCorrectName');
const unCorrectUserName = document.querySelector('.unCorrectUserName');

const giveName = document.querySelector('#giveName');

const hideNavAfter = () => {
    if (hamburgerMenu) {
        nav.classList.remove('activeMenu');
    }
}

giveName.addEventListener('click', hideNavAfter)

//REGEXP's
const checkName = /^[A-Z][a-z]{2,}/g;
const  checkUserName = /\w{3,10}[0-9]+/g;
const checkPassword = /\w{7,}[A-Z]+[0-9]+/g;

const submitCreateButton = e => {

    e.preventDefault();
    if (checkName.test(nameCreatAccount) && checkUserName.test(userName) && checkPassword.test(createPassword)) {
        replaceMenu();
        console.log('Działa')
    }

    if(checkName.test(nameCreatAccount) === false) {
        if (unCorrectName.innerText === '') {
            unCorrectName.innerHTML += 'Dane nie są poprawne. \n\
            Pole Imię przyjmuje tylko litery, w tym pierwsza musi być dużą literą. ';
        }
    }

    if(checkUserName.test(userName) === false) {
        if (unCorrectUserName.innerText === '') {
            unCorrectUserName.innerHTML += 'Dane nie są poprawne. \n\
            Pole Nazwa użytkownika wymaga conajmniej jedną cyfrę i nie może być dłuższe niż 10 \n\
            znaków.';
        }
    }

    if(checkPassword.test(createPassword) === false) {
        if (unCorrectPassword.innerText === '') {
            unCorrectPassword.innerHTML += 'Dane nie są poprawne. \n\
            Pole Hasło musi zawierać conajmniej jedną cyfrę i dużą literę i nie może być \n\
            krótsze niż 9 znaków';
        }
    }
}

const submitLoginButton = e => {
    e.preventDefault();
    if (checkName.test(nameCreatAccount) && checkPassword.test(createPassword)) {
        replaceMenu();
        console.log('Działa')
    }

    if(checkUserName.test(userName) === false) {
        unCorrectUserName.innerHTML += 'Dane nie są poprawne. \n\
            Pole Nazwa użytkownika wymaga conajmniej jedną cyfrę i nie może być dłuższe niż 10 znaków.';
    }

    if(checkPassword.test(createPassword) === false) {
        unCorrectPassword.innerHTML = 'Dane nie są poprawne. \n\
            Pole Hasło musi zawierać conajmniej jedną cyfrę i dużą literę i nie może być \n\
            krótsze niż 9 znaków ';
    }
}

buttonCreateAccount.addEventListener('click', submitCreateButton);
buttonLogin.addEventListener('click', submitLoginButton);


//LOGOFF MENU


const logoff = () => {
    console.log('logoff start')
    // przez to ze funkcja logoff jest wywowyłana przez linkLogOut wewnątrz replaceMenu() nie potrzebne jest sprawdzania warunkowe (a nawet moze byc z nim problem)
    const signInNavbar = document.createElement('li');
    signInNavbar.classList.add('menu');
    ulNavbar.appendChild(signInNavbar);

    linkSignIn = document.createElement('a');
    linkSignIn.classList.add('signIn');
    linkSignIn.setAttribute('href', '#');
    linkSignIn.textContent = 'Zaloguj się';
    //** linkSignIn tworzy sie na nowo wiec po wylogowaniu trzeba znow dac mu mozliwosc otwarcia formy do logowania/rejestracji
    linkSignIn.addEventListener('click',() => showLoginForm())
    signInNavbar.appendChild(linkSignIn);

    const signOutNavbar = document.createElement('li');
    signOutNavbar.classList.add('menu');
    ulNavbar.appendChild(signOutNavbar);

    linkSignOut = document.createElement('a');
    linkSignOut.classList.add('signOut');
    linkSignOut.setAttribute('href', '#');
    linkSignOut.textContent = 'Zarejestruj się';
    //** to samo co linkSignIn
    linkSignOut.addEventListener('click',() => showCreateAccountForm())
    signOutNavbar.appendChild(linkSignOut);

    linkAccount.parentElement.remove();
    linkLogOut.parentElement.remove();

}


//SHOW AND CHANGE LANGUAGE

const changeLanguage = document.querySelector('.changeLanguage a')
const languages = document.querySelector('.languages');

const showLanguages = () => languages.classList.toggle('showLanguages');

changeLanguage.addEventListener('click', showLanguages);
