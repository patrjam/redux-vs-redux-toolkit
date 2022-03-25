module.exports = {
  testURL: "http://localhost/",
  setupFiles: ["<rootDir>/jest.regeneratorRuntime.js"],
  testMatch: ["<rootDir>/tests/*.spec.js"],
  verbose: true,

  collectCoverageFrom: ["tests/*.spec.js"],
  testEnvironment: "node",
};
