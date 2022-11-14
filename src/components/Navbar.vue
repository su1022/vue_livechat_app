<template>
  <nav v-if="updateUser">
    <div>
        <p>Hey {{updateUser.displayName}} !</p>
        <p class="email">Currently logged in as {{updateUser.email}}</p>
    </div>
    <button @click="handleClick">Logout</button>
    <div v-if="error" class="error">{{error}}</div>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'


export default {
  setup(){
    let {logout ,error} = useLogout()
    let { updateUser } = getUser()
  


    const handleClick = () => {
      logout()
      if(!error.value){
        console.log("User Logged out")
      }
    }

    return {error, handleClick, updateUser}
  }
}
</script>

<style>
nav {
    padding:20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
nav p{
    margin:2px auto;
    font-size: 16px;
    color:#444;
}
nav p.email{
    font-size: 14px;
    color:#999;
}
</style>