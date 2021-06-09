<template>
    <div>

    
    <button @click="createChatRoom()">Create Chat Room</button>


    </div>
</template>

<script>
// IMPORT REFERENCE TO FIREBASE SDK
import { db } from '../components/firebase'

export default {
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