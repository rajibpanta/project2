import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DailyclassreportPage } from './dailyclassreport.page';

describe('DailyclassreportPage', () => {
  let component: DailyclassreportPage;
  let fixture: ComponentFixture<DailyclassreportPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyclassreportPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DailyclassreportPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
