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

/**
 * The LayerContainer Class
 * @property _canvas is used to store the canvas element
 * @property _ctx is used to get the context of the canvas
 * @property _layers is used to store the collection of canvas layer
 */
export default class ParentContainer
{
    _canvas;
    _ctx;

    _layers = [];

    /**
     * Initializes the canvas
     * @param Id The base canvas' ID
     * @param ctx The existing context of user (2D)
     * 
     */
    constructor(Id, ctx)
    {
        this.setCanvas(document.getElementById(Id));
        this.set2DContext(ctx);
    }

    /**
     * Gets the current context of the canvas
     * @returns ctx (context)
     */
    get2DContext() {
        return this._ctx;
    }

    /**
     * Sets the current context of the canvas
     * @param {string} ctx 
     */
    set2DContext(ctx) {
        this._ctx = this.getCanvas().getContext(ctx);
    }

    /**
     * Gets the canvas' Id
     * @returns canvas
     */
    getCanvas() {
        return this._canvas;
    }

    /**
     * Sets the canvas' Id
     * @param {string} canvas 
     */
    setCanvas(canvas) {
        this._canvas = canvas;
    }

    /**
     * Gets the list of layers
     * @returns layers
     */
    getLayers() {
        return this._layers;
    }

    /**
     * Displays the sorted layers based on their indexes
     * @param {boolean} sorted true to display layers based on their index or false to display layers based on their arrangement
     */
    displayLayers(sorted)
    {
        let IsDisplaySorted = sorted ? true : false;
        if (IsDisplaySorted && layerContainerDOM) {
            if (this._layers.length != 0) {
                const sortedLayers = this.getLayers().slice().sort((a, b) => a._index - b._index);
                this.get2DContext().clearRect(0, 0, this.getCanvas().width, this.getCanvas().height);
                layerContainerDOM.innerHTML = "";
                for (const layer of sortedLayers) {
                    if (layer.getLayerVisibility() === true) {
                        layer.drawLayer(this.get2DContext());

                        let columnItem = document.createElement("div");
                        columnItem.classList.add("row", "mt-2", "mb-3");
                        columnItem.style.maxHeight = '30px';
                        let buttonItem = document.createElement("button");
                        buttonItem.classList.add("btn", "btn-outline-primary", "mx-3", "my-1");
                        buttonItem.style.backgroundColor = `${layer.getFillColor()}`;
                        buttonItem.style.color = 'black';
                        buttonItem.textContent = `${layer.getName()}`;
                        buttonItem.setAttribute('data-default-name', `${layer.getName()}`);
                        buttonItem.addEventListener('click', () => {
                            let defaultName = buttonItem.getAttribute('data-default-name');
                            // Get the current visibility
                            let currentVisibility = layer.getLayerVisibility(); 
                            // Toggle the visibility of the layer
                            layer.setLayerVisibility(!currentVisibility);
                            buttonItem.textContent = !currentVisibility ? defaultName : `${defaultName} (hidden)`;
                            this.displayLayers(IsDisplaySorted);
                        });
                        columnItem.appendChild(buttonItem);
                        layerContainerDOM.appendChild(columnItem);
                    } else {
                        let columnItem = document.createElement("div");
                        columnItem.classList.add("row", "mt-2", "mb-3");
                        columnItem.style.maxHeight = '30px';
                        let buttonItem = document.createElement("button");
                        buttonItem.classList.add("btn", "btn-outline-primary", "mx-3", "my-1");
                        buttonItem.style.backgroundColor = `${layer.getFillColor()}`;
                        buttonItem.style.color = 'black';
                        buttonItem.textContent = `${layer.getName()}`;
                        buttonItem.setAttribute('data-default-name', `${layer.getName()}`);
                        buttonItem.addEventListener('click', () => {
                            let defaultName = buttonItem.getAttribute('data-default-name');
                            // Get the current visibility
                            let currentVisibility = layer.getLayerVisibility(); 
                            // Toggle the visibility of the layer
                            layer.setLayerVisibility(!currentVisibility);
                            buttonItem.textContent = !currentVisibility ? defaultName : `${defaultName} (hidden)`;
                            this.displayLayers(IsDisplaySorted);
                        });
                        columnItem.appendChild(buttonItem);
                        layerContainerDOM.appendChild(columnItem);
                    }
                }
                console.log("Canvas ID: " + this._canvas.id + "\nLayers: " + JSON.stringify(sortedLayers, null, 2));
            }
            else {
                console.error("Canvas ID: " + this._canvas.id + "\nLayers: No Layers");
            }
        }
        else {
            if (this._layers.length != 0) {
                this.get2DContext().clearRect(0, 0, this.getCanvas().width, this.getCanvas().height);
                layerContainerDOM.innerHTML = "";
                for (const layer of this.getLayers()) {
                    if (layer.getLayerVisibility() === true) {
                        layer.drawLayer(this.get2DContext());
                        
                        let columnItem = document.createElement("div");
                        columnItem.classList.add("row", "mt-2", "mb-3");
                        columnItem.style.maxHeight = '30px';
                        let buttonItem = document.createElement("button");
                        buttonItem.classList.add("btn", "btn-outline-primary", "mx-3", "my-1");
                        buttonItem.style.backgroundColor = `${layer.getFillColor()}`;
                        buttonItem.style.color = 'black';
                        buttonItem.textContent = `${layer.getName()}`;
                        buttonItem.setAttribute('data-default-name', `${layer.getName()}`);
                        buttonItem.addEventListener('click', () => {
                            let defaultName = buttonItem.getAttribute('data-default-name');
                            // Get the current visibility
                            let currentVisibility = layer.getLayerVisibility(); 
                            // Toggle the visibility of the layer
                            layer.setLayerVisibility(!currentVisibility);
                            buttonItem.textContent = !currentVisibility ? defaultName : `${defaultName} (hidden)`;
                            this.displayLayers(IsDisplaySorted);
                        });
                        columnItem.appendChild(buttonItem);
                        layerContainerDOM.appendChild(columnItem);
                    } else {
                        let columnItem = document.createElement("div");
                        columnItem.classList.add("row", "mt-2", "mb-3");
                        columnItem.style.maxHeight = '30px';
                        let buttonItem = document.createElement("button");
                        buttonItem.classList.add("btn", "btn-outline-primary", "mx-3", "my-1");
                        buttonItem.style.backgroundColor = `${layer.getFillColor()}`;
                        buttonItem.style.color = 'black';
                        buttonItem.textContent = `${layer.getName()}`;
                        buttonItem.setAttribute('data-default-name', `${layer.getName()}`);
                        buttonItem.addEventListener('click', () => {
                            let defaultName = buttonItem.getAttribute('data-default-name');
                            // Get the current visibility
                            let currentVisibility = layer.getLayerVisibility(); 
                            // Toggle the visibility of the layer
                            layer.setLayerVisibility(!currentVisibility);
                            buttonItem.textContent = !currentVisibility ? defaultName : `${defaultName} (hidden)`;
                            this.displayLayers(IsDisplaySorted);
                        });
                        columnItem.appendChild(buttonItem);
                        layerContainerDOM.appendChild(columnItem);
                    }
                    
                }
                console.log("Canvas ID: " + this._canvas.id + "\nLayers: " + JSON.stringify(this._layers, null, 2));
            }
            else {
                console.error("Canvas ID: " + this._canvas.id + "\nLayers: No Layers");
            }
        }
    }

