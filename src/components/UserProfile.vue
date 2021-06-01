<template>
    <div>
        Logged in as {{ user.uid }}

        <!-- SIGN OUT CLICK EVENT FROM FIREBASE -->
        <button @click="auth.signOut()">Sign Out</button>
    </div>
</template>

<script>
import { auth } from './firebase';

export default {
    data() {
        return {
            auth
        }
    },
    props: ['user']
}
</script>