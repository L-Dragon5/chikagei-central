import { InfoIcon, ViewIcon } from '@chakra-ui/icons';
import {
  Button,
  HStack,
  Link,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';
import { useState } from 'react';

import { PublicLayout } from '@/components/PublicLayout';

const MIXList = () => {
  const data = [
    {
      id: 1,
      name: 'Standard MIX',
      romaji: 'Taigā―! Faiyā―! Saibā―! Faibā―! Daibā―! Baibā！\n\nJyā Jyā―!',
    },
    {
      id: 2,
      name: 'Standard MIX (Extended)',
      romaji:
        'Taigā―! Faiyā―! Saibā―! Faibā―! Daibā―! Baibā！\n\nJyā Jyā―! Faibō―! Waipā―!',
    },
  ];

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
            {data.map((mix) => (
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
                          {mix.romaji}
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
