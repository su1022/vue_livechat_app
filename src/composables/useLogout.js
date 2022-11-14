import { ref } from 'vue'
import { auth , signOut } from '../firebase/config'

const error = ref("")
const logout = async() => {
    try{
        await signOut(auth)
    }catch(err){
        error.value = err.message
    }
}

const useLogout =  () => {
    return {logout ,error}
}

export default useLogout

