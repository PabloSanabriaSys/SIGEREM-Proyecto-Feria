import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScanEye } from "lucide-react";

const VideoDialog = ({ triggerText, videoUrl, videoTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full" variant="outline">{triggerText}
          <ScanEye className=''/>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0">
        <div className="aspect-video relative">
            <iframe
            src={videoUrl}
            title={videoTitle}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            />
          <Button
            className="absolute top-2 right-2 bg-black/50 hover:bg-black/70"
            onClick={() => setIsOpen(false)}
            aria-label="Close dialog"
          >
            X
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoDialog;