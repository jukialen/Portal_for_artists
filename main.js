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

const linkSignIn = document.querySelector('.signIn');
const linkSignOut = document.querySelector('.signOut');
const login = document.querySelector('.login');
const createAccount = document.querySelector('.createAccount');

const showLoginForm = () => login.classList.toggle('activeFormMenu');
const showCreateAccountForm = () => createAccount.classList.toggle('activeFormMenu');

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

const replaceMenu = () => {
    if (linkSignIn.classList.contains('signIn') && linkSignOut.classList.contains('signOut')) {
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

        linkSignIn.parentElement.remove();
        linkSignOut.parentElement.remove();

        login.style.display = 'none';
        createAccount.style.display = 'none';


        // this.aliasLogOut = linkLogOut;
        // this.aliasAccount = linkAccount;

    }

}


buttonCreateAccount.addEventListener('click', replaceMenu);
buttonLogin.addEventListener('click', replaceMenu);



//LOGOFF MENU


const logoff = () => {
    if (linkAccount.classList.contains('account') && linkLogOut.classList.contains('logOut')) {

        // this.linkAccount = aliasAccount;
        // this.linkLogOut = aliasLogOut;

        const signInNavbar = document.createElement('li');
        signInNavbar.classList.add('menu');
        ulNavbar.appendChild(signInNavbar);

        const linkSignIn = document.createElement('a');
        linkSignIn.classList.add('signIn');
        linkSignIn.setAttribute('href', '#');
        linkSignIn.textContent = 'Zaloguj się';
        signInNavbar.appendChild(linkSignIn);

        const signOutNavbar = document.createElement('li');
        signOutNavbar.classList.add('menu');
        ulNavbar.appendChild(signOutNavbar);

        const linkSignOut = document.createElement('a');
        linkSignOut.classList.add('signOut');
        linkSignOut.setAttribute('href', '#');
        linkSignOut.textContent = 'Zaloguj się';
        signOutNavbar.appendChild(linkSignOut);

        ulNavbar.addEventListener('click', e => {
            if (e.target.tagName === 'LI' && e.target.classList.contains('.logOut')) {
                linkLogOut.addEventListener('click', logoff);
            }
        });

        linkAccount.parentElement.remove();
        linkLogOut.parentElement.remove();

        login.style.display = 'grid';
        createAccount.style.display = 'grid';

    }
}

// if (aPropertyAll) {
//     const linkLogOut = document.querySelector('.logOut');
//     linkLogOut.addEventListener('click', logoff);
// } else {
//     console.warn(`There is no element with class logOut`);
// }

//SHOW AND CHANGE LANGUAGE

const changeLanguage = document.querySelector('.changeLanguage a')
const languages = document.querySelector('.languages');

const showLanguages = () => languages.classList.toggle('showLanguages');

changeLanguage.addEventListener('click', showLanguages);


