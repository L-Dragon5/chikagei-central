import {
  Button,
  Center,
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
    password_confirmation: '',
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post('/register');
  };

  const onChange = (e) => {
    e.preventDefault();
    setData(e.target.name, e.target.value);
  };

  return (
    <PublicLayout title="Register" disableNav>
      <Center h="full">
        <Stack as="form" direction="column" onSubmit={onSubmit} w="md">
          <Heading as="h1" size="lg" textAlign="center">
            Register
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

          <FormControl id="password_confirmation">
            <FormLabel>Password Confirmation</FormLabel>
            <Input
              type="password"
              name="password_confirmation"
              value={data.password_confirmation}
              onChange={onChange}
            />
            <FormErrorMessage>
              {errors?.password_confirmation?.message}
            </FormErrorMessage>
          </FormControl>

          <Button type="submit" colorScheme="green" isLoading={processing}>
            Register
          </Button>
        </Stack>
      </Center>
    </PublicLayout>
  );
};

export default Login;
