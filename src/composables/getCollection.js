import { ref,watchEffect } from 'vue'
import { collection, db, query, onSnapshot, orderBy } from '../firebase/config'

const getCollection = (collection_) => {
    let error = ref(null)
    let documents = ref(null)

    const colRef = collection(db, collection_)
    const q = query(colRef, orderBy('createdAt'))

    const unsub = onSnapshot(q, snapshot => {
        let results = []
        snapshot.docs.forEach( doc => {
            // console.log(doc.data());
            doc.data().createdAt && results.push({...doc.data(), id:doc.id}) 
        })

        documents.value = results
        error.value = null
    } , err =>  {
        // console.log(err.message)
        documents.value = null
        error.value = 'could not fetch the data' + err.message
    })

    watchEffect((onInvalidate) => {
        // unsub from prev collection when watcher is stopped (component unmounted)
        onInvalidate(() => unsub());
      });

    return { documents , error }
}

export default getCollection