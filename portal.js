function portalLogin(e){e.preventDefault();localStorage.setItem('legalPortalLoggedIn','1');location.href='dashboard.html'}
function portalLogout(){localStorage.removeItem('legalPortalLoggedIn');location.href='portal-login.html'}
function protectPortal(){if(localStorage.getItem('legalPortalLoggedIn')!=='1')location.href='portal-login.html'}
function registerDemo(e){e.preventDefault();localStorage.setItem('legalPortalLoggedIn','1');location.href='dashboard.html'}
