import { Injectable } from '@angular/core';
import { IImagesSlider } from '../entities/IImagesSlider';

@Injectable()
export class SliderService {

  private imagesSlider: IImagesSlider[];
  constructor() { }

  public set setImagesSlider(value: IImagesSlider[]) {
    this.imagesSlider = value;
  }

  public get getImagesSlider(): IImagesSlider[] {
    return this.imagesSlider;
  }
}
