import { Component, OnInit } from '@angular/core';
import { SwitchModalService } from './switch-modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private modalSwitchService: SwitchModalService) {}
  ngOnInit(): void {}

  closeModal() {
    this.modalSwitchService.$modal.emit(false);
  }
}
