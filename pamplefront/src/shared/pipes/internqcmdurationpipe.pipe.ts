import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'internqcmdurationpipe'
})
export class InternqcmdurationpipePipe implements PipeTransform {

  transform(duration: number, filter: string): any {
    

    let minutes: number = Math.floor(duration/60);
    let hours: number = Math.floor(minutes/60);
    let returnedHours: string = "";
    let returnedMinutes: string = "";

    if(hours > 0 && hours < 10){
      returnedHours = "0" + hours + "h";
    } 
    if (hours > 0 && hours > 10){
      returnedHours = hours + "h";
    }
    
    if(minutes < 10){
      returnedMinutes = "0"  + minutes + "min";
    }else{
      returnedMinutes = minutes + "min";
    }

   


    
  }

}
