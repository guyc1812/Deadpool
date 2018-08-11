import {Component, Input, OnChanges} from '@angular/core';
import {SiderState} from '../../service/siderState/sider.state.store';
import {Router} from '@angular/router';

@Component({
  selector: 'header-note',
  templateUrl: './header.note.html',
  styleUrls: ['./header.note.css']
})

export class HeaderNoteComponent implements OnChanges {

  @Input()
  category: string;

  categories: any;

  src: string;

  title: string;

  constructor(private siderState: SiderState, private router: Router) {
    this.categories = {
      designPattern: {
        src: 'https://oss.guyuchen.com/deadpool/images/Steven-logo-1.png',
        title: 'Design Pattern'
      },
      designPattern2: 'https://oss.guyuchen.com/deadpool/images/Steven-logo-2.png',
      javaBasic: {
        src: 'https://oss.guyuchen.com/deadpool/images/Stark-logo-1.png',
        title: 'Java Basic'
      },
      javaBasic2: 'https://oss.guyuchen.com/deadpool/images/Stark-logo-2.png',
      algorithm: {
        src: 'https://oss.guyuchen.com/deadpool/images/Hulk-logo-1.png',
        title: 'Algorithm'
      },
      algorithm2: 'https://oss.guyuchen.com/deadpool/images/Hulk-logo-2.png',
      frontend: {
        src: 'https://oss.guyuchen.com/deadpool/images/Thor-logo-1.png',
        title: 'Frontend'
      },
      frontend2: 'https://oss.guyuchen.com/deadpool/images/Thor-logo-2.png',
      devOps: {
        src: 'https://oss.guyuchen.com/deadpool/images/Tchalla-logo-1.png',
        title: 'DevOps'
      },
      devOps2: 'https://oss.guyuchen.com/deadpool/images/Tchalla-logo-2.png',
      others: {
        src: 'https://oss.guyuchen.com/deadpool/images/Strange-logo-1.png',
        title: 'Others'
      },
      others2: 'https://oss.guyuchen.com/deadpool/images/Strange-logo-2.png',
    };
  }

  ngOnChanges() {
    if (this.categories) {
      this.src = this.categories[`${this.category}`].src;
      this.title = this.categories[`${this.category}`].title;
    }
  }

  expand(e: any) {
    e.stopPropagation();
    if (this.siderState.isInited) {
      if (this.siderState.isSiderExpanded) {
        this.siderState.setExpandState(false);
      } else {
        this.siderState.setExpandState(true);
      }
    }
  }

  mouseEnter() {
    this.src = this.categories[`${this.category}2`];
  }

  mouseLeave() {
    this.src = this.categories[`${this.category}`].src;
  }

  navToHome() {
    this.router.navigate([`/home`]);
  }

}
