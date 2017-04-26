<template>
    <div class="panel no-margin" :class="[event.color]" @click="showEventDetails">
        <div class="panel-heading event-title" :class="{'clickable-event':clickableEvent}">{{event.title}}</div>
    </div>
</template>

<script>
    import {DAY_SELECTED} from '../actions';
    export default {
        data(){
            return {
                clickableEvent:false
            }
        },
        props: {
            event: {
                type: Object
            }
        },
        created(){
            let me = this;
            EventsBus.$on(DAY_SELECTED, function (selectedDay) {
                if(me.event.date.isSame(selectedDay.dayDate, 'day')){
                    me.clickableEvent = true;
                }
                else {
                    me.clickableEvent = false;
                }
            })
        },
        methods: {
            showEventDetails() {
                if(this.clickableEvent){
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