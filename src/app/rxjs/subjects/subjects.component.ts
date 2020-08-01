import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit, AfterViewInit {
  values$: Observable<any>;
  private subject: Subject<any>;

  constructor() { }

  ngOnInit(): void {
    this.subject = new Subject();
    this.values$ = this.subject.asObservable();

    this.subject.subscribe(console.log);

    this.subject.next('Hello');
    this.subject.next('World');

    this.subject.subscribe(console.log); // Does not emit




    const behaviorSubject = new BehaviorSubject('Hola');
    this.values$ = behaviorSubject.asObservable();

    behaviorSubject.subscribe(console.log);

    behaviorSubject.next('Mundo');

    behaviorSubject.subscribe(console.log); // Emits last value
  }

  ngAfterViewInit() {
    

    
  }

}
