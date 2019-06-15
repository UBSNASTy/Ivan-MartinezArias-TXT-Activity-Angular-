import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TXTActivityComponent } from './txtactivity.component';

describe('TXTActivityComponent', () => {
  let component: TXTActivityComponent;
  let fixture: ComponentFixture<TXTActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TXTActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TXTActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
