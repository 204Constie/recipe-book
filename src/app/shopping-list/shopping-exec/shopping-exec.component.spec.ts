import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingExecComponent } from './shopping-exec.component';

describe('ShoppingExecComponent', () => {
  let component: ShoppingExecComponent;
  let fixture: ComponentFixture<ShoppingExecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingExecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingExecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
