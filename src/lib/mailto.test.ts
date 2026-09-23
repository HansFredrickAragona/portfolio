import { describe, expect, it } from "vitest";
import { buildMailto } from "@/lib/mailto";

describe("buildMailto", () => {
  it("encodes subject and body safely", () => {
    const url = buildMailto({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello & interest\nLine two",
    });
    expect(url.startsWith("mailto:hansfredrick2600@gmail.com?")).toBe(true);
    expect(url).toContain("subject=");
    expect(url).toContain("body=");
    expect(url).not.toContain(" ");
    expect(url).toContain(encodeURIComponent("Hello & interest\nLine two"));
  });

  it("includes sender contact in body", () => {
    const url = buildMailto({
      name: "Jane",
      email: "jane@example.com",
      message: "Hi",
    });
    const decoded = decodeURIComponent(url);
    expect(decoded).toContain("jane@example.com");
    expect(decoded).toContain("Jane");
  });
});
