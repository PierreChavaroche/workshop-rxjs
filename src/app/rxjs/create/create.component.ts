import { Component, OnInit } from '@angular/core';
import { Observable, of, fromEvent, interval } from 'rxjs';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  values$: Observable<any>;

  constructor() { }

  ngOnInit(): void {
    this.values$ = Observable.create(observer => {
      observer.next('A');
      observer.next('B');
      observer.complete();
      observer.next('C');
    });

    // this.values$ = of('hello');

    // this.values$ = fromEvent(document, 'click');

    // this.values$ = interval(500);
  }
}
