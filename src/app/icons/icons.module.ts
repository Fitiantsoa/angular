import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Alarm, App, Bookmark } from 'ng-bootstrap-icons/icons';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const icons = {
  Alarm,
  App,
  Bookmark,
};

@NgModule({
  declarations: [],
  imports: [CommonModule, BootstrapIconsModule.pick(icons)],
  exports: [BootstrapIconsModule],
})
export class IconsModule {}
