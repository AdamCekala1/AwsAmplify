import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatTabsModule } from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  declarations: []
})
export class SharedModule { }
