import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AppHeaderComponent } from 'app/header/header.component';
import { AppFooterComponent } from 'app/footer/footer.component';
import { AppMainComponent } from 'app/main/main.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import {ConfigService} from 'app/services/config.service';
import {Ng2Webstorage} from 'ng2-webstorage';

const appRoutes: Routes = [
  { path: '', component : AppMainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppMainComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2Webstorage.forRoot()
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
