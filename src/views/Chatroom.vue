<template>
  <div class="container">
    <Navbar></Navbar>
    <NewChatForm></NewChatForm>
    <ChatWindow></ChatWindow>
  </div>
</template>

<script>
import ChatWindow from '../components/ChatWindow'
import Navbar from '../components/Navbar.vue'
import NewChatForm from '../components/NewChatForm.vue'
import { useRouter } from 'vue-router'
import { watch } from 'vue'
import getUser from '../composables/getUser'

export default {
    components: {
    ChatWindow,
        Navbar, NewChatForm
    },
    setup(){
      const router = useRouter()
      let {updateUser} = getUser()

      watch(updateUser, ()=> {
        if(!updateUser.value){
          console.log('I am working?')
          router.push({name:"Welcome"})
        }
      })

      return { }
    }
}
</script>

<style>

</style>