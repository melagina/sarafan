<template>
    <v-app app >
        <v-app-bar>
            <v-toolbar-title> Sarafan </v-toolbar-title>
            <v-spacer></v-spacer>
            <span v-if="profile">{{profile.name}} </span>
            <v-btn icon v-if="profile" href="/logout">
                <v-icon>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-app-bar>
        <v-main >
            <v-container v-if="!profile">Необходимо авторизоваться через
                <a href="/login">Google</a>
            </v-container>
            <v-container v-if="profile">
                <messages-list />
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
    import { mapState, mapMutations } from 'vuex'
    import MessagesList from 'components/messages/MessageList.vue'
    import { addHandler } from 'util/ws'

    export default {
         components: {
            MessagesList
         },
         computed: mapState(['profile']),
         methods: mapMutations(['addMessageMutation', 'updateMessageMutation', 'removeMessageMutation']),
         created() {
            addHandler(data => {
                if (data.objectType === 'MESSAGE') {

                    switch (data.eventType) {
                        case 'CREATE':
                            this.addMessageMutation(data.body)
                            break
                        case 'UPDATE':
                            this.updateMessageMutation(data.body)
                            break
                        case 'REMOVE':
                            this.removeMessageMutation(data.body)
                            break
                        default:
                            console.error('Event type "${data.eventType}" is unknown :( ')
                    }

                } else {
                    console.error('Object type  is unknown :( ${data.objectType}')
                }
            })
         }
    }
</script>

<style>

</style>
