import { Component } from '@angular/core';
import { DashboardService } from '../service/dashboard.service';
import { NewUser } from '../classes/modal-file';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent {

  newUser!: NewUser[];
  userImg!: any[];

  constructor(private service: DashboardService) {
  }

  ngOnInit() {
    this.getNewUserData();

    // Picture is not retrievable via API. Hence fetching random images.
    this.userImg = [
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/amyelsner.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/asiyajavayant.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/onyamalimba.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/ionibowcher.png' },
      { src: 'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png' },
    ]
  }

  getNewUserData() {
    this.service.getNewUserData().subscribe((data) => {
      this.newUser = data;
    })
  }
  getActiveStatus(status: any) {
    if (status) {
      return 'active-badge'
    } else {
      return 'inactive-badge'
    }
  }

  getProgressClass(progress: any) {
    if (progress < 25 && progress > 1) {
      return 'red-progress'
    } else if (progress < 40 && progress > 25) {
      return 'grey-progress'
    } else if (progress < 60 && progress > 40) {
      return 'yellow-progress'
    } else if (progress < 80 && progress > 60) {
      return 'green-progress'
    } else {
      return 'purple-progress'
    }
  }


}
