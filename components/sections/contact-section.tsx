import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export function ContactSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-xl text-muted-foreground mb-8">
        Intéressé par une collaboration ? N&apos;hésitez pas à me contacter.
      </p>
      <div className="flex justify-center gap-4">
        <Button asChild size="lg">
          <Link href="mailto:bosukuege@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link href="https://wa.me/243831919710" target="_blank" rel="noopener noreferrer">
            <Phone className="mr-2 h-4 w-4" />
            WhatsApp
          </Link>
        </Button>
      </div>
    </section>
  );
}