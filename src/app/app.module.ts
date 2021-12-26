import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CounterComponent } from './counter/counter.component';
import { counterReducer } from './state/counter.reducer';

@NgModule({
  imports:      [ BrowserModule, FormsModule
  , StoreModule.forRoot({ count:counterReducer }) ],
  declarations: [ AppComponent, HelloComponent , CounterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
