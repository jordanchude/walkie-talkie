<template>
    <main>
        <h3>Welcome to Chatroom {{ chatId }} </h3>
        <!-- TROUBLESHOOT WHY MESSAGES DON'T APPEAR -->
        <User #user = "{ user }">
            <div v-if="user">
                <ul>
                    <li v-for="message of messages" :key="message.id">
                        <ChatMessage 
                            :message="message"
                            :owner="user.uid === message.sender"
                        />
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
            </div>

            <Login v-else/>
        </User>
    </main>
</template>

<script>
import User from './User.vue'
import Login from './Login.vue'
import { db } from './firebase'
import ChatMessage from './ChatMessage.vue'

export default {
    components: {
        User,
        Login,
        ChatMessage
    },
    data() { 
        return {
            newMessageText: '',
            loading: false,
            messages: []
        }
    },
    computed: {
        chatId() {
            return this.$route.params.id;
        },
        messagesCollection() {
            return db.doc(`chats/${this.chatId}`).collection('messages');
        },
    },
    firestore() {
            return {
                messages: this.messagesCollection.orderBy('createdAt').limitToLast(10)
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

<style scoped>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-direction: column;
        min-width: 500px;
        background: #efefef;
        padding: 10px;
        border-radius: 0;
    }
</style>