import {MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule} from '@angular/material';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatTabsModule],

  exports: [MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatTabsModule],
})

export class MaterialModule { }
