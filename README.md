L.CanvasIcon
============

Canvas Icon plugin for Leaflet library.

Check out code and the [example](http://sashakavun.github.io/leaflet-canvasicon/example.html).

Usage
-----

Simpliest way to use canvas icon is to pass `drawIcon` callback in the options:

```js
var myIcon = L.canvasIcon({
    drawIcon: function (icon, type) {
        ... // drawing code here
    }
});
```

Or, you may extend `L.CanvasIcon` to implement all drawing logic inside it:

```js
L.MyIcon = L.CanvasIcon({
    _setIconStyles: function (icon, type) {
        ... // drawing code here
        L.CanvasIcon.prototype._setIconStyles.apply(this, arguments); // do not forget this line, or icons positioning will break
    }
});

var anotherIcon = new L.MyIcon();
```

First argument of the callback will contain canvas DOM element, and second will contain string icon type descriptor ("icon" or "shadow").

Pass created icon in the marker options or set it on the already created marker:

```js
var myLatlng = L.latLng(...);
var myMarker = L.marker(myLatlng, { icon: myIcon });

var anotherLatlng = L.latLng(...);
var anotherMarker = L.marker(anotherLatlng);
anotherMarker.setIcon(anotherIcon);
```
