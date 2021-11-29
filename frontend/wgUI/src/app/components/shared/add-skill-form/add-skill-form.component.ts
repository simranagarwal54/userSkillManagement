import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserskillServicesService } from 'src/app/services/userskill-services.service';
import { SkillServicesService } from 'src/app/services/skill-services.service';


@Component({
  selector: 'app-add-skill-form',
  templateUrl: './add-skill-form.component.html',
  styleUrls: ['./add-skill-form.component.css']
})
export class AddSkillFormComponent implements OnInit {
  public skills: any[] = [{
    name: '',
    description: ''
  }];
  skillId: Number[] = [];
  @Input() userData: any | undefined;
  @Input() action: any | undefined;
  constructor(private userskillService: UserskillServicesService, private skillService: SkillServicesService ) { }

  ngOnInit(): void {
  }
  addSkill() {
    this.skills.push({
      name: '',
      description: '',
    });
  }

  removeSkill(i: number) {
    this.skills.splice(i, 1);
  }
  //if there is no userData, we just want to add skill to db
  logValue(){
    let skillId: Number;
    // UserData.id == userId
    // requestParams { userId: 1, skillId: [1,2]}  //we have userid, skillid need to retrive from this.skills
    // first skills need to be saved to skill db
    //check if skill already exists in db if yes then junction happens.
    // if no then we will first call Skill.create
    
    this.skills.forEach(skill =>{
      if(skill.name !== '') {
         this.skillService.findByName(skill.name)
        .subscribe(
          (data: any) => {
            if(data.length !== 0){
              skillId = data[0].id;
              if(this.action !== undefined && this.action === 'editSkill'){
                this.skillService.update(skillId, skill)    // need t change this to in-corporate edit functionality also
              .subscribe(
                (d:any) =>{
                  skillId  = d.id;
                }
              )
              }
            } else {
               this.skillService.create(skill)    // need t change this to in-corporate edit functionality also
              .subscribe(
                (d:any) =>{
                  skillId  = d.id;
                }, (error:any) =>{
                  console.log('error');
                }
              )
            }
            console.log( data);
          },(error: any) => {
            console.log(error);
          },() => {
            if(this.userData !== undefined){
              this.addSkillToUser(skillId);
            }
          });
      }
    })
  }

  private addSkillToUser(skillId: Number){
    const req = {
      userId : this.userData.id,
      skillId: [ skillId ]
    }
    this.userskillService.create(req)
    .subscribe(
      (d:any) =>{
        skillId  = d.id;
      });
  }
}
