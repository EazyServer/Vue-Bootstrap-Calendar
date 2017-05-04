# Vue Bootstrap Calendar

> Uses the magical power of VueJS v2 and beauty of Twitter Bootstraps to create a powerful Responsive Calendar App. See the [Demo site](https://eazyserver.github.io/Vue-Bootstrap-Calendar/).

The calender only uses bootstrap ``CSS``, NO ``bootstrap.js`` or ``jquery.js`` is needed for this project. Its purely Vue2 implementation.

This package is locale/language ready, with only Arabic and English implemented for now. Can you help adding more languages?

## Install vue-bootstrap-calendar #

You can install via npm
   
    $ npm install -S vue-bootstrap-calendar


* Please note, this package depends on [vue-i18n](https://github.com/kazupon/vue-i18n) to run the translation engine, and it will break with out it! 

Then you can import ``Calendar`` from the package like so:
```javascript
import {Calendar} from 'vue-bootstrap-calendar';
// the main Calender App found here


import {messages} from 'vue-bootstrap-calendar';
//to include Calendar locale(s) from this package, or you can use your own one!
```

You can also include the compiled file found in "dist/vbc-browser.js" directly into your project, see example below.

```html
<div class="container">
    ...
    <div id="app">
        <Calendar
            :first-day="1"
            :all-events="events"
        ></Calendar>
    </div>
</div>
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-i18n/dist/vue-i18n.js"></script>
<script src="dist/vbc-browser.js"></script>
<script>
    window.i18n = new VueI18n({
        locale : 'en',
        messages
    });

    var app = new Vue({
    		el        : '#app',
    		data: {
    			events: []
    		},
    		i18n,
    		components: {
                Calendar
            },
    		mounted() {
    			let loadingIndicator = document.getElementById( "loading" );
    
    			if(loadingIndicator != null){
    				loadingIndicator.style.display = "none";
    			}
    
    			this.events = [ // you can make ajax call here
    				{
    					id:1,
    					title:'Event 1',
    					color: 'panel-danger',
    					date: new Date()
    				},
    				...
    			];
    		}
    	});
</script>
```

## How to use vue-bootstrap-calendar #

Include ```Calendar``` in you Vue App ```components``` then use ```<Calendar :first-day="x" :all-events="events"></Calendar>``` in your code. ``x`` is an integer for the start of the week, which can be one of the following values ``0,1,2,3,4,5,6``, where 0 for Sunday, 1 for Monday and so on...
Events array can be passed on via ``all-events`` binding.


## Copyright and License

[Vue-Bootstrap-Calendar](https://github.com/EazyServer/Vue-Bootstrap-Calendar) was written by [Yarob Al-Taay](https://twitter.com/TheEpicVoyage) and is released under the 
[MIT License](LICENSE.md).

Copyright (c) 2017 Yarob Al-Taay