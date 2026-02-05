export interface HeaderLink {
  url: string;
  target?: string;
  title: string;
}

export interface HeaderLogo {
  node: {
    sourceUrl: string;
  };
}

export interface HeaderData {
  phoneNumber: string;
  pharmacistText: string;
  logo: HeaderLogo;
  portalLink: HeaderLink;
  billpayLink: HeaderLink;
  ctaText: string;
  ctaLink: HeaderLink;
}
