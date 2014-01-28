/*global L */
(function () {
    'use strict';

    /**
     * Canvas Icon
     * @type {L.CanvasIcon}
     * @extends {L.Icon}
     */
    L.CanvasIcon = L.Icon.extend({
        options: {
            /** @var {L.Point} */
            iconSize: [24, 24],
            /** @var {L.Point} */
            iconAnchor: [12, 12],
            /** @var {function} */
            drawIcon: null,
            /* @var {string} */
            className: 'leaflet-canvas-icon'
        },

        /**
         * @param {HTMLElement} oldIcon
         * @returns {HTMLCanvasElement}
         */
        createIcon: function (oldIcon) {
            var size = L.point(this.options.iconSize);
            var icon = (oldIcon && (oldIcon.tagName == 'CANVAS')) ? oldIcon : document.createElement('canvas');
            icon.width = size.x;
            icon.height = size.y;
            this._setIconStyles(icon, 'icon');
            return icon;
        },

        /**
         * @param {HTMLElement} oldIcon
         * @returns {null}
         */
        createShadow: function (oldIcon) {
            return null;
        },

        /**
         * @param {HTMLElement} icon
         * @param {string} type
         * @private
         */
        _setIconStyles: function (icon, type) {
            if (typeof this.options.drawIcon == 'function') {
                this.options.drawIcon.apply(this, arguments);
            }
            L.Icon.prototype._setIconStyles.apply(this, arguments);
        }
    });

    /**
     * Canvas Icon factory
     * @param {Object} options
     * @returns {L.CanvasIcon}
     */
    L.canvasIcon = function (options) {
        return new L.CanvasIcon(options);
    };

    /**
     * AMD compatibility
     */
    if ((typeof define == 'function') && define.amd) {
        define(L.CanvasIcon);
    }

}());
