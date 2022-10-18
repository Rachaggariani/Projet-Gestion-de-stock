import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { Inject }  from '@angular/core';
import { TweenMax, Expo } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
edited:any=false;
i:any=0;


  constructor(@Inject(DOCUMENT) document: Document ){ 
   
  
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.myJs ();
    
  }
  show(){
    if (this.i==0){
      this.edited=true;
      this.i++;
    }else {
      this.edited=false;
      this.i=0;
    }
  }
  

  myJs (){
        TweenMax.from(".left-container", 2, {
          width: "0",
          ease: Expo.easeInOut
        });
        TweenMax.from(".right-container", 2, {
          delay: 1.5,
          width: "0",
          opacity: "0",
          ease: Expo.easeInOut
        });
        TweenMax.from(".center-container", 2, {
          delay: 3,
          width: "0",
          x: -20,
          ease: Expo.easeInOut
        });
        TweenMax.from(".logo", 2, {
          delay: 1.5,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
        });
        TweenMax.from(".info", 2, {
          delay: 1.5,
          y: 50,
          opacity: 0,
          scale: 2.5,
          ease: Expo.easeInOut
        });
        TweenMax.from(".story", 2, {
          delay: 2.5,
          y: 20,
          opacity: 0,
          ease: Expo.easeInOut
        });
        TweenMax.from(".menu", 2, {
          delay: 3.5,
          y: 20,
          opacity: 0,
          rotation: 90,
          ease: Expo.easeInOut
        });
        TweenMax.staggerFrom(
          ".social ul",
          2,
          {
            delay: 3.8,
            opacity: 0,
            y: 20,
            ease: Expo.easeInOut
          }
        );
  }

}
