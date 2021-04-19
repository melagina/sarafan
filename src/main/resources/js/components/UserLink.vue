<template>
    <router-link
        :to="`/user/${user.id}`"
        class="px-3"
    >
        <v-avatar
                v-if="user && user.userpic"
                size="`${size || 36}px`"
        >
            <img
                    :src="user.userpic"
                    :alt="user.name"
            >
        </v-avatar>

        <v-avatar
                v-else="`${size || 36}px`"
                color="indigo"
        >
            <v-icon dark>mdi-account-circle</v-icon>
            <span class="pl-3">{{ userName }}</span>
        </v-avatar>
    </router-link>
</template>

<script>
    export default {
        name: 'UserLink',
        props: ['user', 'size'],
        computed: {
            userName() {
                return this.user ? this.user.name : 'unknown'
            }
        }
    }
</script>