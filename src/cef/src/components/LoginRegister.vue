<template>
  <div class="column is-half">
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
            <b-button type="is-primary" expanded>Log In</b-button>
          </div>

          <div class="column">
            <b-button type="is-primary" expanded disabled>Forgot Password</b-button>
          </div>
        </div>

      </b-tab-item>

      <b-tab-item label="Register" icon="fas fa-user-plus">

        <b-field label="Username" label-position="on-border">
          <b-input type="text" icon="fas fa-user-circle"></b-input>
        </b-field>

        <b-field label="Email" label-position="on-border">
          <b-input type="email" icon="fas fa-at"></b-input>
        </b-field>

        <b-field label="Password" label-position="on-border">
          <b-input type="password" icon="fas fa-unlock-alt"></b-input>
        </b-field>

        <b-field label="Confirm password" label-position="on-border">
          <b-input type="password" icon="fas fa-unlock-alt"></b-input>
        </b-field>

        <b-button type="is-primary" expanded>Register</b-button>

      </b-tab-item>
    </b-tabs>
  </div>
</template>

<script>
export default {
  name: 'LoginRegister'
}
</script>
