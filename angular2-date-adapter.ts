import {MatDateFormats, NativeDateAdapter} from "@angular/material";

export const ISO8601_DATE_FORMATS = {
  parse: {
    dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
    dateInput: 'ISO8601',
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
  }
};

export const DDMMYYYYY_DATE_FORMATS = {
  parse: {
    dateInput: {month: 'short', year: 'numeric', day: 'numeric'}
  },
  display: {
    dateInput: 'DDMMYYYY',
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'},
  }
};

export class Angular2DateAdapter extends NativeDateAdapter{
  format(date: Date, displayFormat: Object): string {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    switch (displayFormat){
      case "DDMMYYYY":
        return Angular2DateAdapter._to2digit(day) + '/' + Angular2DateAdapter._to2digit(month) + '/' + year;
      case "ISO8601":
        return Angular2DateAdapter._to2digit(day) + '/' + Angular2DateAdapter._to2digit(month) + '/' + year;
      default:
        return date.toDateString();
    }
  }

  private static _to2digit(n: number) {
    return ('0' + n).slice(-2);
  }
}
