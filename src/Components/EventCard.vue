<template>
    <div class="panel no-margin" :class="[event.color]" @click="showEventDetails">
        <div class="panel-heading event-title" :class="{'clickable-event':isClickableEvent}">{{event.title}}</div>
    </div>
</template>

<script>
    import {DAY_SELECTED} from '../actions';
    import moment from 'moment';
    export default {
        data(){
            return {
                isClickableEvent:false
            }
        },
        props: {
            event: {
                type: Object
            }
        },
        created(){
            const me = this;
            EventsBus.$on(DAY_SELECTED, function (selectedDay) {

                let eventDate = (me.event.date instanceof moment)? me.event.date: moment(me.event.date);

                if(eventDate.isSame(selectedDay.dayDate, 'day')){
                    me.isClickableEvent = true;
                }
                else {
                    me.isClickableEvent = false;
                }
            })
        },
        methods: {
            showEventDetails() {
                if(this.isClickableEvent){
                    alert(this.event.title+' is selected. Will leave the implementation to you too :)');
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