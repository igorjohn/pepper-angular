import { NgModule } from '@angular/core';
import { LayoutComponent } from 'app/layout/layout.component';

import { ClassicLayoutModule } from 'app/layout/layouts/vertical/classic/classic.module';
import { ClassyLayoutModule } from 'app/layout/layouts/vertical/classy/classy.module';
import { DenseLayoutModule } from 'app/layout/layouts/vertical/dense/dense.module';

import { SettingsModule } from 'app/layout/common/settings/settings.module';
import { SharedModule } from 'app/shared/shared.module';
import { EmptyLayoutModule } from 'app/layout/layouts/empty/empty.module';

const layoutModules = [

    EmptyLayoutModule,
    ClassicLayoutModule,
    ClassyLayoutModule,
    DenseLayoutModule,
];

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        SharedModule,
        SettingsModule,
        ...layoutModules
    ],
    exports: [
        LayoutComponent,
        ...layoutModules
    ]
})
export class LayoutModule {
}
