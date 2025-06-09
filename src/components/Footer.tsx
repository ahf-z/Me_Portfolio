
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <span className="text-muted-foreground">Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span className="text-muted-foreground">by Ahfaz Abdul</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ahfaz Abdul. All rights reserved.
          </p>
          
          <p className="text-xs text-muted-foreground mt-2">
            Built with React, TypeScript, and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
