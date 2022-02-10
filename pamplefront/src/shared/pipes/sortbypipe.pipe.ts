import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortbypipe'
})
export class SortbypipePipe implements PipeTransform {

  regexName: RegExp = /[A-Za-z]+/i;
  regexFamilyname: RegExp = /\s[A-Za-z]+/i;

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

      // Pipe for sorting intern list
      case "increasingName":
        return items.sort((a,b) => {
          let nameA = a.name.match(this.regexName)[0];
          let nameB = b.name.match(this.regexName)[0];
          return nameA.localeCompare(nameB); 
        });  
      case "decreasingName":
        return items.sort((a,b) => {
          let nameA = a.name.match(this.regexName)[0];
          let nameB = b.name.match(this.regexName)[0];
          return nameB.localeCompare(nameA); 
        });
      case "increasingFamilyName":
        return items.sort((a,b) => {
          let nameA = a.name.match(this.regexFamilyname)[0];
          let nameB = b.name.match(this.regexFamilyname)[0];
          console.log(nameA + "\n" + nameB);
          return nameA.localeCompare(nameB); 
        });  
      case "decreasingFamilyName":
        return items.sort((a,b) => {
          let nameA = a.name.match(this.regexFamilyname)[0];
          let nameB = b.name.match(this.regexFamilyname)[0];
          return nameB.localeCompare(nameA); 
        });
      case "increasingCompany":
        return items.sort((a,b) => {
          return a.societe.localeCompare(b.societe); 
        });  
      case "decreasingCompany":
        return items.sort((a,b) => {
          return b.societe.localeCompare(a.societe); 
        });
      
      // Pipe for sorting admin QCM list
      case "increasingAuthor":
        return items.sort((a,b) => {
          let nameA = a.author.match(this.regexFamilyname)[0];
          let nameB = b.author.match(this.regexFamilyname)[0];
          return nameA.localeCompare(nameB); 
        });  
      case "decreasingAuthor":
        return items.sort((a,b) => {
          let nameA = a.author.match(this.regexFamilyname)[0];
          let nameB = b.author.match(this.regexFamilyname)[0];
          return nameB.localeCompare(nameA); 
        });
      case "increasingNumberOfQuestion":
        return items.sort((a,b) => {
          return a.qcmQuestion.length - b.qcmQuestion.length; 
        });
      case "decreasingNumberOfQuestion":
        return items.sort((a,b) => {
          return b.qcmQuestion.length - a.qcmQuestion.length; 
        });
      case "increasingTitle":
        return items.sort((a,b) => {
          return a.name.localeCompare(b.name);  
        });  
      case "decreasingTitle":
        return items.sort((a,b) => {
          return b.name.localeCompare(a.name); 
        });
    } 
  }
}
