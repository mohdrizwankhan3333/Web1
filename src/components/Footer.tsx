import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Logo / Name */}
<h3 className="text-xl font-bold transform transition duration-300 hover:scale-110">
  Mohd Rizwan Khan
</h3>


        {/* Social Links */}
        <div className="flex gap-4">
          <Button variant="ghost" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="mailto:your-email@example.com">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Mohd Rizwan Khan. All rights reserved.</p>
      </div>
    </footer>
  );
}
