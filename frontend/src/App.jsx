import { Box, Button, VStack, Heading, useColorMode } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import Navbar from "./components/Navbar"


function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
  <>
    <Box minH = {"100vh"}>
      <Navbar />
      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/create" element = {<CreatePage />} />
      </Routes>
    </Box>
  </>
  )
}

export default App
