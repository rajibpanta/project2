import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyClassReportPage } from './daily-class-report.page';

describe('DailyClassReportPage', () => {
  let component: DailyClassReportPage;
  let fixture: ComponentFixture<DailyClassReportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyClassReportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyClassReportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
