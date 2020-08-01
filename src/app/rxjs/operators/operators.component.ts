import { Component, OnInit } from '@angular/core';
import { Observable, from } from 'rxjs';
import { map, scan, filter, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operators',
  templateUrl: './operators.component.html',
  styleUrls: ['./operators.component.scss']
})
export class OperatorsComponent implements OnInit {
  values$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    const source$ = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    this.values$ = source$.pipe(
      map(n => Math.pow(n, 2)),
      scan((acc, val) => acc + val),
      filter(v => v > 10),
      take(3),  // first(),
      tap(val => console.log(val))
    )
  }

}
