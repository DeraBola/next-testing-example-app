import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";
import fetchTodos from "../fetchTodos";

describe("fetch todos lib function", () => {
  it("should return the correct number of todo items", async () => {
    const todosArray = await fetchTodos();
    expect(todosArray.length).toBe(4);
  });
});
