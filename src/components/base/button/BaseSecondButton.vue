<template>
    <button class="second-button">{{text}}</button>
</template>
<style scoped>
@import '../../../css/base/button/second-button.css';
</style>
<script>
export default {
    props: ['text']
}
</script>