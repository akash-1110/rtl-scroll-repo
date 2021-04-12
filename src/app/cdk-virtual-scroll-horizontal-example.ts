import {
  CdkVirtualScrollViewport,
  ExtendedScrollToOptions
} from "@angular/cdk/scrolling";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
  ViewEncapsulation
} from "@angular/core";

/** @title Horizontal virtual scroll */
@Component({
  selector: "cdk-virtual-scroll-horizontal-example",
  styleUrls: ["cdk-virtual-scroll-horizontal-example.scss"],
  templateUrl: "cdk-virtual-scroll-horizontal-example.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CdkVirtualScrollHorizontalExample {
  @ViewChild("container", { read: ElementRef })
  private sizingElement: ElementRef;
  @ViewChild("carousel", { read: ElementRef }) private carousel: ElementRef;
  @ViewChild("carousel") private container: CdkVirtualScrollViewport;

  private get scrollLeft() {
    return this.container.measureScrollOffset();
  }
  private set scrollLeft(value: number) {
    const scrollOptions: ExtendedScrollToOptions = {
      start: value,
      behavior: "smooth"
    };

    this.container.scrollTo(scrollOptions);
  }

  carouselDirection = "ltr";

  items = Array.from({ length: 8 }).map((_, i) => `Item #${i}`);
  scrollAmount = 70;

  constructor() {
    console.log(this.items);
  }

  moveRight() {
    console.log("right");
    if (this.carouselDirection === "rtl") this.scrollLeft -= this.scrollAmount;
    else this.scrollLeft += this.scrollAmount;
  }

  moveLeft() {
    if (this.carouselDirection === "rtl") this.scrollLeft += this.scrollAmount;
    else this.scrollLeft -= this.scrollAmount;
  }

  ngOnInit() {}
}

/**  Copyright 2020 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
