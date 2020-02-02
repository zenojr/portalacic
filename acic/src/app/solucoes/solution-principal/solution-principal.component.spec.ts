import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionPrincipalComponent } from './solution-principal.component';

describe('SolutionPrincipalComponent', () => {
  let component: SolutionPrincipalComponent;
  let fixture: ComponentFixture<SolutionPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
