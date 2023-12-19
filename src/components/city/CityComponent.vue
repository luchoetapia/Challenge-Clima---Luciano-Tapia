<script>
    export default {
        data() {
            return {
                cityID: this.$route.query.key
            }
        },
        mounted() {
            console.log(this.$route.query.key)
        }
    }
</script>

<template>
    {{ cityID }}
</template>