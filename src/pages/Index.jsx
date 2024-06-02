import { useState } from "react";
import { Container, VStack, Input, Button, Heading, Text, FormControl, FormLabel, Image, Box, IconButton } from "@chakra-ui/react";
import { FaUser, FaLock } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState({});

  const handleLogin = () => {
    if (registeredUsers[username] === password) {
      setIsLoggedIn(true);
    } else {
      alert("Invalid username or password");
    }
  };

  const handleRegister = () => {
    if (username && password) {
      setRegisteredUsers({ ...registeredUsers, [username]: password });
      setIsRegistering(false);
      alert("Registration successful! Please log in.");
    } else {
      alert("Please enter a username and password");
    }
  };

  if (isLoggedIn) {
    return (
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading>Welcome to Gaming Tech Field</Heading>
          <Text>Enjoy your stay!</Text>
        </VStack>
      </Container>
    );
  }

  return (
    <Container centerContent maxW="container.sm" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgImage="url('https://images.unsplash.com/photo-1593642634367-d91a135587b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBhbmltYXRpb258ZW58MHx8fHwxNjg1NzY0Mjk5&ixlib=rb-4.0.3&q=80&w=1080')" bgSize="cover" bgPosition="center">
      <VStack spacing={4} width="100%">
        <Box display="flex" alignItems="center">
          <Image src="https://images.unsplash.com/photo-1593280359364-5242f1958068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsb2dvfGVufDB8fHx8MTcxNzMxOTQzM3ww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="50px" />
          <Heading ml={3}>GAMING TECH FIELD</Heading>
        </Box>
        <FormControl id="username">
          <FormLabel>Username</FormLabel>
          <Input placeholder="Enter your username" value={username} onChange={(e) => setUsername(e.target.value)} />
        </FormControl>
        <FormControl id="password">
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        {isRegistering ? (
          <Button colorScheme="teal" onClick={handleRegister}>
            Register
          </Button>
        ) : (
          <Button colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
        )}
        <Button variant="link" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? "Already have an account? Log in" : "Don't have an account? Register"}
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
