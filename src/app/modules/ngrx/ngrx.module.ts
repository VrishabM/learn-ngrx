import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";
import {WrapperComponent} from './components/wrapper/wrapper.component';
import {ButtonComponent} from './components/button/button.component';
import {ValueComponent} from './components/value/value.component';

@NgModule({
  declarations: [
    WrapperComponent,
    ButtonComponent,
    ValueComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: WrapperComponent,
      }
    ]),
  ]
})
export class NgrxModule {
}
