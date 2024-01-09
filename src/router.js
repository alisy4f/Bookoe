import { createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import BookListPage from './pages/BookListPage'
import BookDetailsPage from './pages/BookDetailsPage'
import App from './App'

// Advanced routing / Nested routing
const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                path: '',
                Component: HomePage
            },
            {
                path: 'about',
                Component: AboutPage
            },
            {
                path: 'books',
                children: [
                    {
                        path: '',
                        Component: BookListPage
                    },
                    {
                        path: ':id',
                        Component: BookDetailsPage
                    }
                ]
            },
        ]
    }
])

export default router