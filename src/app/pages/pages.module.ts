import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent, HomeComponent, ServicesComponent } from '.';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ServicesComponent],
  imports: [CommonModule],
})
export class PagesModule {}
