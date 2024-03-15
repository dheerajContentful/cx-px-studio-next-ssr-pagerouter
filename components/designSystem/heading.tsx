import { Typography } from "@material-tailwind/react";
import { ComponentDefinition } from '@contentful/experiences-sdk-react'


export const headingDefinition: ComponentDefinition = {
  component: Typography,
  definition: {
    // This id is the same as the "basic" component that default experiences have
    // This is how we override the default button component
    id: 'heading',
    name: 'Heading',
    // This is the category that the component will be placed in the sidebar
    category: 'Elements',
    // This is the thumbnail that will be shown in the sidebar
    thumbnailUrl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    // This is the tooltip that will be shown when hovering over the component in the sidebar
    tooltip: {
      description: 'This is a custom heading created for our design system.',
      // there is also an option to include an image in the tooltip
    },
    // These are the variables that can be set for the component
    variables: {
      children: {
        displayName: 'Text',
        type: 'Text',
        defaultValue: 'Add your text here ...',
      },
      variant: {
        displayName: 'Variant',
        type: 'Text',
        // This is the list of options that will be shown in the dropdown
        validations: {
          in:[
            {value: 'h1', displayName: 'H1'},
            {value: 'h2', displayName: 'H2'},
            {value: 'h3', displayName: 'H3'},
          ]
        },
        defaultValue: 'h2',
        // By setting the group to 'style', the variable will be placed in the design tab of the sidebar
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