import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Applayout from './layout/app-layout'
import Landingpage from './Pages/landing'
import Onboarding from './Pages/onboarding'
import JobListing from './Pages/job-listing'
import JobPages from './Pages/job'
import PostJob from './Pages/post-job'
import MyJobs from './Pages/my-jobs'
import SavedJob from './Pages/saved-jobs'
import { ThemeProvider } from './components/theme-provider'
import ProtectedRoute from './components/protected-route'

const router = createBrowserRouter([
  {
    element : <Applayout/>,
    children : [
      {
        path:"/",
        element:<Landingpage/>,
      },
      {
        path:"/onboarding",
        element:(
        <ProtectedRoute>
        <Onboarding/>
        </ProtectedRoute>
        )
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPages />
          </ProtectedRoute>
        ),
      }, 
      {
        path:"/jobs",
        element:(
          <ProtectedRoute>
            <JobListing />
          </ProtectedRoute>
        ),
      },
      {
        path:"/my-jobs",
        element: (
          <ProtectedRoute>
            <MyJobs />
          </ProtectedRoute>
        ),
      },
      {
        path:"/post-job",
        element:(
          <ProtectedRoute>
            <PostJob />
          </ProtectedRoute>
        ),
      },  
      {
        path:"/saved-jobs",
        element:(
          <ProtectedRoute>
        <SavedJob/>
        </ProtectedRoute>
        ),
      },  
    ]
  }
])

function App() {
 return (
  
 <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
 <RouterProvider router={router} />
</ThemeProvider>  

 )
}

export default App
