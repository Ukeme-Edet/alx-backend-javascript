const assert = require("assert");
const calculateNumber = require("./0-calcul");
describe("calculateNumber", () => {
    it("should add two rounded integers", () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });
    it("should add a rounded integer and a rounded float", () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it("should add second rounded integer and a rounded float", () => {
        assert.strictEqual(calculateNumber(1.2, 3), 4);
    });
    it("should add two rounded floats", () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
});
