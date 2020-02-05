import hello from '..'
describe("Hello", () => {
    it("empty hello", () => {
      expect(hello()).toBe("Hello, World");
    });
    it("hello world", () => {
      expect(hello('World')).toBe("Hello, World");
    });
  });