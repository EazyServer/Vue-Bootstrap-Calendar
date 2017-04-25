<template>
    <div class="row">
        <div class="col-sm-4"></div>
        <div class="col-sm-4 header-center">
            <div class="btn-group">
                <button @click.stop="goPrev" class="btn btn-outline btn-primary">&lArr; {{ $t('generic.previous')}}</button>
                <button @click.stop="goToday" class="btn btn-outline btn-default today-button"> {{ $t('generic.today')}}</button>
                <button @click.stop="goNext" class="btn btn-outline btn-primary">{{ $t('generic.next')}} &rArr;</button>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="title"> {{title}}</div>
        </div>
    </div>
</template>
<script>
    import moment from 'moment';
    import {CHANGE_MONTH} from '../actions';

    export default {
        props : {
            currentMonth : {},
            locale       : {}
        },
        computed: {
            title () {
                if (!this.currentMonth) return;
                return this.currentMonth.locale(this.locale).format('MMMM YYYY')
            }
        },
        methods : {
            goPrev () {
                let payload = moment(this.currentMonth).subtract(1, 'months').startOf('month');
                EventsBus.$emit(CHANGE_MONTH, payload);
            },
            goNext () {
                let payload = moment(this.currentMonth).add(1, 'months').startOf('month');
                EventsBus.$emit(CHANGE_MONTH, payload);
            },
            goToday () {
                EventsBus.$emit(CHANGE_MONTH, moment());
            }
        }
    }
</script>
<style>
    .full-calendar-header{
        display: flex;
        align-items: center;
    }
    .header-center{
        flex:3;
        text-align:center;
    }
    .title {
        text-align: center;
        font-size: 1.5em;
        font-weight: bolder;
    }
</style>