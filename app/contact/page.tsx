import { getContactPageData } from "@/lib/contact";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export const metadata = {
  title: "Contact | East Bay Pharmacy",
};

export default async function ContactPage() {
  const data = await getContactPageData();
  if (!data) return null;

  return (
    <>
      {/* HERO */}
      <section className="py-20 bg-gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              {data.heroTitle}
            </h1>
            <p className="text-xl text-primary-foreground/90">
              {data.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* LEFT SIDE */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6 mb-12">

                {/* ADDRESS */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {data.addressTitle}
                    </h3>
                    <p className="text-muted-foreground">
                      {data.addressLine1}<br />
                      {data.addressLine2}
                    </p>
                  </div>
                </div>

                {/* PHONE */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {data.phoneTitle}
                    </h3>
                    <a href={`tel:${data.phoneNumber}`} className="text-accent hover:underline">
                      {data.phoneNumber}
                    </a>
                    <p className="text-muted-foreground text-sm mt-1">
                      {data.phoneNote}
                    </p>
                  </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {data.emailTitle}
                    </h3>
                    <a href={`mailto:${data.emailAddress}`} className="text-accent hover:underline">
                      {data.emailAddress}
                    </a>
                  </div>
                </div>

                {/* HOURS */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-hero flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {data.hoursTitle}
                    </h3>
                   <div
  className="text-muted-foreground space-y-1"
  dangerouslySetInnerHTML={{ __html: data.hoursText }}
/>


                  </div>
                </div>
              </div>

              {/* MAP BOX (same placeholder style) */}
              <div className="rounded-2xl overflow-hidden shadow-card border border-border/50 h-[300px] bg-muted  items-center justify-center">
                <div className="text-center ">
                 
                  <div className="text-muted-foreground">
                     
          <div
            className="rounded-2xl overflow-hidden shadow-lg border"
            dangerouslySetInnerHTML={{ __html: data.mapText }}
          />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE — FORM (same styling as your design) */}
            <div>
              <div className="bg-card rounded-2xl p-8 shadow-card border border-border/50">
                <h2 className="font-heading text-2xl font-semibold mb-2">
                  Send Us a Message
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Your Name *" required />
                    <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Organization" />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input type="email" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Email *" required />
                    <input type="tel" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Phone" />
                  </div>

                  <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm" placeholder="Subject *" required />

                  <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" rows={5} placeholder="Message *" required />

                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-hero text-primary-foreground shadow-elevated hover:shadow-card hover:scale-[1.02] font-semibold h-11 rounded-md px-8 text-base w-full">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
