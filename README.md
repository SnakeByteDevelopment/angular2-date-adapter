this class can be used to change the formatting of dates in angular2 or higher.
based on instructions found on stackoverflow.

source: https://stackoverflow.com/a/44566335/4088205

## installation

```bash
$ npm install git+https://github.com/SnakeByteDevelopment/angular2-date-adapter --save
```

add the following to your app.module.ts:

```
...
import {Angular2DateAdapter, DDMMYYYYY_DATE_FORMATS} from '@angular/date-adapter/date-adapter'
...

  providers: [
    {provide: DateAdapter, useClass: Angular2DateAdapter},
    {provide: MAT_DATE_FORMATS, useValue: DDMMYYYYY_DATE_FORMATS},
    ...
  ],
```


this class can be used to change the formatting of dates in angular2 or higher.

based on instructions found on stackoverflow 

source: https://stackoverflow.com/a/44566335/4088205
