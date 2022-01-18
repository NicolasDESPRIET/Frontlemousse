import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterbypipe',
  pure: false
})
export class FilterbypipePipe implements PipeTransform {

  transform(items: any[], filter: string): any {
    
    if (!items || !filter){return items}
    switch(filter){
      case "all":
        return items;
      case "done":
        return items.filter(item => item.done === true);
      case "todo":
        return items.filter(item => item.done === false);
    }
    
  }

}
