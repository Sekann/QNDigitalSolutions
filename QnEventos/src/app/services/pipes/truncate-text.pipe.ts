import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncateText',
  standalone: true
})
export class TruncateTextPipe implements PipeTransform {

  transform(value:string, wordLimit: number =80): string {
    if(!value){
      return "";
    } else {
      const words = value.split('');
      if (words.length > wordLimit) {
        const truncate = words.slice(0,wordLimit).join('');
        return truncate+" ...";
      } else {
        return value;
      }
    }

  }

}
