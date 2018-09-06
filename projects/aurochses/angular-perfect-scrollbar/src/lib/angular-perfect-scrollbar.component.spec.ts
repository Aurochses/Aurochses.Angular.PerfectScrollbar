import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPerfectScrollbarComponent } from './angular-perfect-scrollbar.component';

describe('AngularPerfectScrollbarComponent', () => {
  let component: AngularPerfectScrollbarComponent;
  let fixture: ComponentFixture<AngularPerfectScrollbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPerfectScrollbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPerfectScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
