"use client";

import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

type LinkButtonProps = {
  linkRef: string; 
  children: ReactNode;
};

export const NavigationButton: React.FC<LinkButtonProps> = ({ linkRef,children}) => {
    const router = useRouter();

    const handleNavigation = () => {
      router.push(linkRef);
    };
  return (
      <Button onClick={handleNavigation} className="mt-6" variant="secondary">
        {children}
      </Button>
  );
};
