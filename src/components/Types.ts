// NavBar.tsx Props
export interface LinkProps {
    links: { title: string; href: string }[];
  }
  
  // MobileNavBar.tsx Props
  export interface MobileNavProps {
    isOpen: boolean;
    onClose: () => void;
  
    links: { title: string; href: string }[];
  }
  