import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundComponent } from '.';

@NgModule({
  declarations: [BackgroundComponent],
  imports: [CommonModule],
  exports:[BackgroundComponent]
})
export class SharedModule {}