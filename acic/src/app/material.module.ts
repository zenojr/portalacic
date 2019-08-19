import {MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule],

  exports: [MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule],
})

export class MaterialModule { }
