import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'internqcmdurationpipe'
})
export class InternqcmdurationpipePipe implements PipeTransform {

  transform(duration: number): any {
    
    

    let minutes: number = Math.trunc(duration/60);
    let hours: number = 0;
    let seconds: number = duration - (minutes*60);
    let returnedTime: string = "";
    
    if (minutes >= 60) {
      hours = Math.trunc(minutes/60);
      minutes = minutes - (hours*60);
    }

    

    if (hours > 0) {
      returnedTime = returnedTime + hours + " h ";
    } 

    if (minutes > 0) {
      if(minutes < 10){
        returnedTime = returnedTime + "0" + minutes + " min ";
      }else
      {
        returnedTime = returnedTime + minutes + " min ";
      }

      
    }

    if (seconds > 0) {
      if (seconds < 10){
        returnedTime = returnedTime + "0" + seconds + " s ";
      }else{
        returnedTime = returnedTime + seconds + " s ";
      }
    }
    

    return returnedTime;

   


    
  }

}
