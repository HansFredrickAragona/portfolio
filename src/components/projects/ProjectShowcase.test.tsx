import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProjectShowcase } from "@/components/projects/ProjectShowcase";
import { projects } from "@/models/projects";

describe("ProjectShowcase", () => {
  it("selects Soil Scan first and expands details without hover", async () => {
    const user = userEvent.setup();
    render(<ProjectShowcase projects={projects} />);

    const expand = screen.getByRole("button", { name: "Expand details" });
    expect(expand).toHaveAttribute("aria-expanded", "false");
    const panel = document.getElementById(expand.getAttribute("aria-controls")!);
    expect(panel).toHaveAttribute("hidden");

    await user.click(expand);
    expect(panel).not.toHaveAttribute("hidden");
    expect(screen.getByRole("button", { name: "Close details" })).toHaveAttribute(
      "aria-expanded",
      "true",
    );
    expect(screen.getByText(/Soil image input/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /View fertilizer recommendation demo/i }),
    ).toHaveAttribute("href", "https://frontend-delta-rust-70.vercel.app/");
    expect(screen.getByRole("link", { name: /Read case study/i })).toHaveAttribute(
      "href",
      "/work/soil-scan",
    );
  });

  it("collapses details when switching projects and hides unfinished actions", async () => {
    const user = userEvent.setup();
    render(<ProjectShowcase projects={projects} />);

    await user.click(screen.getByRole("button", { name: "Expand details" }));
    expect(screen.getByRole("button", { name: "Close details" })).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /Resume Job Tracker/ }));
    expect(screen.getByRole("button", { name: "Expand details" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
    expect(screen.queryByRole("link", { name: /View live/i })).not.toBeInTheDocument();
    expect(screen.getByText(/In development — preview only/i)).toBeInTheDocument();
  });

  it("marks the active project for assistive tech", () => {
    render(<ProjectShowcase projects={projects} />);
    const list = screen.getByRole("button", { name: /Soil Scan/ });
    expect(list).toHaveAttribute("aria-current", "true");
    const other = screen.getByRole("button", { name: /BaguioReadyGIS/ });
    expect(other).not.toHaveAttribute("aria-current");
  });

  it("keeps illustration alt text and illustrative badge", () => {
    render(<ProjectShowcase projects={projects} />);
    const preview = screen.getByRole("img", {
      name: /Illustrative artwork for Soil Scan/i,
    });
    expect(preview).toBeInTheDocument();
    expect(screen.getByText("Illustrative artwork")).toBeInTheDocument();
  });
});
