import { LightningElement, api } from 'lwc';

export default class LwcSkeleton extends LightningElement {

    @api type = 'text';     // text | small-text | avatar | card | table | rectangle
    @api lines = 3;
    @api rows = 5;
    @api columns = 3;
    @api width;
    @api height;

    get isText() {
        return this.type === 'text' || this.type === 'small-text';
    }

    get isAvatar() {
        return this.type === 'avatar';
    }

    get isCard() {
        return this.type === 'card';
    }

    get isTable() {
        return this.type === 'table';
    }

    get isRectangle() {
        return this.type === 'rectangle';
    }

    get linesArray() {
        return Array.from({ length: this.lines }, (_, i) => i);
    }

    get rowsArray() {
        return Array.from({ length: this.rows }, (_, i) => i);
    }

    get columnsArray() {
        return Array.from({ length: this.columns }, (_, i) => i);
    }

    get computedTextClass() {
        return this.type === 'small-text'
            ? 'skeleton-line small'
            : 'skeleton-line';
    }

    get rectangleStyle() {
        return `
            width:${this.width || '100%'};
            height:${this.height || '150px'};
        `;
    }
}