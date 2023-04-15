// src/event-bus.js
import { createApp } from "vue";
import mitt from "mitt";

const emitter = mitt();

const app = createApp({});
app.provide("eventBus", emitter);

export default emitter;
