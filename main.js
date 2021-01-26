//DARK MODE

const darkMode = document.querySelector('.darkMode');
const wholePage = document.querySelector('.wholePage');
// const aPropertyAll = document.getElementsByTagName('a');
//
// const leftArrow = document.getElementsByClassName('leftArrow');
// const rightArrow = document.getElementsByClassName('rightArrow');

changeMode = () => {
    darkMode.classList.toggle('lightMode');
    wholePage.classList.toggle('dark');
    // leftArrow.classList.toggle('leftArrowDark');
    // rightArrow.classList.toggle('rightArrowDark');
    // aPropertyAll.classList.toggle('aDark');

};

darkMode.addEventListener('click', changeMode);

//SHOW FORM CREATEACCOUNT AND LOGIN

const signIn = document.querySelector('.signIn');
const signOut = document.querySelector('.signOut');
const login = document.querySelector('.login');
const createAccount = document.querySelector('.createAccount');

const showLoginForm = () => login.classList.toggle('activeFormMenu');
const showCreateAccountForm = () => createAccount.classList.toggle('activeFormMenu');

signIn.addEventListener('click', showLoginForm);
signOut.addEventListener('click', showCreateAccountForm);

//SHOW MENU

const hamburgerMenu = document.querySelector('.hamburgerMenu');
const nav = document.querySelector('nav');

const showMenu = () => nav.classList.toggle('activeMenu');

hamburgerMenu.addEventListener('click', showMenu);


//REPLACE LI MENU AND REMOVE FORM LOGIN AND REGISTRATION

const ulNavbar = document.querySelector('nav ul');


function replaceMenu() {
    if (signIn.classList.contains('signIn') && signOut.classList.contains('signOut')) {
        const accountNavbar = document.createElement('li');
        accountNavbar.classList.add('menu');
        ulNavbar.appendChild(accountNavbar);

        const linkAccount = document.createElement('a');
        linkAccount.classList.add('account');
        linkAccount.setAttribute('href', 'account.html');
        linkAccount.textContent = 'Konto';
        accountNavbar.appendChild(linkAccount);

        const logOutNavbar = document.createElement('li');
        logOutNavbar.classList.add('menu');
        ulNavbar.appendChild(logOutNavbar);

        const linkLogOut = document.createElement('a');
        linkLogOut.classList.add('logOut');
        linkLogOut.setAttribute('href', '#');
        linkLogOut.textContent = 'Wyloguj';
        logOutNavbar.appendChild(linkLogOut);

        signIn.parentElement.remove();
        signOut.parentElement.remove();

        login.style.display = 'none';
        createAccount.style.display = 'none';
    }
}


createAccount.addEventListener('click', replaceMenu);
login.addEventListener('click', replaceMenu);

//LOGOFF MENU

const linkAccount = document.querySelector('.account');
const linkLogOut = document.querySelector('.logOut');

function logoff() {
    if (linkAccount.classList.contains('account') && linkLogOut.classList.contains('logOut')) {

        const signInNavbar = document.createElement('li');
        signInNavbar.classList.add('menu');
        ulNavbar.appendChild(signInNavbar);

        const linkSignIn = document.createElement('a');
        linkSighIn.classList.add('signIn');
        linkSighIn.setAttribute('href', '#');
        signIn.textContent = 'Zaloguj się';
        signInNavbar.appendChild(linkSignIn);

        const signOutNavbar = document.createElement('li');
        signOutNavbar.classList.add('menu');
        ulNavbar.appendChild(signOutNavbar);

        const linkSignOut = document.createElement('a');
        linkSighOut.classList.add('signIn');
        linkSighOut.setAttribute('href', '#');
        signOut.textContent = 'Zaloguj się';
        signOutNavbar.appendChild(linkSignOut);

        linkAccount.parentElement.remove();
        linkLogOut.parentElement.remove();

        login.style.display = 'grid';
        createAccount.style.display = 'grid';

    }
}

const linkSighIn = document.querySelector('.signIn');
const linkSighOut = document.querySelector('.signOut');


linkLogOut.addEventListener('click', logoff);


//SHOW AND CHANGE LANGUAGE

const changeLanguage = document.querySelector('.changeLanguage a')
const languages = document.querySelector('.languages');

const showLanguages = () => languages.classList.toggle('showLanguages');

changeLanguage.addEventListener('click', showLanguages);


