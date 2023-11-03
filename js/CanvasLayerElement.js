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
    _filePath; _textContent;

    /**
     * Initializes a new CanvasLayer and add it to the _layerElements collection
     * @param {CanvasLayer} layer the parent layer of the Element
     */
    constructor(name = "New Element", width = 0, height = 0) {
        this.setName(name);
        this.setWidth(width);
        this.setHeight(height);
        this.setElementMovability(false);
        this.setElementVisibility(true);
        this.setIndex(1);
    }

    /**
     * Gets the X Axis Position of the element
     * @returns {number} x axis position of the element
     */
    getPosX() {
        return this._posX != 0 ? this._posX : 0;
    }

    /**
     * Sets the X Axis Position of the element
     * @param {number} posX 
     */
    setPosX(posX) {
        this._posX = posX;
    }

    /**
     * Gets the Y Axis Position of the element
     * @returns {number} y axis position of the element
     */
    getPosY() {
        return this._posY != 0 ? this._posY : 0;
    }

    /**
     * Sets the Y Axis Position of the element
     * @param {number} posY 
     */
    setPosY(posY) {
        this._posY = posY;
    }

    /**
     * Gets the current width of the element
     * @returns {number} width
     */
    getWidth() {
        return this._width;
    }
    
    /**
     * Sets the current width of the element
     * @param {number} width 
     */
    setWidth(width) {
        this._width = width;
    }

    /**
     * Gets the current height of the element
     * @returns {number} height
     */
    getHeight() {
        return this._height;
    }
    
    /**
     * Sets the current height of the element
     * @param {number} height 
     */
    setHeight(height) {
        this._height = height;
    }

    /**
     * Gets the current name of the element
     * @returns {string} name
     */
    getName() {
        return this._name;
    }

    /**
     * Sets the current name of the element
     * @param {string} name 
     */
    setName(name) {
        this._name = name;
    }

    /**
     * Get the index of the element
     * 
     * The higher the number, the higher the index is
     * @returns {number} index
     */
    getIndex() {
        return this._index;
    }

    /**
     * Set the index of the element
     * 
     * The higher the number, the higher the index is
     * @param {number} index 
     */
    setIndex(index) {
        this._index = index;
    }

    /**
     * Get the visibility of the element
     * @returns {boolean} true if visible otherwise false
     */
    getElementVisibility() {
        return this._isElementVisible;
    }

    /**
     * Set the visibility of the element
     * @param {boolean} isElementVisible true if visible otherwise false
     */
    setElementVisibility(isElementVisible) {
        this._isElementVisible = isElementVisible;
    }

    /**
     * Get the state of the layer if it is movable or not
     * @returns {boolean} true if the layer is movable otherwise false
     */
    getElementMovability() {
        return this._isElementMovable;
    }

    /**
     * Set the state of the layer if it is movable or not
     * @param {boolean} isElementMovable 
     */
    setElementMovability(isElementMovable) {
        this._isElementMovable = isElementMovable;
    }

    /**
     * Gets the image's relative path
     * @returns filePath
     */
    getImageFilePath() {
        return this._filePath;
    }

    /**
     * Sets the image's path by using relative path
     * @param {string} filePath 
     */
    setImageFilePath(filePath) {
        this._filePath = filePath
    }

    /**
     * 
     * @returns textContent
     */
    getTextContent() {
        return this._textContent;
    }

    setTextContent(textContent) {
        this._textContent = textContent;
    }

    /**
     * Draw the image using current context provided by the ParentContainer
     * @param {CanvasRenderingContext2D} ctx 
     * @param {string} filePath 
     * @param {number} x 
     * @param {number} y 
     * @param {number} width 
     * @param {number} height 
     */
    drawImage(ctx, x, y, width, height) {
        const context = ctx;
        if (context) {
            var image = new Image();
            image.onload = function () {
                context.beginPath();
                context.drawImage(image, x, y, width, height);
                context.closePath();
                console.info("Image successfully loaded");
            }
            image.onerror = function() {
                console.error("Image failed to load.");
            }
            image.src = this.getImageFilePath();
            context.save();
        }
    }

    drawText(ctx, text) {
        const context = ctx;
        if (context) {
            if (text) {

            }
        }
    }
}