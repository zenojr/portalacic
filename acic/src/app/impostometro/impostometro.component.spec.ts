import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpostometroComponent } from './impostometro.component';

describe('ImpostometroComponent', () => {
  let component: ImpostometroComponent;
  let fixture: ComponentFixture<ImpostometroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImpostometroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImpostometroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
