import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogheadComponent } from './bloghead.component';

describe('BlogheadComponent', () => {
  let component: BlogheadComponent;
  let fixture: ComponentFixture<BlogheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
