const { createDefaultPreset } = require("ts-jest");

const defaultPreset = createDefaultPreset();

/** @type {import("jest").Config} **/
module.exports = {
  ...defaultPreset,
  testEnvironment: "node",
};