import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { StatisticComponent } from './statistic/statistic.component'
import { ExportComponent } from './export/export.component'
import { MonitoringComponent } from './monitoring/monitoring.component'

const routes: Routes = [
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: "login", component:LoginComponent},
  {path: "monitoring", component:MonitoringComponent},
  {path: "statistic", component:StatisticComponent},
  {path: "export", component:ExportComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
