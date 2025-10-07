import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="flex justify-center py-10">
      <div className="max-w-xl w-full bg-white dark:bg-gray-800 rounded-xl  p-4 text-center">
        <Avatar className="w-38 h-38 mx-auto mb-4">
          <AvatarImage src="/src/assets/profile.webp" alt="Rizwan" />
        </Avatar>
        <h2 className="text-3xl font-semibold mb-2 animate__animated animate__fadeInUp">
          Hi, I'm Mohd Rizwan Khan 👋
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          I am a passionate Java Developer, Data Scientist, and Web Developer with expertise in Python, Java, SQL, and modern web frameworks. I build scalable applications, transform data into actionable insights, and create innovative, impactful digital solutions.
        </p>
        <br />
        <Button variant="default">Download Resume</Button>
      </div>
    </section>
  );
}
