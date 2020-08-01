import { Component, OnInit } from '@angular/core';
import { of, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit {
  orders$: Observable<string>;
  user$: Observable<{
    uid: number;
  }>;

  constructor() {

  }

  ngOnInit(): void {
    this.user$ = of({ uid: Math.random() });

    // Function to simulate database call
    const fetchOrders = async (userId) => {
      return `${userId}'s order data`;
    }   

    this.orders$ = this.user$.pipe(
      switchMap(user => {
        return fetchOrders(user.uid);
      })
    )


    // user$.subscribe(console.log);

    // orders$.subscribe(console.log);
  }

}
