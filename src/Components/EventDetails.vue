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
                            <h4 class="modal-title">{{event.title}}</h4>
                        </div>

                        <div class="modal-body">
                            <p>{{event.description}}</p>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" @click="cancel">
                                <span v-if="$i18n">{{ $t('generic.cancel') }}</span>
                                <span v-else>Cancel</span>
                            </button>
                            <button type="button" class="btn btn-warning" @click="deleteEvent" v-if="canDeleteEvent">
                                <span v-if="$i18n">{{ $t('generic.delete_event') }}</span>
                                <span v-else>Delete Event</span>
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
    import {EVENT_DELETED, CANCEL_DETAILS_EVENT_MODAL, SHOW_DETAILS_EVENT_MODAL} from '../actions';

    export default {
       props: {
           show: {
               type: Boolean,
               default: false
           },
           event: {
               type: Object,
               required: true,
           },
           canDeleteEvent: {
               type: Boolean,
           }
       },

       created () {
           if (this.show) 
               document.body.className += ' modal-open';
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
            deleteEvent () {
                this.$emit(EVENT_DELETED, this.event);
                this.closeModal();
            },

            cancel () {
                this.closeModal();
            },

            clickBackdrop () {
                this.cancel();
            },

            closeModal() {
                 this.$emit(SHOW_DETAILS_EVENT_MODAL, false)
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
        opacity: 0.3;
    }
</style>