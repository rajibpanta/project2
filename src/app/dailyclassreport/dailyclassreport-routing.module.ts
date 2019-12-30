import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DailyclassreportPage } from './dailyclassreport.page';

const routes: Routes = [
  {
    path: '',
    component: DailyclassreportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DailyclassreportPageRoutingModule {}
