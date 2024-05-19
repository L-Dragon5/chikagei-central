import { AddIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  HStack,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';

import { PublicLayout } from '@/components/PublicLayout';
import { useAuthUser } from '@/lib/user';

const ChikageiList = ({ allChikagei }) => {
  const { user } = useAuthUser();

  return (
    <PublicLayout title="Chikagei List">
      {user ? (
        <HStack bgColor={useColorModeValue('red.200', 'red.700')} p={4}>
          <Heading as="h4" size="md">
            Admin Tools
          </Heading>
          <Spacer />
          <Button leftIcon={<AddIcon />} colorScheme="purple">
            Add Chikagei
          </Button>
        </HStack>
      ) : null}
    </PublicLayout>
  );
};

export default ChikageiList;
