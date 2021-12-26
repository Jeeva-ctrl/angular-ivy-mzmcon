import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.counter$ = this.store.pipe(select('count'));
  }
  onIncrement() {
    this.store.dispatch({ type: 'increment' });
  }
  onDecrement() {
    this.store.dispatch({ type: 'decrement' });
  }
  onReset() {
    this.store.dispatch({ type: 'reset' });
  }
}
