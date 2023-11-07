import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/');
  }

  getTopCardData(): Observable<any> {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/').pipe(map((res: any) => res.top_cards));
  }

  getRecentOrders(): Observable<any> {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/').pipe(map((res: any) => res.recent_orders));
  }

  getNewUserData(): Observable<any> {
    return this.http.get('https://1.api.fy23ey05.careers.ifelsecloud.com/').pipe(map((res: any) => res.new_users));
  }

}
