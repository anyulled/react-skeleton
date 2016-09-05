import { usersLoad } from "../../../app/actions/users/users";
import mocha from "mocha";
import { expect } from "chai";

describe("users actions", () => {
  it("should provide usersLoad action", () => {
    expect(usersLoad).to.be.a("function");
  });
});