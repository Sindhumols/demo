import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogprojectComponent } from './blogproject.component';

describe('BlogprojectComponent', () => {
  let component: BlogprojectComponent;
  let fixture: ComponentFixture<BlogprojectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogprojectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
