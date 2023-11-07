import { Component } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { TopCardData } from '../classes/modal-file';

@Component({
  selector: 'app-top-card',
  templateUrl: './top-card.component.html',
  styleUrls: ['./top-card.component.scss']
})
export class TopCardComponent {
  topCardData!: TopCardData[];
  iconData!: any[];

  constructor(private service: DashboardService) {

  }
  ngOnInit() {
    this.getTopCardData();
    this.iconData = [
      { name: 'fa-solid fa-music text-7xl' },
      { name: 'fa-solid fa-chart-pie text-7xl' },
      { name: 'fa-solid fa-download text-7xl' },
      { name: 'fa-solid fa-refresh text-7xl' },
    ]
  }

  getTopCardData() {
    this.service.getTopCardData().subscribe((data) => {
      this.topCardData = data;
    })
  }
  
}
