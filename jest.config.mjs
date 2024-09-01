import { defaults } from "jest-config";

export default {
  transform: {
    "^.+\\.js$": "babel-jest",
  },
  setupFilesAfterEnv: ["./utils/handleDBInTest.js"],
  testEnvironment: "node",
  moduleFileExtensions: [...defaults.moduleFileExtensions, "js", "mjs"],
};
