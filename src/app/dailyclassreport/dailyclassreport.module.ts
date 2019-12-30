import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DailyclassreportPageRoutingModule } from './dailyclassreport-routing.module';

import { DailyclassreportPage } from './dailyclassreport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DailyclassreportPageRoutingModule
  ],
  declarations: [DailyclassreportPage]
})
export class DailyclassreportPageModule {}
