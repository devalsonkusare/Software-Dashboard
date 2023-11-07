import { Component, OnInit } from '@angular/core';
import * as chart from 'chart.js';
import * as chartdatalabels from 'chartjs-plugin-datalabels';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'software-dashboard';

  ngOnInit(): void {
  }

}
