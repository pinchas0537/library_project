import test from "node:test";
import assert from "node:assert";
import { login, register } from "../services/usersS.js";

const userT = { id: "idTest1", username: "test1", password: "passTest1", createdAt: new Date().toISOString() }

test.describe("Testing user functions in the service folder (success)", () => {
    test("Testing the register function", (() => {
        assert.deepStrictEqual(register("test1", "passTest1"), true)
    }))
    test("Testing the login function", (() => {
        assert.deepStrictEqual(login("test1", "passTest1"), userT)
    }))
})