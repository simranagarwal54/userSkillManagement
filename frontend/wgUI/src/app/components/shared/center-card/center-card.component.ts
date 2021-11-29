import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { userSkillColumnGridData } from '../grid/grid-config/user-skill.config';
import { UserskillServicesService } from 'src/app/services/userskill-services.service';

@Component({
  selector: 'app-center-card',
  templateUrl: './center-card.component.html',
  styleUrls: ['./center-card.component.css']
})
export class CenterCardComponent implements OnInit, OnChanges{
  gridData: any;
  field: string = '';
  nonView: string = '';
  mainData: any;
  colData: any[] = [];
  isCollapsed = true;
  showOptions = false;
  userSkillData: any[] = [];
  showGrid = false;
  showAddskillButton = true;
  showNoRecordText = false;
  @Input() view: any;
  @Input() dataService: any;
  @Input() triggerRefresh: any;
  @Output() dropDownEventEmitter: any = new EventEmitter();
  @ViewChild('newModal', { static: true }) content: ElementRef | undefined;
  constructor(private modalService: NgbModal, private userskillService: UserskillServicesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.refresh();
  }

  ngOnInit(): void {
    this.callDataService();
    this.showOptions = false;
    if(this.view === 'Skills'){
      this.field = 'name';
      this.nonView = 'Users';
      this.showAddskillButton = false;
    } else {
      this.field = 'email';
      this.nonView = 'Skills';
      this.showAddskillButton = true;
    }
  }

  triggerDropDownChange(event: any) {
    const val = event.target.value;
    this.showOptions = false;
    this.isCollapsed = true;
    console.log(val);
    this.gridData.forEach((el:any) => {
      if(el[this.field] === val){
        this.mainData = el;
      }
    });
    if( val !== ''){
      this.showOptions = true;
    } 
  }
  private refresh() {
    this.callDataService();
  }

  private callDataService() {
    this.dataService.getAll()
      .subscribe(
        (data: any) => {
          this.gridData = data;
          console.log(data);
        },(error: any) => {
          console.log(error);
        });
  }

  openModal() {
    this.modalService.open(this.content, { size:'lg', centered: true});
  }

  retriveUserSkillTable(){
    this.userSkillData = [];
      const queryId = (this.view === 'Skills') ? 'skill' : 'user';
      this.userskillService.findUsersBySkill(this.mainData.id, queryId)
      .subscribe(
        (data: any) => {
          if(data.length !== 0){
            this.showGrid = true;
            this.colData = userSkillColumnGridData().colData;
            this.mapData(data);
          } else {
            this.showNoRecordText = true;

          }
          
        },
        (error: any) => {
          console.log(error);
        });
  }

  private mapData(data: any){
    data.forEach((_element:any) => {
      let el = {
        id : _element.id,
        name : _element.Skill.name,
        email: _element.User.email,
        description: _element.Skill.description,
        username: _element.User.username
      };
     this.userSkillData.push(el);
    });
  }

  closeModal() {
    this.isCollapsed = true;
    this.showGrid = false;
  }
}
