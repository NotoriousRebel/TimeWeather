const jestConfig = {
    // Assumes typescript files are in src folder
    //Transform config tells jest to use ts-jest
    //Credits to: basarat.gitbooks.io/typescript/docs/testing/jest.html

    "moduleFileExtensions" : ["js", "ts"],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "verbose": true,
    "testMatch": [
        "**/tests/**/*.test.ts"
    ],
    "testEnvironment": "node"
};

module.exports = jestConfig;