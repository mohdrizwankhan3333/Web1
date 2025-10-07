import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Projects() {
  const projects = [
    { 
      title: "Dr. Revive", 
      desc: "Healthcare + AI Chatbot", 
      img: "/src/assets/dr-revive-healthcare.png" 
    },
    { 
      title: "Dr. Revive 1.1", 
      desc: "Supplychain + AI", 
      img: "/src/assets/dr-revive-healthcare.png"   
    },
    { 
      title: "Dr. Revive 1.2", 
      desc: "Finance + ML", 
      img: "/src/assets/dr-revive-healthcare.png" 
    },
    { 
      title: "Dr. Revive 1.4", 
      desc: "E-Commerce + AI", 
      img: "/src/assets/dr-revive-healthcare.png" 
    },
    { 
      title: "Dr. Revive 1.5", 
      desc: "E-commerce web app", 
      img: "/src/assets/dr-revive-healthcare.png" 
    },
    { 
      title: "Dr. Revive 1.6", 
      desc: "ML model for sugar level", 
      img: "/src/assets/dr-revive-healthcare.png" 
    },
  ];

  return (
    <section className="py-10 px-6 bg-gray-100 dark:bg-gray-900">
  <h1 className="font-bold text-center mb-6 text-gray-800 dark:text-white text-3xl">
    Projects
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {projects.map((p, i) => (
      <Card
        key={i}
        className="relative overflow-hidden w-full sm:w-auto h-64 sm:h-72 md:h-80 transition-transform duration-300 hover:scale-105"
      >
        {/* Full image */}
        <img
          src={p.img}
          alt={p.title}
          className="w-full h-full object-cover opacity-40"
        />
        {/* Overlay text at left-bottom */}
        <div className="absolute bottom-2 left-2 p-2 z-10 text-left">
          <CardHeader className="p-0">
            <CardTitle className="text-black dark:text-black text-lg">
              {p.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-black dark:text-black text-sm p-0">
            {p.desc}
          </CardContent>
        </div>
      </Card>
    ))}
  </div>
</section>

  );
}
