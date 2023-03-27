import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html',
  styleUrls: ['./error-message.component.css']
})
export class ErrorMessageComponent implements OnInit {
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
