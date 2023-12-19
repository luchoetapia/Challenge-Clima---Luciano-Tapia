<script>
    export default {
        data() {
            return {
                cityID: this.$route.params
            }
        }
    }
</script>

<template>
    {{ cityID }}
</template>