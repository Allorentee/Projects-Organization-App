import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SwitchModalService } from '../modal/switch-modal.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  modalSwitch!: boolean;
  constructor(private modalSwitchAService: SwitchModalService) {}

  ngOnInit(): void {
    this.modalSwitchAService.$modal.subscribe((value) => {
      this.modalSwitch = value;
    });
  }

  openModal() {
    this.modalSwitch = true;
  }
}
