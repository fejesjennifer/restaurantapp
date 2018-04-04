import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { ImageService } from '../image-detail/image.service';

@Component({
  selector: 'app-bottomview',
  templateUrl: './bottomview.component.html',
  styleUrls: ['./bottomview.component.scss']
})
export class BottomviewComponent implements OnInit, OnChanges {

  visibleImages: any[] = [];
  @Input() filterBy = 'all';

  constructor(private imageService: ImageService) {
    this.visibleImages = this.imageService.getImages();
  }

  ngOnInit() {
  }
  ngOnChanges() {
    this.visibleImages = this.imageService.getImages();
  }

}
