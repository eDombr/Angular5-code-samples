import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
    name: 'slImgSrc'
})
export class ImgSrcPipe implements PipeTransform {

    constructor(private sanitizer: DomSanitizer) {
    }

    public transform(value: any, def?: string): any {
        const defImg: string = def ? def : '';
        let src: string;
        if (!value) {
            src = defImg;
        } else if (typeof value.image === 'string') {
            src = value.image;
        } else if (typeof value.src === 'string') {
            src = value.src;
        } else if (typeof value.img === 'string') {
            src = value.img;
        } else if (typeof value === 'string') {
            src = value;
        } else {
            src = defImg;
        }
        return this.sanitizer.bypassSecurityTrustUrl(src);
    }
}
