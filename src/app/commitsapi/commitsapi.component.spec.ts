import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommitsapiComponent } from './commitsapi.component';

describe('CommitsapiComponent', () => {
  let component: CommitsapiComponent;
  let fixture: ComponentFixture<CommitsapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommitsapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommitsapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
