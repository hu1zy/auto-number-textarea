import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoNumberTextareaComponent } from './components/auto-number-textarea/auto-number-textarea.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AutoNumberTextareaComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
