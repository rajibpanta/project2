import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartscreenPage } from './startscreen.page';

describe('StartscreenPage', () => {
  let component: StartscreenPage;
  let fixture: ComponentFixture<StartscreenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartscreenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartscreenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
