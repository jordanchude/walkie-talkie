<template>
    <div>

    <ul>
        <li v-for="chat of chats" :key="chat.id">
            {{ chat.id }}
        </li>
    </ul>


    <button @click="createChatRoom()">Create Chat Room</button>


    </div>
</template>

<script>
// IMPORT REFERENCE TO FIREBASE SDK
import { db } from '../components/firebase'

export default {
    data() {
        return {
            // ARRAY TO STORE CHATS
            chats: []
        }
    },
    // VUEFIRE FUNCTION TO AUTOMATICALLY MANAGE REALTIME STREAM
    // THAT CONNECTS TO REACTIVE DATA PROPERTY
    firestore() {
        return {
            // QUERY CHATS WHERE OWNER IS EQUAL TO CURRENT OWNER
            chats: db.collection('chats').where('owner', '==', this.uid)
        }
    },
    methods: {
        async createChatRoom() {
            // ADD JSON DOCUMENT TO CHATS COLLECTION IN DATABASE
            const newChat = await db.collection('chats').add({
                createdAt: Date.now(),
                // CURRENT USER IS OWNER
                owner: this.uid,
                // CURRENT USER IS FIRST MEMBER
                members: [this.uid]
            })

            console.log(newChat);
        }
    },

    props: ['uid']

};

</script>