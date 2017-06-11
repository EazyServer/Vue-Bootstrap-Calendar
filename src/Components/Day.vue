<template>
    <div class="day-cell"
         :class="{'today' : day.isToday, 'current-month' : day.isCurrentMonth, 'weekend': day.isWeekEnd, 'selected-day':isDaySelected}"
    @click="showDayOptions">
        <div class="row">
            <div class="col-sm-6">
                <div v-show="isDaySelected" v-if="canAddEvent">
                    <span class="badge badge-success" @click="showAddEventForm" v-if="$i18n"> {{ $t('generic.add_event') }}</span>
                    <span class="badge badge-success" @click="showAddEventForm" v-else>Add Event</span>
                </div>
            </div>
            <div class="col-sm-6">
                <p class="day-number">{{ day.date.format('D') }}</p>
            </div>
        </div>
        <div class="event-box">
            <EventCard
                    :event="event"
                    :key="event.id"
                    :day-date="day.date"
                    :is-day-selected="isDaySelected"
                    :canDeleteEvent="canDeleteEvent"
                    v-for="event in day.events">
            </EventCard>
        </div>
        <EventModal :show.sync="showAddEvent" :day="day"></EventModal>
    </div>
</template>
<script>
    import moment from 'moment';
    import {DAY_SELECTED, CHANGE_MONTH} from '../actions';
    export default {
        data () {
            return {
                isDaySelected: false,
                showAddEvent: false,
            }
        },
        components: {
            'EventCard' : require('./EventCard.vue'),
            'EventModal': require('./EventModal.vue'),
        },
        props:{
            day: {
                type: Object
            },
            firstDay: {
                type: String
            },
            canAddEvent: {
                type: Boolean,
            },
            canDeleteEvent: {
                type: Boolean,
            },
        },
        created(){
            let me = this;
            this.$root.$on(DAY_SELECTED, function (payload) {
                if(payload.dayDate != me.day.date) {
                    me.isDaySelected = false;
                }
            });

            this.$root.$on(CHANGE_MONTH, function () {
                me.isDaySelected = false;
            });
        },
        methods : {
            showDayOptions(){
                let me = this;
                let startOfToday = moment().startOf('day');
                if(this.day.date.isAfter(startOfToday) || this.day.date.isSame(startOfToday)) {
                    this.isDaySelected = true;
                    this.$root.$emit(DAY_SELECTED, {dayDate:me.day.date});
                }
            },
            showAddEventForm(){
                this.showAddEvent = true;
            },
        }
    }
</script>
<style>
    .day-cell {
        flex: 1;
        min-height: 112px;
        padding: 4px;
        border-right: 1px solid #e0e0e0;
        border-bottom: 1px solid #e0e0e0;
        background: rgba(147, 147, 147, 0.1);
    }

    .day-number {
        text-align: right;
        color: rgba(0, 0, 0, .25);
        font-size: 1em;
        padding: 5px;
    }

    .current-month {
        background: #fff;
    }

    .current-month .day-number {
        color: rgba(0, 0, 0, .5);
        font-size: 1.5em;
    }

    .selected-day .day-number {
        font-size: 2.4em;
        font-weight: bolder;
    }

    .weekend .day-number {
        color: rgba(210, 2, 2, 0.6);
    }

    .today {
        background-color: #e8fde7;
    }

    .today .day-number {
        font-size: 2em;
        font-weight: bolder;
        color: #367016;
    }
</style>