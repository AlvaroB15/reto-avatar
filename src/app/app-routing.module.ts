import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        redirectTo: "one-piece"
    },
    {
        path: "one-piece",
        loadChildren: () => import("./modules/one-piece/one-piece.module").then(m => m.OnePieceModule)
    },
    {
        path: "not-found",
        component: NotFoundComponent
    },
    {
        path: "**",
        redirectTo: "not-found",
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
