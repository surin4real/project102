import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpnpaypalComponent } from './ipnpaypal.component';

describe('IpnpaypalComponent', () => {
  let component: IpnpaypalComponent;
  let fixture: ComponentFixture<IpnpaypalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpnpaypalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpnpaypalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
