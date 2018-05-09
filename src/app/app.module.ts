import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { InfiniteScrollModule } from "ngx-infinite-scroll";

import { AppComponent } from './app.component';
import { ContentListComponent } from './component/content-list/content-list.component';
import { HeaderComponent } from './component/header/header.component';
import { HttpModule } from '@angular/http';
import  {ContentService} from './service/content.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    InfiniteScrollModule,
    HttpModule
  ],
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
