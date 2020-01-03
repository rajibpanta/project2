import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyClassReportPageRoutingModule } from './daily-class-report-routing.module';

import { DailyClassReportPage } from './daily-class-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyClassReportPageRoutingModule
  ],
  declarations: [DailyClassReportPage]
})
export class DailyClassReportPageModule {}
