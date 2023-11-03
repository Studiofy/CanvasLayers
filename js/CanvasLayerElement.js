/*
Copyright © 2023 Studiofy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/

import CanvasLayer from './CanvasLayer.js';

export default class LayerElement {

    _posX; _posY; _name;
    _width; _height; _index;
    _isElementVisible; _isElementMovable;

    /**
     * Initializes a new CanvasLayer and add it to the _layerElements collection
     * @param {CanvasLayer} layer the parent layer of the Element
     */
    constructor(name = "New Element", width = 0, height = 0) {
        this.setName(name);
        this.setWidth(width);
        this.setHeight(height);
    }

    /**
     * Gets the current value of width
     * @returns {number} width
     */
    getWidth() {
        return this._width;
    }
    
    setWidth(width) {
        this._width = width;
    }

    getHeight() {
        return this._height;
    }
    
    setHeight(height) {
        this._height = height;
    }

    getName() {
        return this._name;
    }

    setName(name) {
        this._name = name;
    }

    drawImage(ctx, filePath, x, y, width, height) {
        const context = ctx;
        if (context) {
            if (filePath) {
                var image = new Image();
                image.onload = function () {
                    context.drawImage(image, x, y, width, height);
                    console.info("Image successfully loaded");
                }
                image.src = filePath;
            }
            context.save();
        }
    }
}