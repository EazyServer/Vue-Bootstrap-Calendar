<template>
    <div class="card event" :class="[event.color]" @click="showEventDetails">
        <div class="card-header event-title" :class="{'clickable-event':isDaySelected}">{{event.title}}</div>
    </div>

    
</template>

<script>
    export default {
        components: {
            'EventModal': require('./EventModal.vue'),
        },
        props: {
            event: {
                type: Object
            },
            isDaySelected: {
                type: Boolean
            },
        },
        data() {
            return {
                showModal: false,
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
    .event {
        margin-bottom: 20px;
    }
    .event > .event-title {
        padding: 0px 5px;
        font-size: 12px
    }
    .clickable-event {
        text-decoration: underline;
    }
</style>