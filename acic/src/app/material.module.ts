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
        MatDialogModule,
        MatDividerModule} from '@angular/material';

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
            MatDialogModule,
            MatDividerModule],

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
            MatDialogModule,
            MatDividerModule],
})

export class MaterialModule { }
