import { NgModule, LOCALE_ID, DEFAULT_CURRENCY_CODE } from '@angular/core';
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
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { MatListModule } from '@angular/material/list'
import { FuseAlertModule } from '@fuse/components/alert';
import { MatRippleModule } from '@angular/material/core';

// Credit card validator
import { AswCardModule } from '@asoftwareworld/card-validator/card';
import { AswCardCvvModule } from '@asoftwareworld/card-validator/card-cvv';
import { AswCardDateModule } from '@asoftwareworld/card-validator/card-date';
import { CardCvvService, CardCvvValidator } from '@asoftwareworld/card-validator/common';


registerLocaleData(localePt);

export const routes: Route[] = [
    {
        path: '',
        component: FormsLayoutsComponent
    }
];


export const maskConfig: Partial<IConfig> = {
    validation: true,
};


@NgModule({
    declarations: [
        FormsLayoutsComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        NgxMaskModule.forRoot(maskConfig),
        MatButtonModule,
        MatCheckboxModule,
        MatDividerModule,
        MatFormFieldModule,
        MatListModule,
        MatIconModule,
        MatProgressBarModule,
        MatInputModule,
        FuseAlertModule,
        MatMenuModule,
        MatRadioModule,
        MatRippleModule,
        MatTabsModule,
        MatSelectModule,
        SharedModule,
        CountdownModule,
        CommonModule,


        // Credit card validators
        AswCardModule,
        AswCardCvvModule,
        AswCardDateModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "pt-BR"
        },

        /* if you don't provide the currency symbol in the pipe, 
        this is going to be the default symbol (R$) ... */
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'BRL'
        },
        CardCvvService,
        CardCvvValidator
    ]

})
export class FormsLayoutsModule {
}
