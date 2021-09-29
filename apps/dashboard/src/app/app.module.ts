import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreDataModule } from '@fem-production-angular/core-data';
import { CoreStateModule } from '@fem-production-angular/core-state';
import { MaterialModule } from '@fem-production-angular/material';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { WidgetDetailsComponent } from './widgets/widget-details/widget-details.component';
import { WidgetsListComponent } from './widgets/widgets-list/widgets-list.component';
import { WidgetsComponent } from './widgets/widgets.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [AppComponent, WidgetsComponent, WidgetsListComponent, WidgetDetailsComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({}, {}),
    CoreDataModule,
    CoreStateModule,
    MaterialModule,
    RoutingModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production, autopause: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
