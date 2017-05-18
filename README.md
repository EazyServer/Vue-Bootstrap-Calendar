# Vue Bootstrap Calendar

> Uses the magical power of VueJS v2 and beauty of Twitter Bootstraps to create a powerful Responsive Calendar App. See the [Demo site](https://eazyserver.github.io/Vue-Bootstrap-Calendar/).


![Demo Vue Bootstrap Calendar](https://raw.githubusercontent.com/EazyServer/Vue-Bootstrap-Calendar/master/assets/vue-bootstrap-calendar.png)


The calender only uses bootstrap ``CSS``, NO ``bootstrap.js`` or ``jquery.js`` is needed for this project. Its purely Vue2 implementation.

This package is locale/language ready, with Arabic and English implemented so far. May be you can help adding more languages?

## Install vue-bootstrap-calendar #

You can install via npm
   
    $ npm install -S vue-bootstrap-calendar


* Please note, this package depends on [vue-i18n](https://github.com/kazupon/vue-i18n) to run the translation engine, and it will break with out it! I am trying to figure out a way to not break the package when i18n is not defined! Feel free to advise me...

Then you can import ``Calendar`` from the package like so:
```javascript
import {Calendar} from 'vue-bootstrap-calendar';
// the main Calender App found here


import {messages} from 'vue-bootstrap-calendar';
//to include Calendar locale(s) from this package, or you can use your own one!
```

## How to use vue-bootstrap-calendar #

Include ```Calendar``` in you Vue App ```components``` then use ```<Calendar :first-day="x" :all-events="events"></Calendar>``` in your code. ``x`` is an integer for the start of the week, which can be one of the following values ``0,1,2,3,4,5,6``, where 0 for Sunday, 1 for Monday and so on...
Events array can be passed on via ``all-events`` binding.

####Example:

In your ``App.vue``:

```vue
<template>
    <div id="app">
        <calendar
                :first-day="1"
                :all-events="events"
        ></calendar>
    </div>
</template>

<script>
    import {Calendar} from 'vue-bootstrap-calendar';
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
        mounted() {
            let me = this;
            setTimeout(function () {
                me.events = [ // you can make ajax call here
                    {
                        id:1,
                        title:'Event 1',
                        color: 'panel-danger',
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

import {messages} from 'vue-bootstrap-calendar'; // you can include your own translation here if you want!

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

[Vue-Bootstrap-Calendar](https://github.com/EazyServer/Vue-Bootstrap-Calendar) was written by [Yarob Al-Taay](https://twitter.com/TheEpicVoyage) and is released under the 
[MIT License](LICENSE.md).

Copyright (c) 2017 Yarob Al-Taay