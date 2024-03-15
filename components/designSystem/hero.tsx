import { Button, Typography } from "@material-tailwind/react";
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { ComponentDefinition } from '@contentful/experiences-sdk-react'
import Link from 'next/link';

export default function Hero(props: any) {
  const {heading, description, ctaText, ctaURL, imageURL, imageAlt, size, variant} = props;
  const headingSize = size === 'sm' ? 'h3' : size === 'md' ? 'h2' : 'h1';

  return (
    <div className='hero w-full relative overflow-hidden'>
      <div className='content container py-12 relative z-10'>
        <div className='w-1/2'>
          {heading && 
            <Typography variant={headingSize} placeholder={false} color={variant}>{heading}</Typography>
          }
          <div className='rich-text' dangerouslySetInnerHTML={{__html: documentToHtmlString(description)}} />
          <Link href={ ctaURL ?? '/'} className='mt-4 block'>
            <Button size={size} placeholder={false} color={variant}>
              {ctaText}
            </Button>
          </Link>
        </div>
      </div>
      <div className='media absolute top-0 w-full'>
        <img src={`${imageURL}?w=1300`} alt={imageAlt} className='object-fit w-full' />
      </div>
    </div>
  )
}

export const heroDefinition: ComponentDefinition = {
  component: Hero,
  definition: {
    // This id is the same as the "basic" component that default experiences have
    // This is how we override the default button component
    id: 'hero',
    name: 'Hero',
    // This is the category that the component will be placed in the sidebar
    category: 'Components',
    // This is the thumbnail that will be shown in the sidebar
    thumbnailUrl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    // This is the tooltip that will be shown when hovering over the component in the sidebar
    tooltip: {
      description: 'This is a prescriptive hero made up of designs system elements.',
      // there is also an option to include an image in the tooltip
    },
    // These are the variables that can be set for the component
    variables: {
      heading: {
        displayName: 'Heading',
        type: 'Text',
        defaultValue: 'Heading ...',
      },
      description: {
        displayName: 'Description',
        type: 'RichText',
      },
      ctaText: {
        displayName: 'CTA Text',
        type: 'Text',
      },
      ctaURL: {
        displayName: 'CTA URL',
        type: 'Text',
      },
      imageURL: {
        displayName: 'Background Image URL',
        type: 'Text',
        defaultValue: 'https://images.ctfassets.net/tofsejyzyo24/5owPX1vp6cXDZr7QOabwzT/d5580f5b4dbad3f74c87ce2f03efa581/Image_container.png',
      },
      size: {
        displayName: 'Size',
        type: 'Text',
        validations: {
          in:[
            {value: 'sm', displayName: 'Small'},
            {value: 'md', displayName: 'Medium'},
            {value: 'lg', displayName: 'Large'},
          ]
        },
        defaultValue: 'lg',
        group: 'style'
      },
      variant: {
        displayName: 'Variant',
        type: 'Text',
        validations: {
          in:[
            {value: 'amber', displayName: 'Amber'},
            {value: 'black', displayName: 'Black'},
            {value: 'red', displayName: 'Red'},
            {value: 'white', displayName: 'White'},
          ]
        },
        defaultValue: 'black',
        group: 'style'
      }
    },
  },
};
