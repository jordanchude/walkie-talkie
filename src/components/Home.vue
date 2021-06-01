<template>
    <div>
        <h3>Home</h3>
        <User v-slot:user="{ user }">

            <div v-if="user">
                <!-- <p>Logged-in as {{user.uid}} </p> -->
                <!-- PASS USER STATE AS PROP -->
                <UserProfile :user="user"/> 
            </div>
            <Login v-else/>

        </User>
    </div>
</template>

<script>
// IMPORT LOGIN COMPONENT
import Login from './Login'
import User from './User.vue'
import UserProfile from './UserProfile'

// REGISTERING COMPONENTS
export default {
    components: {
        Login,
        User,
        UserProfile
    }
}

</script>