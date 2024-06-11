import { vi } from "vitest";

declare global {
  namespace globalThis {
    let fetch: vi.MockFunction;
  }
}

export {};
