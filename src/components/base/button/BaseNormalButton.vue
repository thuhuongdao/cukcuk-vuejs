<template>
    <button class="normal-button">{{text}}</button>
</template>
<style scoped>
@import '../../../css/base/button/normal-button.css';
</style>
<script>
export default {
    props: ['text'],
}
</script>