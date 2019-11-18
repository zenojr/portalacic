import {MatButtonModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatGridListModule,
        MatDialogModule} from '@angular/material';

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
            MatTabsModule,
            MatGridListModule,
            MatDialogModule],

  exports: [MatButtonModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatMenuModule,
            MatIconModule,
            MatFormFieldModule,
            MatInputModule,
            MatTabsModule,
            MatGridListModule,
            MatDialogModule],
})

export class MaterialModule { }
