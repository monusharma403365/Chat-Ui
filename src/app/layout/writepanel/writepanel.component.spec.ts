import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritepanelComponent } from './writepanel.component';

describe('WritepanelComponent', () => {
  let component: WritepanelComponent;
  let fixture: ComponentFixture<WritepanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WritepanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WritepanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
