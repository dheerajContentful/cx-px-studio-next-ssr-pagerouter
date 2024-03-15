import { Button } from "@material-tailwind/react";
import { ComponentDefinition } from '@contentful/experiences-sdk-react'
import Link from 'next/link';
 

// Create a wrapper for the button component
// this allows us to correctly map the url and value
export const CustomButton = (props: any) => {
  const { url, value, ...buttonProps } = props

  return (
    <Link href={url}>
      <Button {...buttonProps} placeholder=''>
        {value}
      </Button>
    </Link>
  )
}


export const buttonDefinition: ComponentDefinition = {
  component: CustomButton,
  definition: {
    // This id is the same as the "basic" component that default experiences have
    // This is how we override the default button component
    id: 'button',
    name: 'Button',
    // This is the category that the component will be placed in the sidebar
    category: 'Elements',
    // This is the thumbnail that will be shown in the sidebar
    thumbnailUrl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    // This is the tooltip that will be shown when hovering over the component in the sidebar
    tooltip: {
      description: 'This is a custom button created for our design system.',
      // there is also an option to include an image in the tooltip
    },
    // These are the variables that can be set for the component
    variables: {
      value: {
        displayName: 'Text',
        type: 'Text',
        defaultValue: 'Add your text here',
      },
      url: {
        displayName: 'URL',
        type: 'Text',
        defaultValue: '/',
      },
      variant: {
        displayName: 'Variant',
        type: 'Text',
        // This is the list of options that will be shown in the dropdown
        validations: {
          in:[
            {value: 'filled', displayName: 'Filled'},
            {value: 'outlined', displayName: 'Outlined'},
            {value: 'gradient', displayName: 'Gradient'},
          ]
        },
        defaultValue: 'filled',
        // By setting the group to 'style', the variable will be placed in the design tab of the sidebar
        group: 'style'
      },
      size: {
        displayName: 'Variant',
        type: 'Text',
        validations: {
          in:[
            {value: 'sm', displayName: 'Small'},
            {value: 'md', displayName: 'Medium'},
            {value: 'lg', displayName: 'Large'},
          ]
        },
        defaultValue: 'sm',
        group: 'style'
      },
      color: {
        displayName: 'Color',
        type: 'Text',
        validations: {
          in:[
            {value: 'amber', displayName: 'Amber'},
            {value: 'black', displayName: 'Black'},
            {value: 'blue', displayName: 'Blue'},
            {value: 'green', displayName: 'Green'},
            {value: 'red', displayName: 'Red'},
          ]
        },
        defaultValue: 'blue',
        group: 'style'
      }
    },
  },
};