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
    linkLogOut.addEventListener('click', () => logoff());
    logOutNavbar.appendChild(linkLogOut);

    $linkSignIn.parentElement.remove();
    $linkSignOut.parentElement.remove();

    // close forms after logoff
    if ($toggleLogin) showLoginForm();
    if ($toggleCreateAccount) showCreateAccountForm();
  }
};

const hideNavAfter = () => {
  if ($hamburgerMenu) {
    $nav.classList.remove('active__menu');
  }
};

// LEFT MENU CLICK
const leftMenuClick = () => {
  $aside.classList.toggle('aside--active');
  $firstH3.classList.toggle('first__h3');
};
