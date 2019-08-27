
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from "@ngrx/store";
import {reducer} from "./store/reducers/user.reducer"
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      user:reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
