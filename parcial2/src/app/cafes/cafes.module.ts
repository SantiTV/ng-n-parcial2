import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafesComponent } from './cafes.component';
import { CafeListComponent } from './cafe-list/cafe-list.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafeListComponent],
  exports: [CafeListComponent]
})
export class CafesModule { }
