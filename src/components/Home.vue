<template>
    <div>
        <h3>Home</h3>
        <User v-slot:user="{ user }">
            <template>
            <div v-if="user">
                <p>Logged-in as {{user.uid}} </p>

                <!-- PASS USER STATE AS PROP -->
                <UserProfile :user="user"/> 
                <ChatList :uid="user.uid"/>
            </div>
            <Login v-else/>
            </template>
        </User>
    </div>
</template>

<script>
// COMPONENTS
import Login from './Login'
import User from './User.vue'
import UserProfile from './UserProfile'
import ChatList from './ChatList.vue'

// REGISTERING COMPONENTS
export default {
    components: {
        Login,
        User,
        UserProfile,
        ChatList
    }
}

</script>