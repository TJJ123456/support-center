<template>
  <main class="class">
    <h1>请登陆</h1>
    <SmartForm class="form" :title="title" :operation="operation" :valid="valid">
      <FormInput name="username" placeholder="Username" v-model="username"/>
      <FormInput name="password" type="password" placeholder="Password" v-model="password"/>
      <template v-if="mode === 'signup'">
        <FormInput
          name="verify-password"
          type="password"
          placeholder="Retype Password"
          v-model="password2"
        />
        <FormInput name="email" type="email" placeholder="Email" v-model="email"/>
      </template>

      <template slot="actions">
        <template v-if="mode === 'login'">
          <button type="button" class="secondary" @click="mode='signup'">注册</button>
          <button type="summit" :disabled="!valid">登陆</button>
        </template>
        <template v-else-if="mode === 'signup'">
          <button type="button" class="secondary" @click="mode='login'">登陆</button>
          <button type="summit" :disabled="!valid">新建用户</button>
        </template>
      </template>
    </SmartForm>
  </main>
</template>
<script>
export default {
  data() {
    return {
      mode: "login",
      username: "",
      password: "",
      password2: "",
      email: ""
    };
  },
  computed: {
    title() {
      switch (this.mode) {
        case "login":
          return "登陆";
        case "signup":
          return "新建用户";
      }
    },
    retypePasswordError() {
      return this.password2 && this.password !== this.password2;
    },
    signupValid() {
      return this.password2 && this.email && !this.retypePasswordError;
    },
    valid() {
      return (
        this.username &&
        this.password &&
        (this.mode !== "signup" || this.signupValid)
      );
    }
  },
  methods: {
    async operation() {
      await this[this.mode]();
    },
    async login() {
      this.$state.user = await this.$fetch("login", {
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          password: this.password
        })
      });
      this.$router.push({ name: "home" });
    },
    async signup() {
      console.log("123");
      await this.$fetch("signup", {
        method: "POST",
        body: JSON.stringify({
          username: this.username,
          password: this.password,
          email: this.email
        })
      });
      this.mode = "login";
    }
  }
};
</script>
<style lang="stylus" scoped>
.form {
  >>> .content {
    max-width: 400px;
  }
}
</style>

