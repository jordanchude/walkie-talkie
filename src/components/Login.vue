<template>
    <aside>
        <h3>Sign in anonymously</h3>
        <button @click="auth.signInAnonymously()">Sign in</button>
    </aside>
</template>

<script>
import { auth } from './firebase'

export default {
    data() {
        return {
            auth,
        }
    },
}

</script>