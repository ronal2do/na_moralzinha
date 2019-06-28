export class PanelHelper {
  static _panel;
  static onClose;

  static setPanelReference(element) {
    this._panel = element;
  }

  // static show(type, position, component) {
  static show(position) {
    if (this._panel) {
      this._panel.show(position);
    }
  }

  static setPosition(position) {
    if (this._panel) {
      this._panel.show(position);
    }
  }

  static setOnClose(onClose) {
    this.onClose = onClose;
  }

  static dismiss() {
    if (this._panel) {
      this._panel.show(0);
    }
  }

  static onClose() {
    if (typeof this.onClose === 'function') {
      this.onClose();
    }
  }
}