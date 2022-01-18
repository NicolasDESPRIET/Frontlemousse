import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbypipe'
})
export class SortbypipePipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    
    if (!items || !filter){return items}
    switch(filter){
      case "":
        return items;
      case "increasingMark":
        return items.filter(item => item.done === true).sort((a,b) => {
          return a.mark - b.mark;
        });
      case "decreasingMark":
        return items.filter(item => item.done === true).sort((a,b) => {
          return b.mark - a.mark;
        });
      case "increasingLastExecutionDate":
        return items.filter(item => item.done === true).sort((a,b) => {
          return Date.parse(a.date) - Date.parse(b.date);
        });
      case "decreasingLastExecutionDate":
        return items.filter(item => item.done === true).sort((a,b) => {
          return Date.parse(b.date) - Date.parse(a.date);
        });
      case "increasingDuration":
        return items.filter(item => item.done === true).sort((a,b) => {
          return a.duration - b.duration;
        });  
      case "decreasingDuration":
        return items.filter(item => item.done === true).sort((a,b) => {
          return b.duration - a.duration;
        });  
    }
    
  }
}
