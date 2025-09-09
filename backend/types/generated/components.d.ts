import type { Schema, Struct } from '@strapi/strapi';

export interface BrandActivefloorcontact extends Struct.ComponentSchema {
  collectionName: 'components_activefloorcontact_activefloorcontacts';
  info: {
    description: 'ActiveFloor contact section with heading and background image';
    displayName: 'ActiveFloorContact';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandAlternatingSection extends Struct.ComponentSchema {
  collectionName: 'components_brand_alternating_sections';
  info: {
    description: 'Content blocks with alternating text + image layout';
    displayName: 'Alternating Section';
    icon: 'columns';
  };
  attributes: {
    cta: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface BrandBanner extends Struct.ComponentSchema {
  collectionName: 'components_brand_banner';
  info: {
    description: 'Banner fields for a brand page';
    displayName: 'banner';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    overlayImage: Schema.Attribute.Media;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface BrandInstallation extends Struct.ComponentSchema {
  collectionName: 'components_brand_installation';
  info: {
    description: 'Two-column installation checklist for brands';
    displayName: 'Installation';
    icon: 'list';
  };
  attributes: {
    heading: Schema.Attribute.String;
    left_items: Schema.Attribute.Component<'brand.installation-item', true>;
    right_items: Schema.Attribute.Component<'brand.installation-item', true>;
  };
}

export interface BrandInstallationItem extends Struct.ComponentSchema {
  collectionName: 'components_brand_installation_items';
  info: {
    description: 'Single installation checklist item';
    displayName: 'Installation Item';
    icon: 'check';
  };
  attributes: {
    text: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface CareerBanner extends Struct.ComponentSchema {
  collectionName: 'components_career_banners';
  info: {
    displayName: 'Banner';
    icon: 'image';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    companyName: Schema.Attribute.String;
    cycleDelayMs: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<3000>;
    deleteSpeedMs: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<80>;
    headingWords: Schema.Attribute.JSON;
    typeSpeedMs: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<120>;
  };
}

export interface CareerContact extends Struct.ComponentSchema {
  collectionName: 'components_career_contacts';
  info: {
    description: 'Video background + form config for Careers page';
    displayName: 'Contact Section';
    icon: 'phone';
  };
  attributes: {
    countries: Schema.Attribute.Component<'career.country', true>;
    employmentStatuses: Schema.Attribute.Component<
      'career.string-option',
      true
    >;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    jobFields: Schema.Attribute.Component<'career.string-option', true>;
    locations: Schema.Attribute.Component<'career.string-option', true>;
    poster: Schema.Attribute.Media<'images'>;
    video: Schema.Attribute.Media<'videos'>;
  };
}

export interface CareerCountry extends Struct.ComponentSchema {
  collectionName: 'components_career_countries';
  info: {
    displayName: 'Country';
    icon: 'flag';
  };
  attributes: {
    dialCode: Schema.Attribute.String;
    iso2: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface CareerStringOption extends Struct.ComponentSchema {
  collectionName: 'components_career_string_options';
  info: {
    displayName: 'String Option';
    icon: 'bulletList';
  };
  attributes: {
    label: Schema.Attribute.String;
  };
}

export interface CareerThinkSection extends Struct.ComponentSchema {
  collectionName: 'components_career_think_sections';
  info: {
    displayName: 'Think Section';
    icon: 'list';
  };
  attributes: {
    description: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images'>;
    reverse: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    subText: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface ElementsParagraph extends Struct.ComponentSchema {
  collectionName: 'components_elements_paragraphs';
  info: {
    displayName: 'Paragraph';
    icon: 'align-left';
  };
  attributes: {
    text: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface ElementsStatItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_stat_item';
  info: {
    description: 'Single stat card';
    displayName: 'Stat Item';
    icon: 'number';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    number: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface HardwareProduct extends Struct.ComponentSchema {
  collectionName: 'components_hardware_products';
  info: {
    description: 'Single hardware product for carousels';
    displayName: 'Product';
    icon: 'box';
  };
  attributes: {
    cta_label: Schema.Attribute.String;
    cta_url: Schema.Attribute.String;
    desc: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer & Schema.Attribute.DefaultTo<0>;
  };
}

export interface HomepageAboutSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_about_sections';
  info: {
    displayName: 'About Section';
    icon: 'info-circle';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttonText: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    paragraphs: Schema.Attribute.Component<'elements.paragraph', true>;
    subheading: Schema.Attribute.String;
  };
}

export interface HomepageBrandSlider extends Struct.ComponentSchema {
  collectionName: 'components_homepage_brand_sliders';
  info: {
    description: 'Carousel of brands with heading and logos';
    displayName: 'Brand Slider';
    icon: 'images';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    heading: Schema.Attribute.String;
    logos: Schema.Attribute.Media<'images', true>;
  };
}

export interface HomepageClientContact extends Struct.ComponentSchema {
  collectionName: 'components_homepage_client_contacts';
  info: {
    description: 'Contact form section for homepage';
    displayName: 'Client Contact';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    heading: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
  };
}

export interface HomepageHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_hero_sections';
  info: {
    displayName: 'HeroSection';
  };
  attributes: {
    heroBackground: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heroCtaLabel: Schema.Attribute.String;
    heroCtaUrl: Schema.Attribute.String;
    heroImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    heroSecondaryCtaLabel: Schema.Attribute.String;
    heroSecondaryCtaUrl: Schema.Attribute.String;
    heroSubtitle: Schema.Attribute.String;
    heroTitle: Schema.Attribute.String;
  };
}

export interface HomepageNewsEvent extends Struct.ComponentSchema {
  collectionName: 'components_homepage_news_events';
  info: {
    description: 'Single news/event item for homepage';
    displayName: 'News Event';
  };
  attributes: {
    image: Schema.Attribute.Media;
    link: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomepageNewsEventsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_news_events_sections';
  info: {
    description: 'News events with background video';
    displayName: 'News Events Section';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    heading: Schema.Attribute.String;
    newsItems: Schema.Attribute.Component<'homepage.news-event', true>;
  };
}

export interface HomepageStatsHighlights extends Struct.ComponentSchema {
  collectionName: 'components_sections_stats_highlights';
  info: {
    description: 'Stats section for homepage';
    displayName: 'Stats Highlights';
    icon: 'chart-bar';
  };
  attributes: {
    background: Schema.Attribute.Media<'images'>;
    ctaLabel: Schema.Attribute.String;
    ctaLink: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    stats: Schema.Attribute.Component<'elements.stat-item', true>;
  };
}

export interface HomepageTechnologyPartner extends Struct.ComponentSchema {
  collectionName: 'components_homepage_technology_partners';
  info: {
    description: 'Technology partner call-to-action section';
    displayName: 'Technology Partner';
    icon: 'handshake';
  };
  attributes: {
    backgroundImage: Schema.Attribute.Media<'images'>;
    buttonLink: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'/contactus'>;
    buttonText: Schema.Attribute.String &
      Schema.Attribute.DefaultTo<'Partner With Us'>;
    heading: Schema.Attribute.String;
  };
}

export interface HomepageTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials';
  info: {
    description: 'Single client testimonial item';
    displayName: 'Testimonial';
  };
  attributes: {
    designation: Schema.Attribute.String;
    image: Schema.Attribute.Media;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.Text;
  };
}

export interface HomepageTestimonialsSection extends Struct.ComponentSchema {
  collectionName: 'components_homepage_testimonials_sections';
  info: {
    description: 'Wrapper for testimonials with heading';
    displayName: 'Testimonials Section';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'homepage.testimonial', true>;
  };
}

export interface NavigationMenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_menu_items';
  info: {
    displayName: 'menu-item';
    icon: 'menu';
  };
  attributes: {
    children: Schema.Attribute.Component<'navigation.submenu-item', true>;
    href: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface NavigationSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_navigation_social_links';
  info: {
    displayName: 'social-link';
    icon: 'link';
  };
  attributes: {
    platform: Schema.Attribute.Enumeration<
      ['LinkedIn', 'Pinterest', 'Instagram', 'Facebook', 'Twitter', 'YouTube']
    > &
      Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface NavigationSubmenuItem extends Struct.ComponentSchema {
  collectionName: 'components_navigation_submenu_items';
  info: {
    displayName: 'submenu-item';
    icon: 'menu';
  };
  attributes: {
    href: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_links';
  info: {
    description: 'A simple link item';
    displayName: 'Link';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedSocial extends Struct.ComponentSchema {
  collectionName: 'components_shared_socials';
  info: {
    description: 'Social media link';
    displayName: 'Social';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
    platform: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SharedStat extends Struct.ComponentSchema {
  collectionName: 'components_shared_stats';
  info: {
    displayName: 'Stat';
    icon: 'number';
  };
  attributes: {
    label: Schema.Attribute.String;
    number: Schema.Attribute.String;
  };
}

export interface SustainabilityHighlightItem extends Struct.ComponentSchema {
  collectionName: 'components_sus_highlight_items';
  info: {
    displayName: 'Highlight Item';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.Text;
  };
}

export interface SustainabilityHighlights extends Struct.ComponentSchema {
  collectionName: 'components_sus_highlights';
  info: {
    displayName: 'Sustainability Highlights';
    icon: 'star';
  };
  attributes: {
    items: Schema.Attribute.Component<'sustainability.highlight-item', true>;
  };
}

export interface SustainabilityWeCareAboutYourTomorrow
  extends Struct.ComponentSchema {
  collectionName: 'components_sus_tomorrow';
  info: {
    displayName: 'We Care About Your Tomorrow';
    icon: 'leaf';
  };
  attributes: {
    heading: Schema.Attribute.String;
    paragraph: Schema.Attribute.Text;
  };
}

export interface WhoWeAreTrackRecord extends Struct.ComponentSchema {
  collectionName: 'components_who_we_are_track_records';
  info: {
    displayName: 'Track Record';
    icon: 'chart-line';
  };
  attributes: {
    stats: Schema.Attribute.Component<'shared.stat', true>;
    title: Schema.Attribute.String;
  };
}

export interface WhoWeAreVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_who_we_are_video_sections';
  info: {
    description: 'Section with title, subtitle, description, and background video';
    displayName: 'Who We Are Video Section';
  };
  attributes: {
    backgroundVideo: Schema.Attribute.Media<'videos'>;
    description: Schema.Attribute.RichText;
    subtitle: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'brand.activefloorcontact': BrandActivefloorcontact;
      'brand.alternating-section': BrandAlternatingSection;
      'brand.banner': BrandBanner;
      'brand.installation': BrandInstallation;
      'brand.installation-item': BrandInstallationItem;
      'career.banner': CareerBanner;
      'career.contact': CareerContact;
      'career.country': CareerCountry;
      'career.string-option': CareerStringOption;
      'career.think-section': CareerThinkSection;
      'elements.paragraph': ElementsParagraph;
      'elements.stat-item': ElementsStatItem;
      'hardware.product': HardwareProduct;
      'homepage.about-section': HomepageAboutSection;
      'homepage.brand-slider': HomepageBrandSlider;
      'homepage.client-contact': HomepageClientContact;
      'homepage.hero-section': HomepageHeroSection;
      'homepage.news-event': HomepageNewsEvent;
      'homepage.news-events-section': HomepageNewsEventsSection;
      'homepage.stats-highlights': HomepageStatsHighlights;
      'homepage.technology-partner': HomepageTechnologyPartner;
      'homepage.testimonial': HomepageTestimonial;
      'homepage.testimonials-section': HomepageTestimonialsSection;
      'navigation.menu-item': NavigationMenuItem;
      'navigation.social-link': NavigationSocialLink;
      'navigation.submenu-item': NavigationSubmenuItem;
      'shared.link': SharedLink;
      'shared.social': SharedSocial;
      'shared.stat': SharedStat;
      'sustainability.highlight-item': SustainabilityHighlightItem;
      'sustainability.highlights': SustainabilityHighlights;
      'sustainability.we-care-about-your-tomorrow': SustainabilityWeCareAboutYourTomorrow;
      'who-we-are.track-record': WhoWeAreTrackRecord;
      'who-we-are.video-section': WhoWeAreVideoSection;
    }
  }
}
