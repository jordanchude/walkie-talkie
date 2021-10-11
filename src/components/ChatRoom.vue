<template>
    <main>
        <h3>Welcome to Chatroom {{ chatId }} </h3>
        <User>
            <template #user = "{ user }">
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

            <hr>

            <h5>Record Audio</h5> 

            <button v-if="!recorder" @click="record()">Record</button>
            <button v-else @click="stop()">Stop</button>

            <audio v-if="newAudio" :src="newAudioURL" controls></audio>

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
import { db, storage } from './firebase'
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
            messages: [],
            newAudio: null,
            recorder: null,
            audioURL: null
        }
    },
    computed: {
        chatId() {
            return this.$route.params.id;
        },
        messagesCollection() {
            return db.doc(`chats/${this.chatId}`).collection('messages');
        },
        newAudioURL() {
            return URL.createObjectURL(this.newAudio);
        }
    },
    firestore() {
            return {
                messages: this.messagesCollection.orderBy('createdAt').limitToLast(10)
            }
    },
    methods: {
        async addMessage(uid) {

            this.loading = true;

            this.audioURL = null;

            // GENERATE RANDOM MESSAGE ID
            const { id: messageId } = this.messagesCollection.doc();

            if (this.newAudio) {
                const storageRef = storage
                .ref('chats')
                .child(this.chatId)
                .child(`${messageId}.wav`);
                console.log(storageRef);

                await storageRef.put(this.newAudio);
            
                this.audioURL = await storageRef.getDownloadURL();
            }
            
            // SET MESSAGE IN DATABASE
            await this.messagesCollection.doc(messageId).set({
                text: this.newMessageText,
                sender: uid,
                createdAt: Date.now(),
                audioURL: this.audioURL
            })


            this.loading = false,
            this.newMessageText = ''
            this.newAudio = null;
        },
        async record() {
            this.newAudio = null;

            // ASK FOR USER PERMISSION TO RECORD AUDIO
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false
            });

            // RECORD AUDIO
            const options = { mimeType: "audio/webm"};
            const recordedChunks = [];
            this.recorder = new MediaRecorder(stream, options);

            // EVENT LISTENER TO LOOK FOR DATA
            this.recorder.addEventListener("dataavailable", e => {
                if (e.data.size > 0) {
                    recordedChunks.push(e.data);
                }
            });

            // EVENT LISTENER TO CREATE BLOB ONCE RECORDING STOPS
            this.recorder.addEventListener("stop", () => {
                this.newAudio = new Blob(recordedChunks);
            })

            this.recorder.start();
        },
        async stop() {
            this.recorder.stop();
            this.recorder = null;
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

    li {
        display: flex;
    }
</style>