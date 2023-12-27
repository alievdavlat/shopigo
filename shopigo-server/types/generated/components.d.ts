import type { Schema, Attribute } from '@strapi/strapi';

export interface SectionProductSection extends Schema.Component {
  collectionName: 'components_section_product_sections';
  info: {
    displayName: 'product-section';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title_ru: Attribute.String;
    description_uz: Attribute.String;
    productsSection_advantages: Attribute.JSON;
    title_uz: Attribute.String;
    description_ru: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'section.product-section': SectionProductSection;
    }
  }
}
