import { Container, Flex } from "@chakra-ui/react"

const Navbar = () => {
  return (
    <Container maxW = {"1140px"} px = {4}>
      <Flex
        h = {16}
        alignItems = {"centre"}
        justifyContent = {"Space-between"}
        flexDir = {{
          base: "column",
          sm: "row"
        }}
      >

        <Text>

          
        </Text>

      </Flex>
    </Container>
  )
}

export default Navbar