import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { delay, of } from 'rxjs';
import { CarComponent } from './car.component';
import { CarService } from './car.service';

describe('CarComponent', () => {
  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
  let carService: CarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarComponent],
    });

    fixture = TestBed.createComponent(CarComponent);
    component = fixture.debugElement.componentInstance;
    carService = fixture.debugElement.injector.get(CarService);
  });

  it('should create component instance', () => {
    expect(component).toBeTruthy();
  });

  it(`should render h1 teg with title 'My car header'`, () => {
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('h1').textContent;
    expect(text).toEqual('My car header');
  });

  it('should inject CarService', () => {
    fixture.detectChanges();
    expect(component.isCarVisible).toEqual(carService.getVisibility());
  });

  it('should display car if is visible', () => {
    carService.showCar();
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('span').textContent;
    expect(text).toEqual('Car is visible');
  });

  it(`shouldn't display car if is'nt visible`, () => {
    carService.hideCar();
    fixture.detectChanges();
    const nativeEl = fixture.debugElement.nativeElement;
    const text = nativeEl.querySelector('span').textContent;
    expect(text).not.toEqual('Car is visible');
  });

  it(`shouldn't  get car name if not async`, () => {
    spyOn(carService, 'getCarName').and.returnValues(
      of('TestCar').pipe(delay(100))
    );
    fixture.detectChanges();
    expect<any>(component.carName).toBe(undefined);
  });

  it(`should  get car name if async`, waitForAsync(() => {
    spyOn(carService, 'getCarName').and.returnValues(
      of('TestCar').pipe(delay(100))
    );
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.carName).toEqual('TestCar');
    });
  }));
});
