import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-lg sticky top-0 bg-gray-100 z-50">
    <h1 className="text-xl font-bold animate-twinkle-scale">
  Rizwan’s Portfolio
</h1>


      <div className="flex items-center gap-4">
  <a href="#home">
    <Button
      variant="ghost"
      className="hover:text-gray-900 dark:hover:text-white transform transition duration-300 hover:scale-115"
    >
      Home
    </Button>
  </a>
  <a href="#projects">
    <Button
      variant="ghost"
      className="hover:text-gray-900 dark:hover:text-white transform transition duration-300 hover:scale-115"
    >
      Projects
    </Button>
  </a>
  <a href="#contact">
    <Button
      variant="ghost"
      className="hover:text-gray-900 dark:hover:text-white transform transition duration-300 hover:scale-115"
    >
      Contact
    </Button>
  </a>
  <  ThemeToggle  /> {/* ✅ toggles dark/light */}
</div>

    </nav>
  );
}
