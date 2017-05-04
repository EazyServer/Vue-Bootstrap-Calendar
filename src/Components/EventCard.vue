<template>
    <div class="panel no-margin" :class="[event.color]" @click="showEventDetails">
        <div class="panel-heading event-title" :class="{'clickable-event':isDaySelected}">{{event.title}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            event: {
                type: Object
            },
            isDaySelected: {
                type: Boolean
            }
        },
        methods: {
            showEventDetails() {
                if(this.isDaySelected){
                    // TODO: implement event details presentation
                    alert(this.event.title+' is selected. Can you help implement this too?');
                }
            }
        }
    }
</script>
<style>
    .event-title {
        padding: 0px 5px;
        font-size: 12px
    }
    .clickable-event {
        text-decoration: underline;
    }
</style>