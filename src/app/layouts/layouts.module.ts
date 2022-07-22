import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AppLayoutComponent,
  FooterComponent,
  HeaderComponent,
  MainComponent,
} from '.';
import { RouterModule } from '@angular/router';
import { MaterialsModule } from '../materials/materials.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AppLayoutComponent,
    MainComponent,
  ],
  imports: [CommonModule, RouterModule, MaterialsModule, SharedModule],
})
export class LayoutsModule {}
