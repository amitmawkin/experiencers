import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { TleRoutingModule, routedComponents } from './tle-routing.module';

@NgModule({
  imports: [
    ThemeModule,
    TleRoutingModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class TleModule { }
