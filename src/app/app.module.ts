
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store/reducers/user.reducer"
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {counterReducer} from "./store/reducers/counter.reducer"
import {StoreDevtoolsModule} from "@ngrx/store-devtools"
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user:reducer,
      counter:counterReducer
    }),
    StoreDevtoolsModule.instrument(
      {}
      )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
