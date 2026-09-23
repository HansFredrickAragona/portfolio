import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactComposer } from "@/components/sections/ContactComposer";
import { profile } from "@/models/profile";

describe("ContactComposer", () => {
  it("shows validation errors without opening mail", async () => {
    const user = userEvent.setup();
    render(<ContactComposer />);
    await user.click(screen.getByRole("button", { name: "Continue to email" }));
    expect(screen.getByText("Enter your name.")).toBeInTheDocument();
  });

  it("builds a mailto when fields are valid", async () => {
    const user = userEvent.setup();
    render(<ContactComposer />);
    await user.type(screen.getByLabelText("Name"), "Jane Doe");
    await user.type(screen.getByLabelText("Email"), "jane@example.com");
    await user.type(screen.getByLabelText("Message"), "Hello there");
    await user.click(screen.getByRole("button", { name: "Continue to email" }));
    expect(screen.getByText(/Opening your email application/i)).toBeInTheDocument();
    expect(profile.email).toBe("hansfredrick2600@gmail.com");
  });

  it("exposes copy email fallback", async () => {
    const user = userEvent.setup();
    render(<ContactComposer />);
    await user.click(screen.getByRole("button", { name: "Copy email" }));
    expect(await screen.findByText(/Email copied|Could not copy/i)).toBeInTheDocument();
  });
});
