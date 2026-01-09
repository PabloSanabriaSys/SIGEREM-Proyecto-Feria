import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";

export default function InfoDialog({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label={`Mostrar información sobre ${title}`}>
          <HelpCircle className="h-10 w-10" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="text-center">
          <HelpCircle className="mx-auto h-10 w-10 text-primary mb-4" />
          <h2 className="text-lg font-bold mb-2">{title}</h2>
          <p className="text-sm text-gray-500">{content}</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
