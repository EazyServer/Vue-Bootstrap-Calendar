<template>
    <div class="panel no-margin" :class="[event.color]">
        <div class="panel-heading event-title">{{event.title}}</div>
    </div>
</template>

<script>
    export default {
        props: ['event', 'date', 'firstDay']
    }
</script>
<style>
    .event-title {
        padding: 0px 5px;
        font-size: 12px
    }
</style>