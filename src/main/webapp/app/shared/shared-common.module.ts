import { NgModule } from '@angular/core';

import { Sandbox1810SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Sandbox1810SharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Sandbox1810SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Sandbox1810SharedCommonModule {}
