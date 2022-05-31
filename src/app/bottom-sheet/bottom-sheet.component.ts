import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../services';
@Component({
  selector: 'app-dialog',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {

  constructor(private modalService: ModalService) { }
  isShow = false;
  ngOnInit(): void {
  }
  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
}
