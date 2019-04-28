module.exports = {
    moduleFileExtensions: [
      "js"
    ],
    globals: {
      "ts-jest": {
        useBabelrc: true,
        tsConfigFile: "jest.tsconfig.json"
      }
    },
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "enzyme.js"
    ],
    setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "text-summary"
    ],
    moduleNameMapper: {
        "\\.(css|less|sass|scss)$": "<rootDir>/__mocks__/styleMock.js",
        "\\.(gif|ttf|eot|svg)$": "<rootDir>/__mocks__/fileMock.js"
      }
  };