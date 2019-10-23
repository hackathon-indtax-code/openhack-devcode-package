import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrordataComponent } from './errordata.component';

describe('ErrordataComponent', () => {
  let component: ErrordataComponent;
  let fixture: ComponentFixture<ErrordataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrordataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrordataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
