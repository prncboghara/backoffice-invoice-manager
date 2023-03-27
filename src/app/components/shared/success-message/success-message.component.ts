import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.css']
})
export class SuccessMessageComponent implements OnInit {
  @Input() title: string
  @Input() description: string
  @Input() backButtonTitle: string
  @Output() back = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  goBack() {
    this.back.emit("test")
  }

}
