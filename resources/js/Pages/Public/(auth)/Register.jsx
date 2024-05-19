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
import { useState } from 'react';

import { PublicLayout } from '@/components/PublicLayout';

const Register = () => {
  const [isValidated, setIsValidated] = useState(false);
  const [validationPassword, setValidationPassword] = useState('');

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

  const onValidate = (e) => {
    e.preventDefault();
    if (validationPassword === 'insert-something-here') {
      setIsValidated(true);
    }
  };

  return (
    <PublicLayout title="Register" disableNav>
      {isValidated ? (
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
      ) : (
        <Center h="full">
          <Stack as="form" direction="column" onSubmit={onValidate} w="md">
            <FormControl id="validation_password">
              <FormLabel>Validation Password</FormLabel>
              <Input
                type="password"
                name="validation_password"
                value={validationPassword}
                onChange={(e) => setValidationPassword(e.target.value)}
              />
            </FormControl>

            <Button type="submit" colorScheme="green">
              Validate
            </Button>
          </Stack>
        </Center>
      )}
    </PublicLayout>
  );
};

export default Register;
