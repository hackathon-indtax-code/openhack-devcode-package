import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DroolsComponent } from './drools.component';

describe('DroolsComponent', () => {
  let component: DroolsComponent;
  let fixture: ComponentFixture<DroolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DroolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DroolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
