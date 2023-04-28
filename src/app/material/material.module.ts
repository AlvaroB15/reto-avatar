import {NgModule} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import {MatChipsModule} from '@angular/material/chips';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
    declarations: [],
    exports: [
        MatSidenavModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatChipsModule,
        MatTabsModule,
        MatToolbarModule
    ]
})
export class MaterialModule {
}
