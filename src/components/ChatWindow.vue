<template>
  <div class="chat-window">
    <div class="error">{{error}}</div>
    <div v-if="formattedDocuments" ref="messages" class="messages">
      <div v-for="doc in formattedDocuments" :key="doc.id" class="single">
        <span class="created-at">{{ doc.createdAt }}</span>
        <span class="name">{{ doc.user }}</span>
        <span class="message">{{ doc.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '../composables/getCollection'
import { formatDistanceToNow  } from 'date-fns'
import { computed, onUpdated, ref } from 'vue'
export default {
    setup(){
        let { documents, error } = getCollection('message')

        const formattedDocuments = computed( ()=> {
            if(documents.value){
            return  documents.value.map( doc => {
                    let time = formatDistanceToNow(doc.createdAt.toDate())
                    return {...doc,createdAt:time}
                })
            }
        })

        const messages = ref(null)
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight
        })

        return { documents, error,formattedDocuments, messages}
    }
}
</script>

<style scoped>
.chat-window{
    background: #fafafa;
    padding:10px 20px;
    padding-top: 0px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
.single{
    margin:18px 0;
}
.created-at{
    display: block;
    color:#999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name{
    font-weight: bold;
    margin-right: 6px;
}
.messages{
    max-height: 400px;
    overflow: auto;
}
</style>