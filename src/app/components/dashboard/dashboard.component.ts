import { Component, OnInit } from '@angular/core';
import { AnalysisService } from 'src/app/services/analysis/analysis.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  analysisData: { no_of_invoices: number };

  constructor(private analysisSvc: AnalysisService,) { }

  ngOnInit(): void {
    this.getAnalysisData()
  }

  getAnalysisData() {
  }

}
