import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layout from "./Layout"
import { AllAccounts, Home, UserDetailForm } from "./Components/Index"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />} >
        <Route path='' element={<Home />} />
        <Route path='/allAccounts' element={<AllAccounts />} />
        <Route path='/profile' element={<UserDetailForm />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
