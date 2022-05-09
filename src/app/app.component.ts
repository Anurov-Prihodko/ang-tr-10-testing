import { Component, OnInit } from '@angular/core';
import { PowPipe } from './pow/pow.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PowPipe],
})
export class AppComponent implements OnInit {
  title = 'ang-tr-10-testing';

  constructor(private powPipe: PowPipe) {}

  ngOnInit(): void {
    console.log(this.powPipe.transform(2, 3));
  }
}
