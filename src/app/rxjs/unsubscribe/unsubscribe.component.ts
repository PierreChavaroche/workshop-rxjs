import { Component, OnInit } from '@angular/core';
import { interval, timer, Observable } from 'rxjs';
import { takeWhile, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.scss']
})
export class UnsubscribeComponent implements OnInit {
  values$: Observable<number>;

  constructor() { }

  ngOnInit(): void {
    this.values$ = interval(100);

    // this.values$ = this.values$.pipe(
    //   takeWhile(v => v <= 10)
    // );

    // example.subscribe(console.log);

    this.values$ = this.values$.pipe(
      takeUntil(timer(2000))
    );

    // example2.subscribe(console.log);
  }

}
