import { AlertModalService } from './alert-modal.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../shared/modal/modal.component';

@NgModule({
  declarations: [ModalComponent],
  imports: [CommonModule],
  exports: [ModalComponent],
  providers: [AlertModalService],
  entryComponents: [ModalComponent], // siginica que este component sera utilizado en tiempo de ejecucion, no dentro de ningun componente o ruta
})
export class SharedModule {}
