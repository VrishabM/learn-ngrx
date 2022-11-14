import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "legacy"
  },
  {
    path: "legacy",
    loadChildren: () => import('./modules/legacy/legacy.module').then(m => m.LegacyModule)
  },
  {
    path: "introduction-ngrx",
    loadChildren: () => import('./modules/ngrx/ngrx.module').then(m => m.NgrxModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
