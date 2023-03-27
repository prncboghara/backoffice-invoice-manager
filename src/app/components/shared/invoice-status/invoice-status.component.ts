import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-status',
  templateUrl: './invoice-status.component.html',
  styleUrls: ['./invoice-status.component.css']
})
export class InvoiceStatusComponent implements OnInit {
  @Input() status:string;
  constructor() { }

  ngOnInit(): void {
  }

}
