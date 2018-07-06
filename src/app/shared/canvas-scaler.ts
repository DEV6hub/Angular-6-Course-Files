import 'fabric';
import { Renderer2 } from '@angular/core';

declare const fabric: any;

export class CanvasScaler {
    private widthScale: number;
    private heightScale: number;
    private canvas: fabric.Canvas;
    private currentImage: any;
    private currentTextbox: any;
    private currentCloseButton: any;

    constructor(public importCanvas: fabric.Canvas,
        public image: any,
        public textbox: any,
        public closeButton: any,
        private renderer: Renderer2) {
        this.canvas = importCanvas;
        this.currentImage = image;
        this.currentTextbox = textbox;
        this.currentCloseButton = closeButton;
    }

    adjustCanvasAndObjectsSize(elementWidth: number, elementHeight: number): void {

        const w = elementWidth;
        const h = elementHeight;
        let widthOrHeightChanged = false;

        if (this.canvas) {
            const canvasW = this.canvas.getWidth();
            const canvasH = this.canvas.getHeight();

            if (w !== canvasW) {
                this.canvas.setWidth(w);
                widthOrHeightChanged = true;
                this.widthScale = w / canvasW;
            }

            if (h !== canvasH) {
                this.canvas.setHeight(h);
                widthOrHeightChanged = true;
                this.heightScale = h / canvasH;
            }

            if (this.currentImage && widthOrHeightChanged) {
                this.rescaleImage(this.currentImage);
                this.canvas.renderAll();
            }

            if (this.currentTextbox && widthOrHeightChanged) {
                this.rescaleText(this.currentTextbox);
                this.canvas.renderAll();
            }

            if (this.currentCloseButton && widthOrHeightChanged) {
                this.rescaleCloseButton(this.currentCloseButton);
                this.canvas.renderAll();
            }
        }
    }

    private rescaleImage(image: fabric.Image): void {
        if (this.widthScale) {
            image.scaleX = image.scaleX * this.widthScale;
            image.left = image.left * this.widthScale;
        }
        if (this.heightScale) {
            image.scaleY = image.scaleY * this.heightScale;
            image.top = image.top * this.heightScale;
        }
    }

    private rescaleText(textbox: any): void {
        if (this.widthScale) {
            textbox.scaleX = textbox.scaleX * this.widthScale;
            textbox.left = textbox.left * this.widthScale;
        }
        if (this.heightScale) {
            textbox.scaleY = textbox.scaleY * this.heightScale;
            textbox.top = textbox.top * this.heightScale;
        }
    }

    private rescaleCloseButton(closeButton: any): void {
        if (this.widthScale) {
            this.renderer.setStyle(closeButton, 'left', closeButton.offsetLeft * this.widthScale + 'px');
        }
        if (this.heightScale) {
            this.renderer.setStyle(closeButton, 'top', closeButton.offsetTop * this.heightScale + 'px');
        }
    }
}