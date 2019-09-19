import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasDestaqueComponent } from './noticias-destaque.component';

describe('NoticiasDestaqueComponent', () => {
  let component: NoticiasDestaqueComponent;
  let fixture: ComponentFixture<NoticiasDestaqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasDestaqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasDestaqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
