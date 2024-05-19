import { AddIcon, InfoIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';
import Markdown from 'react-markdown';

import { PublicLayout } from '@/components/PublicLayout';
import { useAuthUser } from '@/lib/user';

const MIXList = ({ allMix }) => {
  const { user } = useAuthUser();

  return (
    <PublicLayout title="Index">
      {user ? (
        <HStack bgColor={useColorModeValue('red.200', 'red.700')} p={4}>
          <Heading as="h4" size="md">
            Admin Tools
          </Heading>
          <Spacer />
          <Button leftIcon={<AddIcon />} colorScheme="purple">
            Add MIX
          </Button>
        </HStack>
      ) : null}

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allMix.map((mix) => (
              <Tr key={`mix-${mix.id}`}>
                <Td>{mix.name}</Td>
                <Td>
                  <HStack spacing={3}>
                    <Button
                      as={InertiaLink}
                      href={`/mix/${mix.id}`}
                      variant="solid"
                      colorScheme="teal"
                      leftIcon={<InfoIcon />}
                    >
                      Detailed View
                    </Button>
                    <Popover isLazy lazyBehavior="keepMounted">
                      <PopoverTrigger>
                        <Button
                          variant="outline"
                          colorScheme="teal"
                          leftIcon={<ViewIcon />}
                        >
                          Quick View
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverHeader>{mix.name}</PopoverHeader>
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverBody whiteSpace="pre-wrap">
                          <Markdown>{mix.words}</Markdown>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </HStack>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </PublicLayout>
  );
};

export default MIXList;
