
import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Github, Linkedin, ArrowDown } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const downloadResume = () => {
    // In a real app, this would download the actual resume file
    toast({
      title: "Resume Download",
      description: "Resume download would start here",
    });
  };

  const socialLinks = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:ahfaz.abdul@email.com",
      color: "text-red-500"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/ahfaz-abdul",
      color: "text-blue-600"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/ahfaz-abdul",
      color: "text-gray-700 dark:text-gray-300"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text font-poppins">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, innovative projects, or just having a chat about technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 glass-effect">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          {/* Contact Info & Resume */}
          <div className="space-y-8">
            <Card className="p-8 glass-effect">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. 
                Whether you have a job opportunity, want to collaborate, or just want to say hi, 
                I'd love to hear from you!
              </p>

              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg glass-effect hover:bg-accent/50 transition-all duration-300 group"
                  >
                    <div className={`${link.color} group-hover:scale-110 transition-transform`}>
                      {link.icon}
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 glass-effect text-center">
              <h3 className="text-xl font-semibold mb-4">Download Resume</h3>
              <p className="text-muted-foreground mb-6">
                Get a detailed overview of my experience, skills, and projects
              </p>
              
              <Button
                onClick={downloadResume}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3"
              >
                <ArrowDown className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
