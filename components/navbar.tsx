import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="bg-primary text-primary-foreground py-4 shadow-md">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          XICT
        </Link>

        {/* Menu Links */}
        <ul className="flex space-x-12">
          <li>
            <Link
              href="/field-active"
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              Field Active
            </Link>
          </li>
          <li>
            <Link
              href="/intro"
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              Intro
            </Link>
          </li>
          <li>
            <Link
              href="/news"
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              News
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-lg font-medium hover:text-accent transition-colors"
            >
              Products
            </Link>
          </li>
        </ul>

        {/* Action Button */}
        <Button variant="secondary">Sign In</Button>
      </nav>
    </header>
  );
}