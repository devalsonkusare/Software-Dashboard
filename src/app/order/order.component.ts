import { Component } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { RecentOrders } from '../classes/modal-file';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {

  recentOrder!: RecentOrders[];
  userInfo: any;
  showProductDetails: boolean = false;

  constructor(private service: DashboardService) {

  }

  ngOnInit() {
    this.getRecentOrders()
  }

  getRecentOrders() {
    this.service.getRecentOrders().subscribe((data) => {
      this.recentOrder = data;
    })
  }
  openProductDetails(userId: any) {
    this.showProductDetails = true;
    if (userId) this.userInfo = this.recentOrder.filter(e => e.id == userId)[0];
  }

  getOrderStatus(orderStatus: any) {
    if (orderStatus == 'Paid') {
      return 'paid-status'
    }
    if (orderStatus == 'Failed') {
      return 'failed-status'

    }
    if (orderStatus == 'Pending') {
      return 'pending-status'

    }
    return null
  }

}
