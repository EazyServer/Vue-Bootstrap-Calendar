<template>
    <div class="week-row" @click="showWeekNumber">
        <div class="week-number" v-if="showWeekNumberFlag">{{ $t('generic.week')}} {{week[0].date.format('w')}}</div>
        <Day v-for="day in week"
             :day="day"
             :key="day.date"
        ></Day>
    </div>
</template>
<script>
    import {WEEK_SELECTED} from '../actions';

    export default {
        data () {
            return {
                showWeekNumberFlag: false,
            }
        },
        components: {
            'Day': require('./Day.vue'),
        },
        props:{
            week: {
                type: Array
            },
        },
        created(){
            let me = this;
            this.$root.$on(WEEK_SELECTED, function (payload) {
                if(payload.weekDate != me.week[0].date) {
                    me.showWeekNumberFlag = false;
                }
            })
        },
        mounted() {
        },
        computed: {
        },
        methods : {
            showWeekNumber() {
                let me = this;
                me.showWeekNumberFlag = true;
                this.$root.$emit(WEEK_SELECTED, {weekDate:me.week[0].date});
            }
        }
    }
</script>
<style>
    .week-row {
        width: 100%;
        border-left: 1px solid #e0e0e0;
        display: flex;
        cursor: pointer;
    }
    .week-number {
        border: 1px solid #e1e1e1;
        border-right: 0px;
        border-radius: 5px 0 0 5px;
        background-color: #fafafa;
        text-align: right;
        position: absolute;
        width: 70px;
        left: -71px;
        padding: 8px 5px;
        cursor: pointer;
    }
</style>