    /**
     * Insert a new layer on the base canvas and
     * automatically calls the displayLayers() to update the container
     * @param {Layer} layer The item that will be added to the LayerContainer
     */
    addLayer(layer)
    {
        this.getLayers().push(layer);
        for (let layer of this.getLayers()) {
            if (layer.getLayerMovability() === true) {
                this.applyMouseEventsOnLayer(layer.getName());
            } else {
                this.removeMouseEventsOnLayer(layer.getName());
            }
        }
        this.displayLayers(true);
    }

    /**
     * Selects a layer from the LayerContainer
     * @param {string} name 
     */
    selectLayer(name) {
        const selectedLayer = this.getLayers().find(layer => layer._name === name);
        if (selectedLayer != null) {
            return selectedLayer;
        }
        else {
            console.error(`Layer with name "${name}" not found in the collection.`);
            return null;
        }
    }

    /**
     * Swap the indexes of the multiple selected layers
     * @param {Layer[]} layers Array of layers to be swapped using their indexes
     */
    swapLayerIndex(...layers) {
        for (let i = 1; i < layers.length; i++) {
            const currentLayer = layers[i];
            const previousLayer = layers[i - 1];
            if (currentLayer instanceof CanvasLayer && previousLayer instanceof CanvasLayer) {
                const tempIndex = currentLayer.getIndex();
                currentLayer.setIndex(previousLayer.getIndex());
                previousLayer.setIndex(tempIndex);
            }
        }
    }

