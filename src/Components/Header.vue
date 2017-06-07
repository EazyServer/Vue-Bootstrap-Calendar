<template>
    <div class="row">
        <div class="col-sm-4">
            <div class="form-group">
                <label for="locale">{{ $t('generic.select_language')}}:</label>
                <select class="form-control language-select" v-model="localeSelect" @change="setLocale" id="locale">
                    <option value="ar">AR</option>
                    <option value="en">EN</option>
                    <option value="de">DE</option>
                </select>
            </div>
        </div>
        <div class="col-sm-4 header-center">
            <div class="btn-group">
                <button @click.stop="goPrev" class="btn btn-outline btn-primary">&lArr; {{ $t('generic.previous')}}</button>
                <button @click.stop="goToday" class="btn btn-outline btn-default today-button">&dArr; {{ $t('generic.today')}}</button>
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
        data (){
            return {
                localeSelect:'en'
            }
        },
        props : {
            currentMonth : {},
            locale       : {
                type: String
            }
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
                this.$root.$emit(CHANGE_MONTH, payload);
            },
            goNext () {
                let payload = moment(this.currentMonth).add(1, 'months').startOf('month');
                this.$root.$emit(CHANGE_MONTH, payload);
            },
            goToday () {
                this.$root.$emit(CHANGE_MONTH, moment());
            },
            setLocale () {
                if(i18n) {
                    i18n.locale = this.localeSelect;
                }
                else {
                    console.warn('Please define global vue locale object named "i18n"!');
                }
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
    .language-select {
        display: inline-block;
        width: 50%;
    }
</style>