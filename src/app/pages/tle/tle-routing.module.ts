import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TleComponent } from './tle.component';
import { TleInputsComponent } from './humble/tle-inputs.component';
import { SierraInputsComponent } from './sierra/sierra-inputs.component';

const routes: Routes = [{
  path: '',
  component: TleComponent,
  children: [{
    path: 'inputs',
    component: TleInputsComponent,
  },
  {
    path: 'sierrainputs',
    component: SierraInputsComponent,
  }
],
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
  SierraInputsComponent
];
