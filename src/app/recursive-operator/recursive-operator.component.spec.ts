import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecursiveOperatorComponent } from './recursive-operator.component';

describe('RecursiveOperatorComponent', () => {
  let component: RecursiveOperatorComponent;
  let fixture: ComponentFixture<RecursiveOperatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursiveOperatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursiveOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
