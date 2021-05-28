<template>
    <div>
        <h3>Home</h3>
        <User v-slot:user="{ user }">

            <div v-if="user">
                <p>Logged-in as {{user.uid}} </p>
            </div>
            <Login v-else/>

        </User>
    </div>
</template>

<script>
// IMPORT LOGIN COMPONENT
import Login from './Login'
import User from './User.vue'

// REGISTERING COMPONENT
export default {
    components: {
        Login,
        User
    }
}

</script>