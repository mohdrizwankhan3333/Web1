import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="rounded-full transform transition duration-300 hover:scale-110"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </Button>
  );
}
