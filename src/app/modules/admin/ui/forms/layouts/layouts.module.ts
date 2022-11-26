import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from 'app/shared/shared.module';
import { FormsLayoutsComponent } from 'app/modules/admin/ui/forms/layouts/layouts.component';
import { CountdownModule } from 'ngx-countdown';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';

export const routes: Route[] = [
    {
        path: '',
        component: FormsLayoutsComponent
    }
];

@NgModule({
    declarations: [
        FormsLayoutsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatProgressBarModule,
        MatInputModule,
        MatMenuModule,
        MatRadioModule,
        MatTabsModule,
        MatSelectModule,
        SharedModule,
        CountdownModule,
    ]
})
export class FormsLayoutsModule {
}
