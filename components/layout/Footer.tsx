import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Facebook, Linkedin } from "lucide-react";
import { getFooterData } from "@/lib/footer";

export default async function Footer() {
  const data = await getFooterData();

  //if (!data) return null;

  return (
    <footer className="bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
            {data.footerLogo?.node?.sourceUrl && (
              <img
                src={data.footerLogo.node.sourceUrl}
                alt="Logo"
                className="h-12 w-auto brightness-0 invert"
              />
            )}
            <p className="text-primary-foreground/80 leading-relaxed">
              {data.footerDescription}
            </p>

            <div className="flex gap-4">
              {data.facebookUrl && (
                <a href={data.facebookUrl} aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {data.linkedinUrl && (
                <a href={data.linkedinUrl} aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {data.quickLinks?.map((link: any, i: number) => (
                <li key={i}>
                  <Link href={link.url} className="text-primary-foreground/80 hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {data.serviceLinks?.map((link: any, i: number) => (
                <li key={i}>
                  <Link href={link.url} className="text-primary-foreground/80 hover:text-primary-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div
                  className="text-primary-foreground/80 whitespace-pre-line"
                  dangerouslySetInnerHTML={{ __html: data.footerAddress }}
                />
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <a href={`tel:${data.footerPhone}`}>{data.footerPhone}</a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <a href={`mailto:${data.footerEmail}`}>{data.footerEmail}</a>
              </li>

              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-1" />
                <div className="text-primary-foreground/80">
                  <div dangerouslySetInnerHTML={{ __html: data.footerHours }} />
                  <span className="text-accent font-medium">
                    {data.footerHoursHighlight}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between">
          <p>© {new Date().getFullYear()} East Bay Pharmacy. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
            <Link href="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
