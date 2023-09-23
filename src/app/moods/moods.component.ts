import { Component, OnInit } from '@angular/core';
import { MoodService } from '../services/mood.service';

@Component({
  selector: 'app-moods',
  templateUrl: './moods.component.html',
  styleUrls: ['./moods.component.css']
})
export class MoodsComponent implements OnInit {
  moods: any;

  constructor(private moodService: MoodService){

  }

  ngOnInit(): void {
    this.showMoods();
  }

  showMoods(){
    this.moods = this.moodService.listMoods().subscribe(mood=>{
      this.moods = mood;
      console.log(this.moods);
    });
  }
}
