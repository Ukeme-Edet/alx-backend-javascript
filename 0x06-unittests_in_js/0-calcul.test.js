const { describe, it } = require("mocha");
const assert = require("assert");
const { calculateNumber } = require("./0-calcul");
describe("add", () => {
    it("should add two integers", () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it("should add two floats", () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it("should add an integer and a float", () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
    it("should add two negative integers", () => {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
