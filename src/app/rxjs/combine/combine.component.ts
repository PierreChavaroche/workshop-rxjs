import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest, merge } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.scss']
})
export class CombineComponent implements OnInit {
  values$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    const randoAsync = Observable.create(o => o.next(Math.random()));

    const delayed = randoAsync.pipe(delay(1000));

    this.values$ = combineLatest([
      delayed,
      randoAsync,
      randoAsync,
      randoAsync,
    ]);

    // this.values$.subscribe(console.log)


    // this.values$ = merge(
    //   delayed,
    //   randoAsync,
    //   randoAsync,
    //   randoAsync,
    // );
  }

}
