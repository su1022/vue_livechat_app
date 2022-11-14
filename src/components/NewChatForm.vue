<template>
  <form>
    <textarea placeholder="Type a message and hit enter to send..." v-model="message" @keypress.enter.prevent="handelSubmit"></textarea>
    <div v-if="error" class="error">{{ error }} blah</div>
  </form>
</template>

<script>
import { serverTimestamp } from '../firebase/config'
import { ref } from 'vue'
import getUser from "../composables/getUser"
import useCollection from '../composables/useCollection'
export default {
    setup(){
        let { updateUser } = getUser()
        let { add_doc, error } = useCollection('message')

        let message = ref('')

        const handelSubmit = async() => {
            const chat = {
                user:updateUser.value.displayName,
                message:message.value,
                createdAt:serverTimestamp()
            }
            await add_doc(chat)
            console.log(error.value)
            if(!error.value) {
                message.value = ""
            }
        }

        return { handelSubmit, message ,error }
    }
}
</script>

<style scoped>
form {
    margin:10px;
}
textarea{
    width:100%;
    height: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    /* border:0; */
    border-radius: 20px;
    font-family: inherit;
    outline: none;
    resize: none;
}
</style>