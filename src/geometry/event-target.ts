import { IShapeData, EventListener } from "./interfaces";

/**
 * Represents an event target that can register event listeners and dispatch events to them.
 */
 class EventTarget {
  private listeners: Record<string, EventListener[]> = {};

  /**
   * Adds an event listener for a specific event type.
   * @param {string} type - The type of the event.
   * @param {EventListener} listener - The event listener function.
   */
  addEventListener(type: string, listener: EventListener) {
    if (!this.listeners[type]) {
      this.listeners[type] = [];
    }
    this.listeners[type].push(listener);
  }

  /**
   * Dispatches an event to all registered listeners for the specified event type.
   * @param {shapeData} event - The event data to dispatch.
   */
  dispatchEvent(event: IShapeData) {
    const eventListeners = this.listeners[event.type];
    if (eventListeners) {
      eventListeners.forEach((listener) => listener(event));
    }
  }
}

export { EventTarget };
