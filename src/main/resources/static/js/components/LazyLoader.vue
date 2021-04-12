<template>
    <span></span>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'LazyLoader',
        methods: mapActions(['loadPageAction']),
        mounted() {
            window.onScroll = () => {
                const el = document.documentElement
                const isBottomOfScreen = el.scrollTop + window.innerHeight === el.offsetHeight

                if (isBottomOfScreen) {
                    this.loadPageAction()
                }
            }
        },
        beforeDestroy() {
            window.onScroll = null
        }
    }
</script>

<style>

</style>
