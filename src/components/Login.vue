<template>
    <aside>
        <!-- FORM -->
        <!-- ADD MORE FORM VALIDATION? -->
        <label for="email">Email</label><br>
        <input type="email" placeholder="email" v-model="email" class="input" required>

        <label for="password"></label>
        <input type="password" placeholder="password" v-model="password" class="input">

        <div v-if="newUser">
            <h3>Sign up for a New Account</h3>
            <a href="#" @click="newUser = false">Returning User?</a>
        </div>

        <div v-else>
            <h3>Sign in with Email</h3>
            <a href="#" @click="forgotPassword()">Forgot Password?</a><br>
            <a href="#" @click="newUser = true">New User?</a>
        </div>

        <button class="button is-info" :class="{'is-loading': loading}" @click="signInOrCreateUser()">
            {{ newUser ? 'Sign Up' : 'Login'}}
        </button>

        <p class="has-text-danger" v-if="errorMessage"> {{ errorMessage }} </p>
    </aside>
</template>

<script>
import { auth } from './firebase'

export default {
    data() {
        // DATA PROPERTIES FOR FORM
        return {
            auth,
            newUser: false,
            email: '',
            password: '',
            loading: false,
            errorMessage: ''
        }
    },

    methods: {
        async signInOrCreateUser() {
            this.loading = true;
            this.errorMessage = '';

            try {
                // IF NEW USER, CREATE ACCOUNT
                if (this.newUser) {
                    await auth.createUserWithEmailAndPassword(this.email, this.password)

                // IF NOT, SIGN INTO ACCOUNT
                } else {
                    await auth.signInWithEmailAndPassword(this.email, this.password);
                }
            } catch (error) {
                this.errorMessage = error.message;
            }

            this.loading = false;
        },
        async forgotPassword() {
            try {
                await auth.sendPasswordResetEmail(this.email)
            } catch(error) {
                this.errorMessage = error.message;
            }
        }
    }
}

</script>