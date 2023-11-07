import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, TooltipItem } from 'chart.js';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  salesData: any;
  salesOptions: any;
  balanceData: any;
  balanceOptions: any;
  productData: any;
  productOptions: any;
  productPlugin: any = ChartDataLabels;
  pieChart?: Chart;
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    this.salesData = {
      labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      datasets: [
        {
          label: 'First Dataset',
          data: [10, 25, 35, 25, 55, 45, 70],
          fill: true,
          tension: 0.4,
          borderColor: '#4f6ce1',
          backgroundColor: 'rgba(234, 235, 244, 0.3)',
          pointRadius: 1,
          pointHoverRadius: 10
        },
        {
          label: 'Second Dataset',
          data: [6, 22, 30, 20, 50, 40, 60],
          borderColor: '#eaebf4',
          tension: 0.4,
          pointStyle: false
        }
      ]
    };

    this.salesOptions = {
      maintainAspectRatio: false,
      aspectRatio: 0.7,
      plugins: {
        title: {
          display: false,
        },
        tooltip: {
          backgroundColor: 'white',
          bodyFont: {
            size: 35,
            weight: 500,
          },
          footerFont: {
            size: 25,
            weight: 500,
          },
          yAlign: 'top',
          xAlign: 'center',
          borderColor: 'grey',
          borderWidth: 2,
          bodyColor: '#4f6ce1',
          footerColor: '#9e9e9e',
          footerAlign: 'center',
          padding: {
            top: 0,
            right: 70,
            bottom: 10,
            left: 70
          },
          displayColors: false,
          callbacks: {
            label: function (tooltip: TooltipItem<"line">) {
              return "$" + tooltip.formattedValue;
            },
            footer: function tooltipCallback(tooltipItem: TooltipItem<"line">[]) {
              return tooltipItem[0].label;
            }
          },
        },
        legend: {
          display: false,
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColorSecondary,
            font: {
              size: 18,
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary,
            font: {
              size: 18,
              weight: 500
            },
            callback: function (value: string, index: any, ticks: any) {
              return '$' + value;
            }
          },
          grid: {
            color: surfaceBorder
          }
        }
      }
    };

    this.balanceData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          type: 'bar',
          label: 'Income',
          backgroundColor: '#4f6ce1',
          data: [40, 100, 50, 18, 12, 86, 24, 6, 55, 120, 64, 34],
          barThickness: 10,
          borderRadius: 5,
          borderSkipped: false,
        },
        {
          type: 'bar',
          label: 'Borrow',
          backgroundColor: '#c0cdff',
          data: [60, 140, 90, 34, 20, 115, 42, 10, 70, 146, 98, 50],
          barThickness: 10,
          borderRadius: 5,
        },
      ],
    };

    this.balanceOptions = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.7,
      layout: {
        padding: {
          bottom: 0
        }
      },
      plugins: {
        tooltips: {
          mode: 'index',
          intersect: false
        },
        legend: {
          labels: {
            color: textColor,
            boxWidth: 10,
            padding: 20,
          },
          align: 'end',
        }
      },
      scales: {
        x: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
            font: {
              size: 15,
              weight: 600
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          stacked: true,
          ticks: {
            color: textColorSecondary,
            stepSize: 50,
            font: {
              size: 17,
              weight: 600
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

    this.productData = {
      labels: ['Men', 'Electronics', 'Women'],
      datasets: [
        {
          data: [30, 50, 100, 150],
          backgroundColor: ['#3f5bd1', '#516ee3', '#90a5fc'],
          hoverBackgroundColor: ['#556dce', '#748be7', '#b7c5fb']
        }
      ]
    };


    this.productOptions = {
      cutout: '70%',
      maintainAspectRatio: false,
      aspectRatio: 0.7,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: textColor,
            usePointStyle: true,
            boxWidth: 6,
            padding: 30
          },
        },
        doughnutlabel: {
          label: 'Total',
          fontsize: 20,
          color: 'white'
        }
      },
    };

    this.productPlugin = [{
      id: 'pieChart',
      beforeDraw: function (chart: any) {
        var width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        ctx.font = "2.5em sans-serif";
        ctx.textBaseline = "middle";
        ctx.textAlign = "left";
        var text = "75%",
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }

    }]

    let htmlRef = this.elementRef.nativeElement.querySelector(`#pieChart`);
    this.pieChart = new Chart(htmlRef, {
      type: "doughnut",
      data: {
        labels: ['Men', 'Electronics', 'Women'],
        datasets: [
          {
            data: [50, 100, 150],
            backgroundColor: ['#3f5bd1', '#516ee3', '#90a5fc'],
            hoverBackgroundColor: ['#556dce', '#748be7', '#b7c5fb'],
            datalabels: {
              display: false
            }
          },
        ],
      },
      options: {
        cutout: '70%',
        responsive: true,
        aspectRatio: 0.7,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              padding: 30,
              usePointStyle: true,
              pointStyle: "circle",
              font: {
                size: 17,
                weight: 'bold'
              },
            },
          },
          title: {
            display: false,
          },
          tooltip: {
            boxPadding: 10,
            padding: 10,
            callbacks: {
              label: function (tooltip: TooltipItem<"doughnut">) {
                return tooltip.label + ": " + tooltip.formattedValue + "%";
              },
            },
          },
        },
      },
      plugins: [
        {
          id: "textInside",
          beforeDraw: function (chart) {
            let width = chart.chartArea.width;
            let height = chart.chartArea.height;
            let ctx = chart.ctx;

            ctx.restore();
            ctx.font = "3em sans-serif ";
            ctx.textBaseline = "middle";
            ctx.textAlign = "left";

            let text = '50%'
            let textX = Math.round((width - ctx.measureText(text).width) / 2);
            let textY = height / 2.2;
            ctx.fillStyle = 'black'
            ctx.fillText(text, textX, textY);

            ctx.font = "1.5em sans-serif";
            let text2 = "Popular Items";
            let text2X = Math.round((width - ctx.measureText(text2).width) / 2);
            let text2Y = height / 2.2 + 50;
            ctx.fillStyle = 'rgba(158, 158, 158, 1)'
            ctx.fillText(text2, text2X, text2Y);
            ctx.save();
          },
        },
      ],
    }) as Chart;
  }

}
