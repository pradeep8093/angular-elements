import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChartsComponent implements OnInit {
  @Input('chartType') public chartType;
  @Input('chartLegend') public chartLegend;

  public chartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  
  public chartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public chartData = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.chartType);
    console.log(this.chartLegend);
  }

}
