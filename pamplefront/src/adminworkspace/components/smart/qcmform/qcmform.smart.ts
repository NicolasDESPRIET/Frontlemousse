import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-qcmform',
  templateUrl: './qcmform.smart.html',
  styleUrls: ['./qcmform.smart.scss']
})
export class QcmformSmart implements OnInit {

  @Input() cardId: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
