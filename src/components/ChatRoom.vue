<template>
    <main>
        <h3>Welcome to Chatroom {{ chatId }} </h3>
        <!-- TROUBLESHOOT WHY MESSAGES DON'T APPEAR -->
        <User #user = "{ user }">
            <ul>
                <li v-for="message of messages" :key="message.id">
                    {{ messages.id }}
                </li>
            </ul>

            <input v-model="newMessageText" class="input"/>

            <button
                :disabled ="!newMessageText || loading"
                class="button is-success"
                type="text"
                @click="addMessage(user.uid)">
                Send
            </button>
        </User>
    </main>
</template>

<script>
import User from './User.vue'
import { db } from './firebase'

export default {
    components: {
        User,
    },
    data() {
        return {
            newMessageText: '',
            loading: false
        }
    },
    computed: {
        chatId() {
            return this.$route.params.id;
        },
        messagesCollection() {
            return db.doc(`chats/${this.chatId}`).collection('messages');
        },
        firestore() {
            return {
                messages: this.messagesCollection.orderBy('createdAt').limitToLast(10)
            }
        }
    },
    methods: {
        async addMessage(uid) {

            this.loading = true;

            // GENERATE RANDOM MESSAGE ID
            const { id: messageId } = this.messagesCollection.doc();
            
            // SET MESSAGE IN DATABASE
            await this.messagesCollection.doc(messageId).set({
                text: this.newMessageText,
                sender: uid,
                createdAt: Date.now()
            })

            this.loading = false,
            this.newMessageText = ''
        }
    }
}

</script>