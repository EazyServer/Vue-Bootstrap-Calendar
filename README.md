# Vue Bootstrap Calendar

> Uses the magical power of VueJS v2 and beauty of Twitter Bootstrap 4 to create a powerful responsive Calendar App. See the [Demo site](https://exclusiv3.github.io/Vue-Bootstrap-Calendar/).


This repository is based on [Yarob Al-Taay](https://twitter.com/TheEpicVoyage) [Vue-Bootstrap-Calendar](https://github.com/EazyServer/Vue-Bootstrap-Calendar), which uses Bootstrap 3.

This project aims to provide the Calendar for Bootstrap 4 and enhance it further.

![Demo Vue Bootstrap Calendar](https://raw.githubusercontent.com/ExCluSiv3/Vue-Bootstrap-Calendar/master/assets/vue-bootstrap-calendar.png)


This Calendar only depends on the Bootstrap 4 CSS. Using Bootstrap 4 JS or even jQuery is NOT required.
This implementation is fully based on VueJS 2.

This package is locale/language ready, with Arabic, English and German implemented so far.
Please feel free to contribute for any language.

* Please note, if you haven't got vue-i18n installed this package will default to English!

## Install vue-bootstrap4-calendar #

You can install via npm
   
    $ npm install -S vue-bootstrap4-calendar

Then you can import ``Calendar`` from the package like this:

```javascript
import {Calendar} from 'vue-bootstrap4-calendar';
import {messages} from 'vue-bootstrap4-calendar';
//to include Calendar locale(s) from this package, or you can use your own one!
```

## How to use vue-bootstrap-calendar 

Include ```Calendar``` in your Vue Apps ```components``` then use ```<Calendar :first-day="x" :all-events="events"></Calendar>``` in your code. ``x`` is an integer for the start of the week, which can be one of the following values ``0,1,2,3,4,5,6``, where 0 for Sunday, 1 for Monday and so on...
Events array can be passed on via ``all-events`` binding.

If you want to restrict access to the Calendar (currently includes adding and deleting Events), you may pass the Props ```canAddEvent``` and ```canDeleteEvent``` to the Calendar. Both Props default to ```true```, so it won't bother you if you don't need them.

### Props:
#### first-day
Type: `Number | String`<br>
Default: `0` (equals Sunday)<br>

This Prop describes the start of the Week, the value can be inbetween `0` and `6`, where `0` equals Sunday and `6` equals Saturday.

#### all-events
Type: `Array`
Default: `[]`

This Prop defines an Array of Objects which describe your Events.<br>
Every object needs the following attributes:<br>

`title` (Representation of the Event on Days)<br>
`description` (Description of the Event which is display when clicked on an Event)<br>
`color` (Color for the Event on Days)<br>
`date` (Date on which the Event should be displayed)

#### canAddEvent
Type: `Boolean`
Default: `true`

Can be used to restrict access to Calendar features.

#### canDeleteEvent
Type: `Boolean`
Default: `true`

Can be used to restrict access to Calendar features.

### Events
#### eventAdded
Called when an Event is added to the Calendar.<br>
The Callback gets the created Event as Parameter:

`eventAdded(event) { this.events.push(event); } `

#### eventDeleted
Called when an Event is deleted from the Calendar.<br>
The Callback gets the deleted Event as Parameter:

`eventDeleted(event) { this.events.splice(this.events.indexOf(event), 1); }`

### Example:

In your ``App.vue``:

```vue
<template>
    <div id="app">
        <calendar
                :first-day="1"
                :all-events="events"
                :canAddEvent="true"
                :canDeleteEvent="true"
                @eventAdded="eventAdded"
                @eventDeleted="eventDeleted"
        ></calendar>
    </div>
</template>

<script>
    import {Calendar} from 'vue-bootstrap4-calendar';
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
            eventAdded(event) {
                this.events.push(event);
            },
            eventDeleted(event) {
                this.events.splice(this.events.indexOf(event), 1);
            },
        },
        mounted() {
            let me = this;
            setTimeout(function () {
                me.events = [ // you can make ajax call here
                    {
                        id:1,
                        title:'Event 1',
                        description: 'Dummy Desc',
                        color: 'card-danger card-inverse',
                        date: new Date()
                    },
                    ...
                ];
            }, 1000);
        }
    }
</script>
```

Your ``main.js`` will be something like this:

```javascript
import Vue from 'vue'
import VueI18n from 'vue-i18n' //needed for calendar locale
import App from './App.vue'

Vue.use(VueI18n);

import {messages} from 'vue-bootstrap4-calendar'; // you can include your own translation here if you want!

window.i18n = new VueI18n({
    locale: 'en',
    messages
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    i18n,
    template: '<App/>',
    components: {App}
});
```

## Copyright and License

The Bootstrap 3 Version and base for this [Vue-Bootstrap-Calendar](https://github.com/EazyServer/Vue-Bootstrap-Calendar) was written by [Yarob Al-Taay](https://twitter.com/TheEpicVoyage) and is released under the [MIT License](LICENSE.md).

This Bootstrap 4 Version [Vue-Bootstrap-Calendar](https://github.com/ExCluSiv3/Vue-Bootstrap-Calendar) is written and maintained by [Max Eckel](https://twitter.com/max_eckel) and is also released under the [MIT License](LICENSE.md).
