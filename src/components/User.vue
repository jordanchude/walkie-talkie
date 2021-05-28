<template>
    <div>
        <!-- SLOT PROP
        MAKES USER DATA AVAILABLE TO OTHER COMPONENTS
        THAT CONSUMES USER COMPONENT -->
        <slot name="user" v-bind:user="user"></slot>
    </div>
</template>

<script>
// IMPORT AUTH
import { auth } from "./firebase"

// IMPORT VUE COMPOSITION API
import { ref } from '@vue/composition-api'

export default {
    setup() {
        // DEFAULT VALUE NULL
        // USER NOT SIGNED IN
        const user = ref(null);

        // UNSUBSCRIBE FROM STREAM WHEN NEEDED
        // AVOIDS MEMORY LEAKS IN APPLICATION
        const unsubscribe = auth.onAuthStateChanged(
            firebaseUser => user.value = firebaseUser
        );
        return {
            user,
            unsubscribe,
        }
    },

    // WHEN COMPONENT IS DESTROYED, UNSUBSCRIBE
    destroyed() {
        this.unsubscribe()
    }
}

</script>