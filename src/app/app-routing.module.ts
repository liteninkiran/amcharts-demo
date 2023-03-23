import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { WordCloudComponent } from './word-cloud/word-cloud.component';

const routes: Routes = [
    { path: '', component: WelcomePageComponent },
    { path: 'word-cloud', component: WordCloudComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
