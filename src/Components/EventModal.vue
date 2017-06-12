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
                            <h4 class="modal-title">
                                <span v-if="$i18n">{{ $t('generic.add_event') }}</span>
                                <span v-else>Add Event</span>
                            </h4>
                        </div>

                        <div class="modal-body">
                            <form>
                                <div class="form-group">
                                    <label for="event-title">
                                        <span v-if="$i18n">{{ $t('generic.event_title') }}:</span>
                                        <span v-else>Event Title:</span>
                                    </label>
                                    <input type="text" class="form-control" id="event-title" v-model="eventTitle"/>
                                </div>

                                <div class="form-group">
                                    <label for="event-color">
                                        <span v-if="$i18n">{{ $t('generic.event_color') }}:</span>
                                        <span v-else>Event Color:</span>
                                    </label>
                                    <select v-model="eventColor" class="form-control" id="event-color">
                                        <option v-for="color in colors" v-bind:value="color.value">
                                            {{ color.text }}
                                        </option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="event-desc">
                                        <span v-if="$i18n">{{ $t('generic.event_description')}}:</span>
                                        <span v-else>Event Description:</span>
                                    </label>
                                    <textarea v-model="eventDesc" class="form-control" id="event-desc"></textarea>
                                </div>
                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="cancel">
                                <span v-if="$i18n">{{ $t('generic.cancel')}}</span>
                                <span v-else>Cancel</span>
                            </button>
                            <button type="button" class="btn btn-primary" @click="saveEvent">
                                <span v-if="$i18n">{{ $t('generic.add_event')}}</span>
                                <span v-else>Add Event</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop in"></div>
        </div>
    </transition>
</template>

<script>
    import {EVENT_ADDED, SHOW_ADD_EVENT_FORM} from '../actions';

    export default {
       props: {
           day: {
               type: Object,
           },
           show: {
               type: Boolean,
               default: false
           },
       },
       
       data () {
           return {
               eventTitle: "",
               eventColor: "",
               eventDesc: "",
               colors: []
           };
       },

       created () {
            if (this.show) 
                document.body.className += ' modal-open';

            if(this.$i18n) {
                this.colors.push(
                    { text: this.$t('generic.color_grey'), value: '' },
                    { text: this.$t('generic.color_blue'), value: 'card-primary card-inverse' },
                    { text: this.$t('generic.color_lightblue'), value: 'card-info card-inverse' },
                    { text: this.$t('generic.color_green'), value: 'card-success card-inverse' },
                    { text: this.$t('generic.color_orange'), value: 'card-warning card-inverse' },
                    { text: this.$t('generic.color_red'), value: 'card-danger card-inverse' },         
                )
            }
            else {
                this.colors.push(
                    { text: 'Grey', value: '' },
                    { text: 'Blue', value: 'card-primary card-inverse' },
                    { text: 'Lightblue', value: 'card-info card-inverse' },
                    { text: 'Green', value: 'card-success card-inverse' },
                    { text: 'Orange', value: 'card-warning card-inverse' },
                    { text: 'Red', value: 'card-danger card-inverse' },         
                )
            }
       },

       beforeDestroy () {
           document.body.className = document.body.className.replace(/\s?modal-open/, '');
       },

       watch: {
           show (value) {
               if (value) {
                   document.body.className += ' modal-open';
               }
           }
       },

       methods: {
           saveEvent () {
               this.$emit(EVENT_ADDED, {
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
               this.$emit(SHOW_ADD_EVENT_FORM, false)
           },

           clickBackdrop () {
               this.cancel();
           }
       }
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