import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesFavoriteComponent } from './heroes-favorite.component';

describe('HeroesFavoriteComponent', () => {
  let component: HeroesFavoriteComponent;
  let fixture: ComponentFixture<HeroesFavoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesFavoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
