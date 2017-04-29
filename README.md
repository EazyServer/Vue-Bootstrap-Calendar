# Vue Bootstrap Calendar

> Uses the magical power of VueJS v2 and beauty of Twitter Bootstraps to create a powerful Responsive Calendar App. See the [Demo site](https://eazyserver.github.io/Vue-Bootstrap-Calendar/).

The calender only uses bootstrap ``CSS``, NO ``bootstrap.js`` or ``jquery.js`` is needed for this project. Its purely Vue2 implementation.

Vue-Bootsrtap-Calendar is locale/language ready, but only English and Arabic is implemented for now. Maybe you can help?

## How to get vue-bootstrap-calendar #

You can install via npm
   
       $ npm install -S vue-bootstrap-calendar

OR you can include the compiled file found in "dist/vbc.js" directly into your project like so:

```html
<div class="container">

    <div class="page-header">
        <h1>Vue Bootstrap Calendar</h1>
        <p class="lead"></p>
    </div>

    <div id="app">
        <Calendar :first-day="0"></Calendar>
    </div>
</div>
<script src="dist/vbc.js"></script>
<script>
    var app = new Vue( {
        el        : '#app',
        i18n,
        mounted() {
            let loadingIndicator = document.getElementById( "loading" );
            if(loadingIndicator != null){
                loadingIndicator.style.display = "none";
            }
        }
    } );
</script>
```

## How to use vue-bootstrap-calendar #
Simply include ```<Calendar :first-day="x"></Calendar>``` in your vue app. ``x`` is an integer for the start of the week, which can be one of the following values ``0,1,2,3,4,5,6``, where 0 for Sunday, 1 for Monday and so on...


## Copyright and License

[Vue-Bootstrap-Calendar](https://github.com/EazyServer/Vue-Bootstrap-Calendar) was written by [Yarob Al-Taay](https://twitter.com/TheEpicVoyage) and is released under the 
[MIT License](LICENSE.md).

Copyright (c) 2017 Yarob Al-Taay