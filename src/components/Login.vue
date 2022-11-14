<template>
  <form @submit.prevent="login">
    <h2>Login</h2>
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button>Login</button>
    <div v-if="error" class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useLogin from '../composables/useLogin'
export default {
    setup(porps,context){
        let email = ref("")
        let password = ref("")
        let {signIn,error} = useLogin()
        const login =async () => {
            const res = await signIn(email.value,password.value)
            if(res){
              context.emit("login")
            }
        }

        return {email, password,login,error}
    }
}
</script>

<style>

</style>