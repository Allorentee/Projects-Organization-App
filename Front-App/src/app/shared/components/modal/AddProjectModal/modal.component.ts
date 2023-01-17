import { Component, Input, OnInit, Output } from '@angular/core';
import { SwitchModalService } from '../switch-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class AddProjectModal {
  public modalSwitch = false;
  closeModal() {
    this.modalSwitch = false;
  }
  openModal() {
    this.modalSwitch = true;
  }
}
