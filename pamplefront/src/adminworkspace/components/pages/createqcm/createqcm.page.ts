import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createqcm',
  templateUrl: './createqcm.page.html',
  styleUrls: ['./createqcm.page.scss']
})
export class CreateqcmPage implements OnInit {
  
  cardId: number = 0;
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void { 
    this.route.snapshot.params["id"] 
    ? this.cardId = this.route.snapshot.params["id"]
    : this.cardId = 0;
    this.cardId ? console.log(this.cardId) : console.log("new page");
  }

}
