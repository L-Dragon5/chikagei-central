import { Center, Heading, Link } from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';

import { PublicLayout } from '@/components/PublicLayout';

const Index = () => {
  return (
    <PublicLayout title="Index">
      <Center flexDirection="column" flexGrow={1}>
        <Heading as="h1" size="xl">
          Hmm...
        </Heading>
        <Heading as="h2" size="lg">
          We can't find the thing you're looking for
        </Heading>

        <Link as={InertiaLink} href="/" fontSize="3xl" mt={6}>
          Let's head back
        </Link>
      </Center>
    </PublicLayout>
  );
};

export default Index;
