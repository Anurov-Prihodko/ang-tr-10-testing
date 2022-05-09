import { delay, Observable } from 'rxjs';
import { of } from 'rxjs';

export class CarService {
  private isVisible = true;
  private name = 'Tesla';

  showCar() {
    this.isVisible = true;
  }

  hideCar() {
    this.isVisible = false;
  }

  getVisibility() {
    return this.isVisible;
  }

  getCarName(): Observable<string> {
    return of('Tesla').pipe(delay(100));
  }
}
