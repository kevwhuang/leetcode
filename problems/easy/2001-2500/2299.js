// 2299 - Strong Password Checker II

function strongPasswordCheckerII(password) {
    if (password.length < 8) return false;
    let hasLowercase = false, hasUppercase = false;
    let hasDigit = false, hasSpecial = false;
    for (let i = 0; i < password.length; i++) {
        if (password[i] === password[i - 1]) return false;
        const code = password.charCodeAt(i);
        if (97 <= code && code <= 122) hasLowercase = true;
        else if (65 <= code && code <= 90) hasUppercase = true;
        else if (48 <= code && code <= 57) hasDigit = true;
        else if ('!@#$%^&*()-+'.includes(password[i])) hasSpecial = true;
    }
    return hasLowercase && hasUppercase && hasDigit && hasSpecial;
}
