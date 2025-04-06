import { createServerFn } from "@tanstack/react-start";

export const fnTest = createServerFn({ method: "GET" }).handler(() => {
  return "Hello";
});
