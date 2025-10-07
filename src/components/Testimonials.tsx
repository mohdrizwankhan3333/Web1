// src/components/Testimonials.tsx
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Dr. Sunil Rawat",
    role: "Project Mentor",
    image: "/profile.webp",
    text: "Rizwan delivered exceptional work on the Dr. Revive project. Highly dedicated and skilled!",
  },
  {
    name: "Team Matchverse",
    role: "Hackathon Mentor",
    image: "/profile.webp",
    text: "Rizwan showed excellent problem-solving skills and creativity during AI Matrimonial Challenge.",
  },
  {
    name: "Cisco Certified",
    role: "Data Science Certification",
    image: "/profile.webp",
    text: "Completed data science certification with practical projects demonstrating strong ML skills.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-gray-100">
        Testimonials & Achievements
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={item.image} alt={item.name} />
                <AvatarFallback>{item.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.role}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
