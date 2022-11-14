import { ref } from 'vue'
import { collection, addDoc,db } from '../firebase/config'

const error = ref(null)

const useCollection = (collection_) => {
    const add_doc = async (doc) => {
        try{
            const colRef = await collection(db, collection_)
            addDoc(colRef, doc)
            error.value = null
        }catch(err){
            error.value = err.message
        }
    }

    return { add_doc, error}
}

export default useCollection