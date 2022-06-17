function setLoginToLocal(val) {
    return localStorage.setItem('imesp-token', val);
}

function getLoginToLocal() {
    return localStorage.getItem('imesp-token');
}

function getCurUser() {
    return localStorage.getItem('curuser');
}

function setCurUser(val) {
    return localStorage.setItem('curuser', val);
}

export {
    getLoginToLocal,
    setLoginToLocal,
    getCurUser,
    setCurUser
}