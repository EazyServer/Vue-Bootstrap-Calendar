<template>
    <div>
        <div class="card event" :class="[event.color]" @click="showEventDetails">
            <div class="card-header event-title" :class="{'clickable-event':isDaySelected}">{{event.title}}</div>
        </div>

        <EventDetails :show.sync="displayEventDetails" :event="event"></EventDetails>
    </div>
</template>

<script>
    export default {
        components: {
            'EventDetails': require('./EventDetails.vue'),
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
                displayEventDetails:  false,
            }
        },
        methods: {
            showEventDetails() {
                if(this.isDaySelected){
                    this.displayEventDetails = true;
                }
            }
        }
    }
</script>
<style>
    .event {
        margin-bottom: 5px;
    }
    .event > .event-title {
        padding: 0px 5px;
        font-size: 12px
    }
    .clickable-event {
        text-decoration: underline;
    }
</style>