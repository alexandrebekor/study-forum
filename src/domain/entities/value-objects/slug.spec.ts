import { expect, it } from "vitest";
import { Slug } from "./slug";

it('should be able to convert a title to slug format', () => {
  const slug = Slug.createFromText('This  is- a big idea')

  expect(slug.value).toEqual('this-is-a-big-idea')
})