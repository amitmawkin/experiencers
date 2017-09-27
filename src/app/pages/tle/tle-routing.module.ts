import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TleComponent } from './tle.component';
import { TleInputsComponent } from './form-inputs/tle-inputs.component';
import { TleLayoutsComponent } from './form-layouts/tle-layouts.component';

const routes: Routes = [{
  path: '',
  component: TleComponent,
  children: [{
    path: 'inputs',
    component: TleInputsComponent,
  }, {
    path: 'layouts',
    component: TleLayoutsComponent,
  }],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class TleRoutingModule {

}

export const routedComponents = [
  TleComponent,
  TleInputsComponent,
  TleLayoutsComponent,
];
