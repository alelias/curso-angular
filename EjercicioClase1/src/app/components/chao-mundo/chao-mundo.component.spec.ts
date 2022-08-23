import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaoMundoComponent } from './chao-mundo.component';

describe('ChaoMundoComponent', () => {
  let component: ChaoMundoComponent;
  let fixture: ComponentFixture<ChaoMundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChaoMundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaoMundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
