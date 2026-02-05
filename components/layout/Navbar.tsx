"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Clock, ChevronDown } from "lucide-react";

interface MenuItem {
  id: string;
  label: string;
  path: string;
  childItems?: {
    nodes: MenuItem[];
  };
}

interface NavbarProps {
  headerData: any;
  menu: MenuItem[];
}

export default function Navbar({ headerData, menu }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  if (!headerData) return null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-soft">

      {/* Top bar */}
      <div className="bg-gradient-hero text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="font-medium">{headerData.phoneNumber}</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{headerData.pharmacistText}</span>
            </div>
          </div>
		   <div className="hidden md:flex items-center gap-4">
            <a
              href={headerData.portalLink.url}
              target={headerData.portalLink.target}
              className="hover:underline underline-offset-2 transition-all"
            >
              {headerData.portalLink.title}
            </a>
            <span className="opacity-50">|</span>
            <a
              href={headerData.billpayLink.url}
              target={headerData.billpayLink.target}
              className="hover:underline underline-offset-2 transition-all"
            >
              {headerData.billpayLink.title}
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container mx-auto px-4 flex items-center justify-between h-20">

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src={headerData.logo.node.sourceUrl}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">

          {menu.map(item => (
            <div key={item.id} className="relative group">

              <Link
                href={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium inline-flex items-center gap-1 transition-all
                ${pathname === item.path
                  ? "text-accent bg-accent/10"
                  : "text-foreground hover:text-accent hover:bg-accent/5"
                }`}
              >
                {item.label}
                {item.childItems?.nodes.length > 0 && (
                  <ChevronDown className="w-4 h-4" />
                )}
              </Link>

              {/* Level 2 */}
              {item.childItems?.nodes.length > 0 && (
                <div className="
                  absolute left-0 top-full mt-2 
                  bg-card rounded-xl shadow-elevated border border-border/50 
                  min-w-[220px]
                  opacity-0  
                  group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto
                  transition-all duration-200
                ">

                  {item.childItems.nodes.map(child => (
                    <div key={child.id} className="relative group/sub">

                      <Link
                        href={child.path}
                        className="block px-4 py-3 text-sm font-medium hover:text-accent hover:bg-accent/5 transition-all flex justify-between items-center"
                      >
                        {child.label}
                        {child.childItems?.nodes.length > 0 && (
                          <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
                        )}
                      </Link>

                      {/* Level 3 */}
                      {child.childItems?.nodes.length > 0 && (
                        <div className="
                          absolute top-0 left-full
                          bg-card rounded-xl shadow-elevated border border-border/50 
                          min-w-[220px]
                          opacity-0  
                          group-hover/sub:opacity-100 group-hover/sub:visible group-hover/sub:pointer-events-auto
                          transition-all duration-200
                        ">
                          {child.childItems.nodes.map(third => (
                            <Link
                              key={third.id}
                              href={third.path}
                              className="block px-4 py-3 text-sm font-medium hover:text-accent hover:bg-accent/5 transition-all"
                            >
                              {third.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <a
            href={headerData.ctaLink.url}
            target={headerData.ctaLink.target}
            className="inline-flex items-center justify-center gap-2 bg-gradient-hero text-primary-foreground shadow-elevated hover:shadow-card hover:scale-[1.02] font-semibold h-11 rounded-md px-8 text-base transition-all"
          >
            {headerData.ctaText}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 rounded-md"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="lg:hidden bg-card border-t border-border"
          >
            <div className="container mx-auto px-4 py-4 space-y-2">

              {menu.map(item => (
                <div key={item.id}>
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 font-medium"
                  >
                    {item.label}
                  </Link>

                  {item.childItems?.nodes.map(child => (
                    <div key={child.id}>
                      <Link
                        href={child.path}
                        onClick={() => setIsOpen(false)}
                        className="block pl-8 py-2 text-sm text-muted-foreground"
                      >
                        {child.label}
                      </Link>

                      {child.childItems?.nodes.map(third => (
                        <Link
                          key={third.id}
                          href={third.path}
                          onClick={() => setIsOpen(false)}
                          className="block pl-12 py-2 text-xs text-muted-foreground"
                        >
                          {third.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
