import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { HttpClientModule } from '@angular/common/http';

// primeng
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { BadgeModule } from 'primeng/badge';
import { TopCardComponent } from './top-card/top-card.component';
import { OrderComponent } from './order/order.component';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { NewUserComponent } from './new-user/new-user.component';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LeftSidebarComponent,
    TopNavigationComponent,
    TopCardComponent,
    OrderComponent,
    NewUserComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    InputTextModule,
    DropdownModule,
    BadgeModule,
    TableModule,
    DialogModule,
    ProgressBarModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
