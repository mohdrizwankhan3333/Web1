import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section className="py-10 text-center mx-6">
      <h2 className="text-2xl font-bold mb-4 transform transition duration-300 hover:scale-105">
  Contact Me
</h2>

      <form className="max-w-md mx-auto flex flex-col gap-3">
        <Input placeholder="Your Name" required />
        <Input placeholder="Your Email" required />
        <Input placeholder="Your Message" required />
        <Button type="submit" className="transform transition-transform duration-300 hover:scale-101 hover:shadow-md">Send Message</Button>
      </form>
    </section>
  );
}
