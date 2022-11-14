<template>
  <form @submit.prevent="signUp">
    <h2>Sign Up</h2>
    <input type="text" placeholder="Display Name" v-model="displayName">
    <input type="email" placeholder="Email" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button>Signup</button>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import { ref } from 'vue'
import useSignup from '../composables/useSignup'

export default {
    setup(props,context){
        let displayName = ref("")
        let email = ref("")
        let password = ref("")
        
        let {error,createAccount} = useSignup()
        const signUp = async() => {
            const res = await createAccount(displayName.value,email.value,password.value)
            if(res){
                context.emit("signup")
            }
        }

        return {displayName, email, password, signUp, error}
    }
}
</script>

<style>

</style>