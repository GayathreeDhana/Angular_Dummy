import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StudentComponent } from './student/student.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { RouterModuleModule } from './router-module/router-module.module';

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModuleModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StudentComponent,
    ConfirmationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
