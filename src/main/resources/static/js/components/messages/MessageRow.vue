<template>
    <v-card class="my-4">
        <v-card-text primary-title>
            <div>
                <v-avatar
                    v-if="message.author && message.author.userpic"
                    size="48px"
                >
                    <img
                            :src="message.author.userpic"
                            :alt="message.author.name"
                    >
                </v-avatar>

                <v-avatar
                    v-else
                    sixe="36px"
                    color="indigo"
                >
                    <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>
            </div>
            <span class="pl-3">{{ authorName }}</span>
            <div class="pt-3">
                {{ message.text }}
            </div>
        </v-card-text>
        <media v-if="message.link" :message="message"></media>
        <v-card-actions>
            <v-btn @click="edit" small text rounded>Edit</v-btn>
            <v-btn @click="del" icon small >
                <v-icon>mdi-delete</v-icon>
            </v-btn>
        </v-card-actions>
        <comment-list
                :comments="message.comments"
                :message-id="message.id"
        ></comment-list>
    </v-card>
</template>

<script>
    import { mapActions } from 'vuex'
    import Media from 'components/media/Media.vue'
    import CommentList from 'components/comment/CommentList.vue'

    export default {
        props: ['message', 'editMessage'],
        components: { CommentList, Media },
        computed: {
            authorName() {
                return this.message.author ? this.message.author.name : 'unknown'
            }
        },
        methods: {
            ...mapActions(['removeMessageAction']),
            edit() {
                this.editMessage(this.message)
            },
            del() {
                this.removeMessageAction(this.message)
            }
        }
    }
</script>
