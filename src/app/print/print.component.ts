import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { scan, tap } from 'rxjs/operators';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  @Input() values$: Observable<any>

  constructor() { }

  ngOnInit(): void {
    if (this.values$) {
      this.values$ = this.values$.pipe(
        scan((acc, val) => {
          acc.push(val);
          return acc;
        }, []),
        tap(values => console.log(values))
      );
    }
  }

}
