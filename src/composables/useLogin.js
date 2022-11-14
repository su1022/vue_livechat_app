import { ref } from 'vue'
import { auth,signInWithEmailAndPassword } from '../firebase/config'

let error = ref(null)
const signIn =async (email,password) => {
    try{
        error.value = null
        const res = await signInWithEmailAndPassword(auth,email,password)

        if(!res) throw new Error("Can't login into account")
        error.value = null
        return res
      }catch(err){
        error.value = err.message
      }
}

const useLogin = () => {
    return {signIn,error}
}

export default useLogin