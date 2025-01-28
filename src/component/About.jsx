
import { Code, Server, Palette } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">À propos de moi</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?auto=format&fit=crop&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-gray-600">
              Passionné par le développement web depuis plus de 5 ans, je crée des applications
              modernes et performantes en utilisant les dernières technologies.
            </p>
            
            <div className="grid gap-6">
              <Skill
                icon={<Code size={24} />}
                title="Front-end"
                description="React, TypeScript, Tailwind CSS"
              />
              <Skill
                icon={<Server size={24} />}
                title="Back-end"
                description="Node.js, Express, PostgreSQL"
              />
              <Skill
                icon={<Palette size={24} />}
                title="Design"
                description="UI/UX, Responsive Design"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// eslint-disable-next-line react/prop-types
const Skill = ({ icon, title, description }) => (
  <div className="flex items-start gap-4">
    <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
      {icon}
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

export default About;