import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime, throttleTime, bufferCount } from 'rxjs/operators';

@Component({
  selector: 'app-backpressure',
  templateUrl: './backpressure.component.html',
  styleUrls: ['./backpressure.component.scss']
})
export class BackpressureComponent implements OnInit {
  values$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.values$ = fromEvent(document, 'mousemove').pipe(
      map(_ => Math.random() + '💩')
    );

    // this.values$ = this.values$.pipe(debounceTime(1000));

    // this.values$ = this.values$.pipe(throttleTime(1000));

    this.values$ = this.values$.pipe(bufferCount(20));
  }

}
