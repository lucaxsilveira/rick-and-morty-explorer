import { queryString, parse } from "./queryString";

describe("Object to query string", () => {
    it("should create valid query string when an object as passed", () => {
        const obj = {
            name: "Lucas",
            profession: "front-end",
        };

        expect(queryString(obj)).toBe("name=Lucas&profession=front-end");
    });

    it("should create a valid query string even when an array is passed as value", () => {
        const obj = {
            name: "Lucas",
            skills: ["JS", "CSS"],
        };

        expect(queryString(obj)).toBe("name=Lucas&skills=JS,CSS");
    });

    it("should thrown an error when an object is passed as value", () => {
        const obj = {
            name: "Lucas",
            skills: { name: "teste" },
        };

        expect(() => queryString(obj)).toThrowError();
    });
});

describe("Query string to object", () => {
    it("should be able to convert a query string to object", () => {
        const queryString = "name=Lucas&profession=front-end";
        expect(parse(queryString)).toEqual({
            name: "Lucas",
            profession: "front-end",
        });
    });

    it("should convert a aquery string to an object taking care of comma separeted value", () => {
        const queryString = "name=Lucas&abilities=JS,CSS";
        expect(parse(queryString)).toEqual({
            name: "Lucas",
            abilities: ["JS", "CSS"],
        });
    });
});
