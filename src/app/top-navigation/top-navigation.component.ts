import { Component } from '@angular/core';

@Component({
  selector: 'app-top-navigation',
  templateUrl: './top-navigation.component.html',
  styleUrls: ['./top-navigation.component.scss']
})
export class TopNavigationComponent {

  languages: any[] = [];

  ngOnInit() {
    this.languages = [
      { name: 'ENG', code: 'ENG' },
      { name: 'FRE', code: 'FRE' },
      { name: 'SPA', code: 'SPA' },
    ];
  }

}
