import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Achievement } from 'src/model/buisness/Achievement';
import { AchievementService } from 'src/services/achievement.service';

@Component({
  selector: 'app-achiviements-page',
  templateUrl: './achiviements-page.component.html',
  styleUrls: ['./achiviements-page.component.scss']
})
export class AchiviementsPageComponent implements OnInit {
  public achiviements: Achievement [] = [];
  public filteredAchiviements: Achievement [] = []
  public filterString: string = "";
  constructor(
    public router: Router,
    private achievementService: AchievementService
  ) { }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  async load() {
    this.achievementService.getAll().subscribe(res => {
      this.achiviements = res;
      this.filterAchiviements();
    });
  }

  public update(achiviement : Achievement) {
    if (achiviement === undefined || achiviement == null) {
      this.router.navigate(['/achievements/0']);
    }
    else {
      this.router.navigate(['/achievements/' + achiviement.id]);
    }
  }

  async deleteD(achiviement : Achievement) { 
    this.achievementService.delete(achiviement.id).subscribe(deleted => {
      this.achiviements = this.achiviements.filter(x=> x.id != achiviement.id);
      this.filterAchiviements();
    })
  }

  filterAchiviements() {
    this.filteredAchiviements = this.achiviements.filter(c => 
      this.filterString == "" ||
      c.name.includes(this.filterString) ||
      c.description.includes(this.filterString))
  }

}
