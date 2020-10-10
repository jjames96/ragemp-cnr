const USERNAME_MIN_CHARACTERS = 3;
const PASSWORD_MIN_CHARACTERS = 3;

export const isRegisterUsernameValid = (username: string) => {
    return username && username.length >= USERNAME_MIN_CHARACTERS;
}
  
export const isRegisterEmailValid = (email?: string) => {
    // TODO check email validity
    return true;
}

export const isRegisterPasswordValid = (password: string) => {
    return password && password.length >= PASSWORD_MIN_CHARACTERS;
}

export const isRegisterConfirmPasswordValid = (password: string, confirmPassword: string) => {
    return password && confirmPassword && password === confirmPassword;
}