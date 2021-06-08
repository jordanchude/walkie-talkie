<template>
    <div>

    
    <button @click="createChatRoom()"></button>


    </div>
</template>

<script>
// IMPORT REFERENCE TO FIREBASE SDK
import { db } from '../components/firebase'

export default {

    props: ['uid']

};

</script>