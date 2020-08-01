import { Component, OnInit, AfterViewInit } from '@angular/core';
import { of, Observable, BehaviorSubject } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
  selector: 'app-catch',
  templateUrl: './catch.component.html',
  styleUrls: ['./catch.component.scss']
})
export class CatchComponent implements OnInit, AfterViewInit {
  values$: Observable<any>;
  private subject: BehaviorSubject<string>;

  constructor() { }

  ngOnInit(): void {
    this.subject = new BehaviorSubject('passt');

    this.values$ = this.subject.asObservable().pipe(
      // catchError(err => of('Irgendwas lief schief, aber wir reagieren drauf 🕶️')),
    )    
  }

  ngAfterViewInit() {
    this.subject.next('passt');
    this.subject.error('💥 broken!');    
  }

}
