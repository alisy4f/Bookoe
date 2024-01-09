import { createBrowserRouter } from 'react-router-dom'

import App from './App'
import AllPage from './pages/AllPage'
import Latest from './pages/Latest'
import TopPicks from './pages/TopPicks'
import DetailsBook from './pages/DetailsBook'

// Advanced routing / Nested routing
const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '',
                Component: AllPage
            },
            {
                path: 'Latest',
                Component: Latest
            },
            {
                path: 'TopPicks',
                Component: TopPicks
            },
            {
                path: 'books',
                children: [
                    {
                        path: ':id',
                        Component: DetailsBook
                    }
                ]
            },
        ]
    }
])

export default router