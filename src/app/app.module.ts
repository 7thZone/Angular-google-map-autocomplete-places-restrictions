import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCYOUMHPr_3FJzgoY3xLZJio4dpdeWvcZM',
      libraries: ["places"],
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
