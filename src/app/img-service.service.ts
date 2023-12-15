import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgServiceService {
  imgContent = [
    { essence_img: '../../assets/hobby-imgs/paint-ess.jpg', fam_img: '../../assets/hobby-imgs/paint-fam.gif' },
    { essence_img: '../../assets/hobby-imgs/cook-ess.jpg', fam_img: '../../assets/hobby-imgs/cook-fam.jpg' },
    { essence_img: '../../assets/hobby-imgs/needl-ess.jpg', fam_img: '../../assets/hobby-imgs/needl-fam.jpeg' },
  ];

  getImgContent(){
    return this.imgContent
  }
}
