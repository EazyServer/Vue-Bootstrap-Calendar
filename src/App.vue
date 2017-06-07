<template>
    <div id="app">
        <calendar
                :first-day="1"
                :all-events="events"
                @eventAdded="eventAdded"
        ></calendar>
    </div>
</template>

<script>
    import {Calendar} from './main';
    export default {
        name: 'app',
        data() {
            return {
                events: []
            }
        },
        components: {
            Calendar
        },
        methods: {
            eventAdded(eventData) {
                this.events.push(eventData);
            },
        },
        mounted() {
            let me = this;
            setTimeout(function () {
                me.events = [ // you can make ajax call here
                    {
                        id:1,
                        title:'Event 1',
                        color: 'panel-danger',
                        description: 'Some fancy details for the event',
                        date: new Date()
                    },
                    {
                        id:2,
                        title:'Event blaa on same day!',
                        color: 'panel-default',
                        description: 'Please bring some donouts',
                        date: new Date()
                    },
                    {
                        id:3,
                        title:'Event 2',
                        color: 'panel-primary',
                        description: 'Don\'t forget about this!',
                        date: new Date(new Date().setHours(new Date().getHours() + 2*24)) // add 2 days
                    },
                    {
                        id:4,
                        title:'Event 3',
                        color: 'panel-success',
                        description: 'Feel free to bring anyone with you',
                        date: new Date(new Date().setHours(new Date().getHours() + 5*24)) // add 5 days
                    },
                    {
                        id:5,
                        title:'Event 4',
                        color: 'panel-warning',
                        description: 'Laptop required',
                        date: new Date(new Date().setHours(new Date().getHours() + 14*24)) // add 2 weeks
                    },
                    {
                        id:6,
                        title:'Event 5',
                        color: 'panel-success',
                        date: new Date(new Date().setHours(new Date().getHours() + 30*24)) // add 1 month
                    },

                ];
            }, 1000);
        }
    }
</script>