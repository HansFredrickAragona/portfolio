import { act, cleanup, render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ScrollMotion } from "./ScrollMotion";

const motion = vi.hoisted(() => ({
  clean: undefined as undefined | (() => void),
  fail: false,
  reduced: false,
  refresh: vi.fn(),
  kill: vi.fn(),
  progress: vi.fn(),
}));
vi.mock("gsap", () => ({
  default: {
    registerPlugin: vi.fn(),
    matchMedia: () => ({
      add: (_query: string, setup: () => () => void) => {
        if (!motion.reduced) motion.clean = setup();
      },
      revert: () => motion.clean?.(),
    }),
    context: () => ({ add: (setup: () => void) => setup(), revert: vi.fn() }),
    from: (nodes: HTMLElement[]) => {
      nodes.forEach((node) => {
        node.style.opacity = "0";
      });
      return { play: vi.fn(), progress: motion.progress };
    },
    set: vi.fn(),
  },
}));
vi.mock("gsap/ScrollTrigger", () => ({
  ScrollTrigger: {
    create: () => {
      if (motion.fail) throw new Error("Unavailable animation engine");
      return { kill: motion.kill };
    },
    refresh: motion.refresh,
  },
}));

function Fixture() {
  return (
    <main data-portfolio-home>
      <section data-motion-section>
        <div data-reveal style={{ color: "red" }}>
          <button>Focus me</button>
          <details>
            <summary>Skills</summary>Content
          </details>
          {/* Native image deliberately exercises captured load events. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Test" src="/test.png" />
        </div>
      </section>
      <ScrollMotion />
    </main>
  );
}

beforeEach(() => {
  vi.clearAllMocks();
  motion.clean = undefined;
  motion.fail = false;
  motion.reduced = false;
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    return window.setTimeout(() => callback(0), 1);
  });
  vi.stubGlobal("cancelAnimationFrame", (id: number) => window.clearTimeout(id));
  vi.useFakeTimers();
});
afterEach(() => {
  cleanup();
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe("ScrollMotion progressive enhancement", () => {
  it("restores original visible styles when trigger setup fails", () => {
    motion.fail = true;
    const { container } = render(<Fixture />);
    const target = container.querySelector<HTMLElement>("[data-reveal]")!;
    expect(target.style.opacity).toBe("");
    expect(target.style.color).toBe("red");
  });

  it("leaves reduced-motion content untouched", () => {
    motion.reduced = true;
    const { container } = render(<Fixture />);
    expect(container.querySelector<HTMLElement>("[data-reveal]")!.style.opacity).toBe("");
    expect(motion.refresh).not.toHaveBeenCalled();
  });

  it("reveals focused content and batches layout refresh, removing handlers on teardown", () => {
    const { container, unmount, getByRole } = render(<Fixture />);
    const root = container.querySelector("main")!;
    const details = container.querySelector("details")!;
    const image = container.querySelector("img")!;
    act(() => getByRole("button").focus());
    expect(motion.progress).toHaveBeenCalledWith(1);
    act(() => {
      details.dispatchEvent(new Event("toggle"));
      image.dispatchEvent(new Event("load"));
      vi.runAllTimers();
    });
    expect(motion.refresh).toHaveBeenCalledTimes(1);
    unmount();
    expect(motion.kill).toHaveBeenCalled();
    root.dispatchEvent(new Event("toggle"));
    act(() => vi.runAllTimers());
    expect(motion.refresh).toHaveBeenCalledTimes(1);
  });
});
