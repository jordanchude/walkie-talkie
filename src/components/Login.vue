<template>
    <aside>
        <h3>Sign in anonymously</h3>
        <button @click="auth.signInAnonymously()">Sign in</button>

        <!-- FORM -->
        <label for="email">Email</label><br>
        <input type="email" placeholder="email" v-model="email" class="input">

        <label for="password"></label>
        <input type="password" placeholder="password" v-model="password" class="input">

    </aside>
</template>

<script>
import { auth } from './firebase'

export default {
    data() {
        return {
            auth,
            email: '',
            password: ''
        }
    },
}

</script>