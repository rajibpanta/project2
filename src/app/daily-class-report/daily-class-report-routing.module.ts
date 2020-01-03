import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyClassReportPage } from './daily-class-report.page';

const routes: Routes = [
  {
    path: '',
    component: DailyClassReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyClassReportPageRoutingModule {}
