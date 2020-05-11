const urlAuthorisationGoogle = 'http://baldedrop.hopto.org/oauth2/authorization/google';

let response = await fetch(urlAuthorisationGoogle);
console.log(response);
if (response.ok) {
    const token = response.headers.Authorization;
    window.localStorage.auth = token;
} else if (response.redirected) {
    let urlRedirect = response.url;
    console.log(urlRedirect);
    response = Response.redirect(urlRedirect);
} else console.log('ошибка');