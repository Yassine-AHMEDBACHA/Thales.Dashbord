import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { MonitoringComponent } from './monitoring/monitoring.component';
import { ExportComponent } from './export/export.component';
import { StatisticComponent } from './statistic/statistic.component';
import { AuthentificationService } from './authentification.service';
import { HostService } from './monitoring/host.service';
import {StatisticService} from './statistic/statistic.service'
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MonitoringComponent,
    ExportComponent,
    StatisticComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule, 
    HttpClientModule
  ],
  providers: [AuthentificationService, HostService, StatisticService],
  bootstrap: [AppComponent]
})
export class AppModule { }
