<template>
    <transition name="modal">
        <div v-show="show">
            <div class="modal" @click.self="clickBackdrop">
                <div class="modal-dialog" ref="dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" aria-label="Close" @click="cancel">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            <h4 class="modal-title">{{ $t('generic.add_event')}}</h4>
                        </div>
                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="event-title">{{ $t('generic.event_title')}}:</label>
                                    <input type="text" class="form-control" id="event-title" v-model="eventTitle"/>
                                </div>
                                <div class="form-group">
                                    <label for="event-color">{{ $t('generic.event_color') }}:</label>
                                    <select v-model="eventColor" class="form-control" id="event-color">
                                        <option v-for="color in colors" v-bind:value="color.value">
                                            {{color.text}}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="event-desc">{{ $t('generic.event_description')}}:</label>
                                    <textarea v-model="eventDesc" class="form-control" id="event-desc"></textarea>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="cancel">{{ $t('generic.cancel')}}</button>
                            <button type="button" class="btn btn-primary" @click="saveEvent">{{ $t('generic.add_event')}}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop in"></div>
        </div>
    </transition>
</template>

<script>
    import {EVENT_ADDED, SHOW_ADD_EVENT_FORM, CANCEL_ADD_EVENT_FORM} from '../actions';

    export default {
        data () {
           return {
               eventTitle: "",
               eventColor: "",
               eventDesc: "",
               colors: [
                  { text: this.$t('generic.color_grey'), value: 'panel-default' },
                  { text: this.$t('generic.color_blue'), value: 'panel-primary' },
                  { text: this.$t('generic.color_lightblue'), value: 'panel-info' },
                  { text: this.$t('generic.color_green'), value: 'panel-success' },
                  { text: this.$t('generic.color_orange'), value: 'panel-warning' },
                  { text: this.$t('generic.color_red'), value: 'panel-danger' },
               ]
           };
        },
        props: {
            day: {
                type: Object,
            },
            show: {
                type: Boolean,
                default: false
            },
        },
        methods: {
            saveEvent () {
                this.$root.$emit(EVENT_ADDED, {
                    title: this.eventTitle,
                    color: this.eventColor,
                    description: this.eventDesc,
                    date: this.day.date._d
                });
                
                this.eventTitle = "";    
                this.eventDesc = "";
                this.$emit(SHOW_ADD_EVENT_FORM, false);
            },
            cancel () {
                this.eventTitle = "";
                this.eventDesc = "";
                this.$emit(CANCEL_ADD_EVENT_FORM);
                this.$emit(SHOW_ADD_EVENT_FORM, false)
            },
            clickBackdrop () {
                this.cancel();
            }
        },
        watch: {
            show (value) {
                if (value) {
                    document.body.className += ' modal-open';
                }
            }
        },
        created () {
            if (this.show) {
                document.body.className += ' modal-open';
            }
        },
        beforeDestroy () {
            document.body.className = document.body.className.replace(/\s?modal-open/, '');
        },
    };
</script>

<style scoped>
    .modal {
        display: block;
    }
    .modal-enter-active, .modal-leave-active {
        transition: opacity .2s;
    }
    .modal-enter, .modal-leave-to {
        opacity: 0;
    }
    .modal-backdrop {
        opacity: 0.3;
    }
</style>