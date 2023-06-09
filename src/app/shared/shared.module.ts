import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageBrokenDirective} from './directives/image-broken.directive';


@NgModule({
    declarations: [
        ImageBrokenDirective
    ],
    imports: [
        CommonModule
    ],
    exports: [
        ImageBrokenDirective
    ]
})
export class SharedModule {
}
