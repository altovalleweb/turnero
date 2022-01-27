import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment'
moment.locale('es');

@Pipe({
  name: 'fecha'
})
export class FechaPipe implements PipeTransform {

  transform(value: Date | string | null): string {

    if(value){
      return moment(value).format("dddd D [de] MMMM [de] YYYY");
    }
     return ""
  }

}
