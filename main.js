//DARK MODE

const darkMode = document.querySelector('.darkMode');
const wholePage = document.querySelector('.wholePage');
const aPropertyAll = document.querySelectorAll('body a');

const leftArrow = document.querySelectorAll('.leftArrow');
const rightArrow = document.querySelectorAll('.rightArrow');

changeMode = () => {
    darkMode.classList.toggle('lightMode');
    wholePage.classList.toggle('dark');
    leftArrow.classList.toggle('leftArrowDark');
    rightArrow.classList.toggle('rightArrowDark');
    aPropertyAll.classList.toggle('aDark');

};

darkMode.addEventListener('click', changeMode);

//SHOW FORM CREATEACCOUNT AND LOGIN

const signIn = document.querySelector('.signIn');
const signOut = document.querySelector('.signOut');
const login = document.querySelector('.login');
const createAccount = document.querySelector('.createAccount');

const showLoginForm = () => login.style.display = 'grid';
const showCreateAccountForm = () => createAccount.style.display = 'grid';

signIn.addEventListener('click', showLoginForm);
signOut.addEventListener('click', showCreateAccountForm);

//SHOW MENU

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const nav = document.querySelector('nav');

const showMenu = () => nav.style.display = 'block';
const hideMenu = () => nav.style.display = 'none';

hamburgerMenu.addEventListener('click', showMenu);
wholePage.addEventListener('click', hideMenu);


//DYNAMIC SHOW LI IN NAV

// const account = document.querySelector('.account');
// const logOut = document.querySelector('.logOut');
//
//
// const changeNavMenu = () => {
//     // signIn.innerHTML = '<li class="account, menu"><a href="/Portal_for_artists/PL/account.html">Konto</a></li>';
//     // signOut.innerHTML = '<li class="logOut, menu"><a href="#">Wyloguj się</a></li>';
//     signOut.remove();
// };
//
// loginSubmit.addEventListener('click', changeNavMenu);
//
// createAccountSubmit.addEventListener('click', changeNavMenu);

//SHOW AND CHANGE LANGUAGE

const changeLanguage = document.querySelector('.changeLanguage a')
const languages = document.querySelector('#languages');

const showLanguages = () => languages.style.display = 'block';
const hideLanguages = () => languages.style.display = 'none';

changeLanguage.addEventListener('mouseover', showLanguages);
wholePage.addEventListener('mouseout', hideLanguages);