    applyMouseEventsOnLayer(name) {
        const selectedLayer = this.selectLayer(name);
        if (selectedLayer != null) {
            let isDragging = false;
            let offsetX, offsetY;
            this.getCanvas().addEventListener('mousedown', (e) => {
                console.info("Mouse Down Triggered")
                const mouseX = e.clientX - this.getCanvas().getBoundingClientRect().left;
                const mouseY = e.clientY - this.getCanvas().getBoundingClientRect().top;
                if (mouseX >= selectedLayer.getPosX() &&
                    mouseX <= selectedLayer.getPosX() + selectedLayer.getWidth() &&
                    mouseY >= selectedLayer.getPosY() &&
                    mouseY <= selectedLayer.getPosY() + selectedLayer.getHeight()) {
                    const topLayer = this.getLayers().reduce((prevLayer, currentLayer) => {
                        if (mouseX >= currentLayer.getPosX() &&
                            mouseX <= currentLayer.getPosX() + currentLayer.getWidth() &&
                            mouseY >= currentLayer.getPosY() &&
                            mouseY <= currentLayer.getPosY() + currentLayer.getHeight()) {
                            return prevLayer.getIndex() > currentLayer.getIndex() ? prevLayer : currentLayer;
                        }
                        return prevLayer;
                    }, selectedLayer);
                    if (topLayer === selectedLayer) {
                        isDragging = true;
                        offsetX = mouseX - selectedLayer.getPosX();
                        offsetY = mouseY - selectedLayer.getPosY();
                    }
                }
            });
            this.getCanvas().addEventListener('mousemove', (e) => {
                if (isDragging) {
                    console.info("Mouse is Dragging")
                    const mouseX = e.clientX - this.getCanvas().getBoundingClientRect().left;
                    const mouseY = e.clientY - this.getCanvas().getBoundingClientRect().top;
    
                    // Calculate the new position
                    const newX = mouseX - offsetX;
                    const newY = mouseY - offsetY;
    
                    // Update the position while preserving the z-index
                    selectedLayer.setPosX(newX);
                    selectedLayer.setPosY(newY);
    
                    // Redraw the canvas with the updated position and z-index
                    this.displayLayers(true); // Pass true to indicate that the layers are sorted by z-index
                }
            });
            this.getCanvas().addEventListener('mouseup', (e) => {    
                console.info("Mouse Up Triggered")
                isDragging = false;
            });
        }
    }

    removeMouseEventsOnLayer(name) {
        const selectedLayer = this.selectLayer(name);
        if (selectedLayer != null) {
            let isDragging = false;
            let offsetX, offsetY;
            this.getCanvas().removeEventListener('mousedown', (e) => {
                console.info("Mouse Down Triggered")
                const mouseX = e.clientX - this.getCanvas().getBoundingClientRect().left;
                const mouseY = e.clientY - this.getCanvas().getBoundingClientRect().top;
                if (mouseX >= selectedLayer.getPosX() &&
                    mouseX <= selectedLayer.getPosX() + selectedLayer.getWidth() &&
                    mouseY >= selectedLayer.getPosY() &&
                    mouseY <= selectedLayer.getPosY() + selectedLayer.getHeight()) {
                    const topLayer = this.getLayers().reduce((prevLayer, currentLayer) => {
                        if (mouseX >= currentLayer.getPosX() &&
                            mouseX <= currentLayer.getPosX() + currentLayer.getWidth() &&
                            mouseY >= currentLayer.getPosY() &&
                            mouseY <= currentLayer.getPosY() + currentLayer.getHeight()) {
                            return prevLayer.getIndex() > currentLayer.getIndex() ? prevLayer : currentLayer;
                        }
                        return prevLayer;
                    }, selectedLayer);
                    if (topLayer === selectedLayer) {
                        isDragging = true;
                        offsetX = mouseX - selectedLayer.getPosX();
                        offsetY = mouseY - selectedLayer.getPosY();
                    }
                }
            });
            this.getCanvas().removeEventListener('mousemove', (e) => {
                if (isDragging) {
                    console.info("Mouse is Dragging")
                    const mouseX = e.clientX - this.getCanvas().getBoundingClientRect().left;
                    const mouseY = e.clientY - this.getCanvas().getBoundingClientRect().top;
    
                    // Calculate the new position
                    const newX = mouseX - offsetX;
                    const newY = mouseY - offsetY;
    
                    // Update the position while preserving the z-index
                    selectedLayer.setPosX(newX);
                    selectedLayer.setPosY(newY);
    
                    // Redraw the canvas with the updated position and z-index
                    this.displayLayers(true); // Pass true to indicate that the layers are sorted by z-index
                }
            });
            this.getCanvas().removeEventListener('mouseup', (e) => {    
                console.info("Mouse Up Triggered")
                isDragging = false;
            });
        }
    }
}