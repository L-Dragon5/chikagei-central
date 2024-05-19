import {
  Button,
  Center,
  Checkbox,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import { useForm } from '@inertiajs/react';

import { PublicLayout } from '@/components/PublicLayout';

const Login = () => {
  const { data, setData, post, processing, errors } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post('/login');
  };

  const onChange = (e) => {
    e.preventDefault();
    setData(e.target.name, e.target.value);
  };

  return (
    <PublicLayout title="Login" disableNav>
      <Center h="full">
        <Stack as="form" direction="column" onSubmit={onSubmit} w="md">
          <Heading as="h1" size="lg" textAlign="center">
            Login
          </Heading>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              name="email"
              value={data.email}
              onChange={onChange}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              name="password"
              value={data.password}
              onChange={onChange}
            />
            <FormErrorMessage>{errors?.password?.message}</FormErrorMessage>
          </FormControl>

          <FormControl id="remember">
            <Checkbox
              checked={data.remember}
              onChange={(e) => setData('remember', e.target.checked)}
            >
              Remember me?
            </Checkbox>
          </FormControl>

          <Button type="submit" colorScheme="green" isLoading={processing}>
            Login
          </Button>
        </Stack>
      </Center>
    </PublicLayout>
  );
};

export default Login;
