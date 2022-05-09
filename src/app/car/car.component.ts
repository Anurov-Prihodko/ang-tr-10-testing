import { Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService],
})
export class CarComponent implements OnInit {
  isCarVisible!: boolean;
  title = 'My car header';
  carName!: string;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.isCarVisible = this.carService.getVisibility();

    this.carService.getCarName().subscribe((name) => (this.carName = name));
  }
}
