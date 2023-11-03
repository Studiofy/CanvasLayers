import ParentContainer from './CanvasLayerContainer.js';
import CanvasLayer from './CanvasLayer.js';
import CanvasLayerElement from './CanvasLayerElement.js';

let container = new ParentContainer("canvas", "2d");

let layerList = document.getElementById("layerContainerDOM");

let btnNewLayer = document.getElementById("btnNewLayer");
let btnNewImage = document.getElementById("btnNewImage");
let btnClearLayers = document.getElementById("btnClearLayers");
let btnToggleLayerMovability = document.getElementById("btnToggleLayerMovability");
let btnHideLayer = document.getElementById("btnHideLayer");
let btnShowLayer = document.getElementById("btnShowLayer");
let btnSwapLayer = document.getElementById("btnSwapLayer");

let layerCount = 1;

btnToggleLayerMovability.addEventListener('click', function() {
    for (let layer of container.getLayers()) {
        layer.setLayerMovability(!layer.getLayerMovability());
        container.displayLayers(true);
    }
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

btnNewLayer.addEventListener("click", function() {
    let newLayer = new CanvasLayer('', container.getCanvas().width, container.getCanvas().height);
    newLayer.setPosX(0);
    newLayer.setPosY(0);
    newLayer.setFillColor(getRandomColor());
    newLayer.setIndex(layerCount);
    newLayer.setName(`Layer ${layerCount}`);
    newLayer.drawLayer(container.get2DContext());
    container.addLayer(newLayer);
    layerCount++;
});

btnClearLayers.addEventListener('click', function() {
    let layers = container._layers;
    if (layers.length != 0) {
        let result = confirm(`Are you sure you want to clear layers?\nCurrent Layers: ${layers.length}`);
        if (result === true) {
            container._layers = [];
            container._ctx.clearRect(0, 0, container._canvas.width, container._canvas.height);
        }
    }
    else {
        alert("No layers to be removed");
    }
});

btnSwapLayer.addEventListener('click', function() {
    const layers = container.getLayers();
    for (let i = 1; i < layers.length; i++) {
        let fLayer = layers[i - 1];
        let sLayer = layers[i];
        container.swapLayerIndex(fLayer, sLayer);
    }
    container.displayLayers(true);
});

btnNewImage.addEventListener('click', function() {
    let newElement = new CanvasLayerElement('AS-DPS Dark Logo', 200, 200);
    newElement.setImageFilePath('assets/asdps-light.png');
    newElement.setPosX(10);
    newElement.setPosY(10);
    newElement.drawImage(container.getCanvas().getContext('2d'), newElement.getPosX(), newElement.getPosY(), newElement.getWidth(), newElement.getHeight());
    let newLayer = new CanvasLayer(newElement.getName(), newElement.getWidth(), newElement.getHeight());
    newLayer.addElement(newElement);
    container.addLayer(newLayer);
});