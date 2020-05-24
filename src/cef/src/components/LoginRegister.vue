<template style="background-color: white">
  <div class="column">
    <b-tabs type="is-boxed is-centered">
      <b-tab-item label="Log In" icon="fas fa-user-check">

        <b-field label="Username" label-position="on-border">
          <b-input type="text" icon="fas fa-user-circle"></b-input>
        </b-field>

        <b-field label="Password" label-position="on-border">
          <b-input type="password" icon="fas fa-unlock-alt"></b-input>
        </b-field>

        <div class="columns">
          <div class="column is-half">
            <b-button type="is-primary" expanded @click="loginButtonClicked">Log In</b-button>
          </div>

          <div class="column">
            <b-button type="is-primary" expanded disabled>Forgot Password</b-button>
          </div>
        </div>

      </b-tab-item>

      <b-tab-item label="Register" icon="fas fa-user-plus">

        <b-field label="Username" label-position="on-border">
          <b-input id="register-username" type="text" icon="fas fa-user-circle" required minlength="3" maxlength="24"></b-input>
        </b-field>

        <b-field
          label="Email (optional)"
          label-position="on-border"
          message="Your email is not required but will be used to reset your password if you forget it"
        >
          <b-input id="register-email" type="email" icon="fas fa-at"></b-input>
        </b-field>

        <b-field label="Password" label-position="on-border">
          <b-input id="register-password" type="password" icon="fas fa-unlock-alt" required minlength="3"></b-input>
        </b-field>

        <b-field label="Confirm password" label-position="on-border">
          <b-input id="register-confirm-password" type="password" icon="fas fa-unlock-alt" required></b-input>
        </b-field>

        <b-button id="register-button" type="is-primary" expanded @click="registerButtonClicked">Register</b-button>

      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'LoginRegister',
  methods: {
    registerButtonClicked,
    loginButtonClicked
  }
}

const USERNAME_MIN_CHARACTERS = 3;
const PASSWORD_MIN_CHARACTERS = 3;

function registerButtonClicked() {
  setRegisterButtonLoading(true);

  const usernameElement = $("#register-username");
  const emailElement = $("#register-email");
  const passwordElement = $("#register-password");
  const confirmPasswordElement = $("#register-confirm-password");

  const username = usernameElement.val();
  const email = emailElement.val();
  const password = passwordElement.val();
  const confirmPassword = confirmPasswordElement.val();

  let isValid = true;

  if (!isRegisterUsernameValid(usernameElement.val())) {
    usernameElement[0].setCustomValidity(`Username is not valid - must be at least ${USERNAME_MIN_CHARACTERS} characters in length`);
    isValid = false;
  }

  if (!isRegisterEmailValid(emailElement.val())) {
    emailElement[0].setCustomValidity("Email is not valid");
    isValid = false;
  } 

  if (!isRegisterPasswordValid(passwordElement.val())) {
    passwordElement[0].setCustomValidity(`Password is not valid - must be at least ${PASSWORD_MIN_CHARACTERS} characters in length`);
    isValid = false;
  }

  if (!isRegisterConfirmPasswordValid(passwordElement.val(), confirmPasswordElement.val())) {
    confirmPasswordElement[0].setCustomValidity("Passwords do not match");
    isValid = false;
  }

  if (!isValid) {
    setRegisterButtonLoading(false);
    return;
  }

  mp.trigger('submitRegisterForm', username, password, email);
}

function loginButtonClicked() {

}

function isRegisterUsernameValid(username) {
  return username && username.length >= USERNAME_MIN_CHARACTERS;
}

function isRegisterEmailValid(email) {
  // TODO check email validity
  return true;
}

function isRegisterPasswordValid(password) {
  return password && password.length >= PASSWORD_MIN_CHARACTERS;
}

function isRegisterConfirmPasswordValid(password, confirmPassword) {
  return password && confirmPassword && password === confirmPassword;
}

function setRegisterButtonLoading(isLoading) {
  const registerButton = $("#register-button")
  isLoading ? registerButton.addClass("is-loading") : registerButton.removeClass("is-loading");
}
</script>

<style>
#app {
  margin-top: 30vh;
  margin-left: calc((100vw - 600px) / 2);
  height: auto;
  width: 600px;
}
</style>
