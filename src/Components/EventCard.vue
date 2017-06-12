<template>
    <div>
        <div class="card event" :class="[event.color]" @click="showEventDetails">
            <div class="card-header event-title" :class="{'clickable-event':isDaySelected}">{{event.title}}</div>
        </div>

        <EventDetails :show.sync="displayEventDetails" :event="event" :canDeleteEvent="canDeleteEvent" @eventDeleted="eventDeleted"></EventDetails>
    </div>
</template>

<script>
    import {EVENT_DELETED} from '../actions';
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
            canDeleteEvent: {
                type: Boolean,
            }
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
            },

            eventDeleted(event) {
                this.$emit(EVENT_DELETED, event);
            }
        },
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