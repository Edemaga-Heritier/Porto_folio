
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = () => {
    // eslint-disable-next-line no-undef
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Contact</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contactez-moi</h3>
            <p className="text-gray-600 mb-8">
              N'hésitez pas à me contacter pour discuter de vos projets ou opportunités de collaboration.
            </p>
            
            <div className="space-y-4">
              <ContactInfo
                icon={<Mail />}
                title="Email"
                content="contact@example.com"
              />
              <ContactInfo
                icon={<Phone />}
                title="Téléphone"
                content="+33 6 12 34 56 78"
              />
              <ContactInfo
                icon={<MapPin />}
                title="Localisation"
                content="Paris, France"
              />
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nom
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-center gap-4">
    <div className="text-blue-600">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-gray-800">{title}</h4>
      <p className="text-gray-600">{content}</p>
    </div>
  </div>
);

export default Contact;