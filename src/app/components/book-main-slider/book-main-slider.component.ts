import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import { IImagesSlider } from 'src/app/entities/IImagesSlider';

@Component({
  selector: 'book-main-slider',
  templateUrl: './book-main-slider.component.html',
  styleUrls: ['./book-main-slider.component.scss']
})
export class BookMainSliderComponent implements OnInit {

  public images: IImagesSlider[];
  private itemImages: number;
  constructor(private sliderService: SliderService) {
    this.sliderService.setImagesSlider = [
      {
        id: 1,
        name: "angularJS",
        url: "assets/images/slider/angularJS.jpg"
      },
      {
        id: 2,
        name: "angular",
        url: "assets/images/slider/angular.jpg"
      },
      {
        id: 3,
        name: "php&mysql",
        url: "assets/images/slider/php&mysql.jpg"
      },
      {
        id: 4,
        name: "unity3d",
        url: "assets/images/slider/unity3d.jpg"
      }
    ];
    this.itemImages = 0;
  }

  ngOnInit() {
    this.images = this.sliderService.getImagesSlider;

    setInterval(() => {
      this.onClickRight()
    }, 4000);
  }

  public onClickRight(): void {
    this.itemImages--;
    let lenta = document.getElementById("lenta");
    let currentImage = this.itemImages * 600;

    if (this.itemImages === -this.sliderService.getImagesSlider.length) {
      this.itemImages = 0;
    }

    if (currentImage === -2400) {
      lenta.style.left = 0 + 'px';
      return;
    }
    lenta.style.left = currentImage + 'px';
  }

  public onClickLeft(): void {
    this.itemImages++;
    let lenta = document.getElementById("lenta");

    if (this.itemImages === 1) {
      this.itemImages = -this.sliderService.getImagesSlider.length + 1;
    }

    let currentImage = this.itemImages * 600;
    lenta.style.left = currentImage + 'px';
  }

  public onClickCurrentSlide(id: number): void {
    let currentSlide = id * 600;
    let lenta = document.getElementById("lenta");
    lenta.style.left = -1 * currentSlide + 'px';
  }

}
