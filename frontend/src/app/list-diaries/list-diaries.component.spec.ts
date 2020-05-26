import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDiariesComponent } from './list-diaries.component';

describe('ListDiariesComponent', () => {
  let component: ListDiariesComponent;
  let fixture: ComponentFixture<ListDiariesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListDiariesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDiariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
