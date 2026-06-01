import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Button from "@/components/ui/Button";

describe("Button", () => {
  it("renders primary variant", () => {
    render(<Button variant="primary">Click me</Button>);
    const btn = screen.getByRole("button", { name: /click me/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("bg-primary");
  });

  it("renders secondary variant", () => {
    render(<Button variant="secondary">Cancel</Button>);
    const btn = screen.getByRole("button", { name: /cancel/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("border-hairline");
  });

  it("renders ghost variant", () => {
    render(<Button variant="ghost">Ghost</Button>);
    const btn = screen.getByRole("button", { name: /ghost/i });
    expect(btn).toBeInTheDocument();
    expect(btn).toHaveClass("bg-transparent");
  });

  it("renders as a link when href is provided", () => {
    render(
      <Button variant="primary" href="https://example.com">
        Visit
      </Button>,
    );
    const link = screen.getByRole("link", { name: /visit/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "https://example.com");
  });

  it("applies custom className", () => {
    render(<Button className="extra-class">Styled</Button>);
    expect(screen.getByText("Styled")).toHaveClass("extra-class");
  });
});
