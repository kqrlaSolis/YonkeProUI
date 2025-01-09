import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YonkeItemDetailComponent } from './yonke-item-detail.component';

describe('YonkeItemDetailComponent', () => {
  let component: YonkeItemDetailComponent;
  let fixture: ComponentFixture<YonkeItemDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YonkeItemDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YonkeItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
