import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {ResultComponent} from './components/result/result.component';
import {ButtonsComponent} from './components/buttons/buttons.component';
import {LegacyRoutingModule} from "./legacy-routing.module";

@NgModule({
  declarations: [
    WrapperComponent,
    ResultComponent,
    ButtonsComponent
  ],
  imports: [
    CommonModule,
    LegacyRoutingModule
  ]
})
export class LegacyModule {
}
