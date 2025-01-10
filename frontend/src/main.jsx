import { createRoot } from 'react-dom/client'
import AppRoutes from './routes.jsx';

import {ChakraProvider} from '@chakra-ui/react';

createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <AppRoutes />
    </ChakraProvider>
);
