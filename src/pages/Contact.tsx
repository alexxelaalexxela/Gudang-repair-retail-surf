import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Gudang repair & Surf — surfboard repairs, custom boards, fins and rentals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Visit Our Workshop</h3>
                  <p className="text-muted-foreground">
                    Gudang repair & Surf<br />
                    Jl. Pariwisata Pantai Kuta, Praya, Kuta<br />
                    Kec. Pujut, Kab. Lombok Tengah, NTB 83573
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">WhatsApp</h3>
                  <Button asChild variant="outline" className="mb-2">
                    <a href="https://wa.me/6282341003422">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      0823-4100-3422
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Email</h3>
                  <Button asChild variant="outline">
                    <a href="mailto:hello@halfking.surf">
                      hello@halfking.surf
                    </a>
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-2">Hours</h3>
                  <div className="text-muted-foreground">
                    <div>Monday - Saturday: 8:00 AM - 6:00 PM</div>
                    <div>Sunday: 9:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-sand-light rounded-lg p-6">
              <h3 className="font-serif text-xl font-semibold mb-4">Find Us at Gudang repair & Surf</h3>
              <div className="aspect-video rounded-md overflow-hidden">
                <iframe
                  title="Gudang repair & Surf Location"
                  src="https://www.google.com/maps?q=Jl.%20Pariwisata%20Pantai%20Kuta%2C%20Praya%2C%20Kuta%2C%20Kec.%20Pujut%2C%20Kabupaten%20Lombok%20Tengah%2C%20Nusa%20Tenggara%20Bar.%2083573&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-4">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Gudang%20repair%20%26%20Surf%2C%20Jl.%20Pariwisata%20Pantai%20Kuta%2C%20Praya%2C%20Kuta%2C%20Kec.%20Pujut%2C%20Kabupaten%20Lombok%20Tengah%2C%20Nusa%20Tenggara%20Bar.%2083573"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;