import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './rxjs/create/create.component';
import { HotVsColdComponent } from './rxjs/hot-vs-cold/hot-vs-cold.component';
import { PrintComponent } from './print/print.component';
import { SubjectsComponent } from './rxjs/subjects/subjects.component';
import { OperatorsComponent } from './rxjs/operators/operators.component';
import { BackpressureComponent } from './rxjs/backpressure/backpressure.component';
import { SwitchMapComponent } from './rxjs/switch-map/switch-map.component';
import { CombineComponent } from './rxjs/combine/combine.component';
import { CatchComponent } from './rxjs/catch/catch.component';
import { UnsubscribeComponent } from './rxjs/unsubscribe/unsubscribe.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    HotVsColdComponent,
    PrintComponent,
    SubjectsComponent,
    OperatorsComponent,
    BackpressureComponent,
    SwitchMapComponent,
    CombineComponent,
    CatchComponent,
    UnsubscribeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
