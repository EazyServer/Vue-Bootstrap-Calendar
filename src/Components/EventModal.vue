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
                                        <span v-if="$i18n">{{ $t('generic.event_title') }}</span>:
                                        <span v-else>Event Title</span>:
                                    </label>
                                    <input type="text" class="form-control" id="event-title" v-model="eventTitle"/>
                                </div>

                                <div class="form-group">
                                    <label for="event-color">
                                        <span v-if="$i18n">{{ $t('generic.event_color') }}</span>:
                                        <span v-else>Event Color</span>:
                                    </label>
                                    <select v-model="eventColor" class="form-control" id="event-color">
                                        <option v-for="color in colors" v-bind:value="color.value">
                                            {{ color.text }}
                                        </option>
                                    </select>
                                </div>
                            </form>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="cancel">{{cancelText}}</button>
                            <button type="button" class="btn btn-primary" @click="ok">{{confirmText}}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-backdrop in"></div>
        </div>
    </transition>
</template>

<script>
    import {EVENT_ADDED} from '../actions';

    export default {
        
       props: {
           day: {
               type: Object,
           },
           show: {
               type: Boolean,
               default: false
           },
           confirmText: {
               type: String,
               default: 'Add Event'
           },
           cancelText: {
               type: String,
               default: 'Cancel'
           },
       },
       data () {
           return {
               eventTitle: "",
               eventColor: "",
               colors: [
                  { text: 'Blue', value: 'card-primary card-inverse' },
                  { text: 'Green', value: 'card-success card-inverse' },
                  { text: 'Light Blue', value: 'card-info card-inverse' },
                  { text: 'Orange', value: 'card-warning card-inverse' },
                  { text: 'Red', value: 'card-danger card-inverse' },
               ]
           };
       },
       created () {
           if (this.show) {
               document.body.className += ' modal-open';
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
           ok () {
               this.$root.$emit(EVENT_ADDED, {
                   title: this.eventTitle,
                   color: this.eventColor,
                   date: this.day.date._d
               });
               
               this.eventTitle = "";           
               this.$emit('update:show', false);
           },
           cancel () {
               this.eventTitle = "";
               this.$emit('cancel');
               this.$emit('update:show', false)
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
        transition: opacity .2s
    }
    .modal-enter, .modal-leave-to {
        opacity: 0
    }
    .modal-backdrop {
        opacity: 0;
    }
</style>