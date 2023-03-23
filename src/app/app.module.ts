import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { LineChartComponent } from './line-chart/line-chart.component';

@NgModule({
    declarations: [
        AppComponent,
        WordCloudComponent,
        WelcomePageComponent,
        LineChartComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule { }
