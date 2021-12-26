import { Injectable, Inject } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Observable, of, merge, Subject, BehaviorSubject } from 'rxjs';
import {
  scan,
  startWith,
  map,
  tap,
  combineLatest,
  switchMap,
  skipWhile,
  shareReplay,
  debounceTime,
  publish,
  refCount,
  share,
} from 'rxjs/operators';
import { DATA_ITEMS } from './data';
import { State } from '@ngrx/store/src';

export interface Totals {
  subTot: number;
  tax: number;
  grandTot: number;
}
export interface CartItem {
  price: number;
  image: string;
  name: string;
  details: string;
  heart: string;
  uuild?: any;
  remove?: boolean;
}

export interface StateTree {
  store: CartItem[];
  cart: CartItem[];
  tot: Totals;
  checkout: boolean;
}

@Injectable()
export class ShoppingCartService {
  //Main observables

  private stateTree$ = new BehaviorSubject<StateTree>(null);
  private checkoutTrigger$ = new BehaviorSubject<boolean>(false);
  private cartAdd$ = new Subject<CartItem>();
  private cartRemove$ = new Subject<CartItem>();

  private get cart$(): Observable<CartItem[]> {
    return merge(this.cartAdd$, this.cartRemove$).pipe(
      startWith([]),
      scan((acc: CartItem[], item: CartItem ) => {
        if (item) {
          if (item.remove) {
            return [...acc.filter(i => i.uuid !== item.uuid)];
          }
          return [...acc, item];
        }
      },[])
    );
  }
   
  constructor() {}

  private getItems() {
    return of(DATA_ITEMS);
  }

 
}
