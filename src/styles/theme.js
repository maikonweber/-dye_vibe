
import { extendTheme } from '@chakra-ui/react' 

export const theme = extendTheme({
    styles:{
    global: {
        body: {
            bgGradient: 'linear(to-l, green.400, purple.300)',
            bg: 'blue.100',
            color: '#0B0B0D',
        },
        fonts : { body: 'Yanone',
        heading: 'Gluten',
        mono: 'Grechen'
               }           
    
    }}
})  