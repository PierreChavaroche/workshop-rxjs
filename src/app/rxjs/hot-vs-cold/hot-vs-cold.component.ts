import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { publish, share, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-hot-vs-cold',
  templateUrl: './hot-vs-cold.component.html',
  styleUrls: ['./hot-vs-cold.component.scss']
})
export class HotVsColdComponent implements OnInit {
  cold$: Observable<any>;
  hot$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.cold$ = Observable.create(o => o.next(Math.random()));

    // this.cold$.subscribe(console.log);
    // this.cold$.subscribe(console.log);

    this.hot$ = this.cold$.pipe(shareReplay(1)); // share()

    // this.hot$.subscribe(console.log);
    // this.hot$.subscribe(console.log);
  }

}
