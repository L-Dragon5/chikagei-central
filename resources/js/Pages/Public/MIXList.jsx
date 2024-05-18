import { InfoIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';
import Markdown from 'react-markdown';

import { PublicLayout } from '@/components/PublicLayout';

const MIXList = ({ allMix }) => {
  return (
    <PublicLayout title="Index">
      <TableContainer>
        <Table variant="simple">
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
