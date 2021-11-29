import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SkillServicesService } from 'src/app/services/skill-services.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  view = 'Skills';
  triggerRefresh = false;
  @ViewChild('newModal', { static: true }) content: ElementRef | undefined;
  @ViewChild('newModal2', { static: true }) content2: ElementRef | undefined;
  constructor(public service: SkillServicesService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModal() {
    this.modalService.open(this.content, { size:'lg', centered: true});
  }

  openModal2() {
    this.modalService.open(this.content2, { size:'lg', centered: true});
  }

  closeModal() {
    this.triggerRefresh= true;
  }
  
}
