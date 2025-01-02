import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/your-number", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-shadow"
      size="icon"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};