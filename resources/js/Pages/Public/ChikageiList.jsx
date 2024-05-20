import { AddIcon, InfoIcon } from '@chakra-ui/icons';
import {
  Button,
  Heading,
  HStack,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';
import { useRef } from 'react';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ChikageiForm } from '@/components/ChikageiForm';
import { PublicLayout } from '@/components/PublicLayout';
import { useAuthUser } from '@/lib/user';

const ChikageiList = ({ allChikagei }) => {
  const { user } = useAuthUser();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const addChikageiBtnRef = useRef();

  const breadcrumbData = [
    { href: '#', name: 'Chikagei List', isCurrentPage: true },
  ];

  return (
    <PublicLayout title="Chikagei List">
      <Breadcrumbs breadcrumbData={breadcrumbData} />

      {user ? (
        <>
          <HStack bgColor={useColorModeValue('red.200', 'red.700')} p={4}>
            <Heading as="h4" size="md">
              Admin Tools
            </Heading>
            <Spacer />
            <Button
              ref={addChikageiBtnRef}
              leftIcon={<AddIcon />}
              colorScheme="purple"
              onClick={onOpen}
            >
              Add Chikagei
            </Button>
          </HStack>
          <ChikageiForm
            key="create-chikagei-form"
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={addChikageiBtnRef}
          />
        </>
      ) : null}

      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Japanese Name</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allChikagei.map((chikagei) => (
              <Tr key={`chikagei-${chikagei.id}`}>
                <Td>{chikagei.name}</Td>
                <Td>{chikagei.jp_name}</Td>
                <Td>
                  <HStack spacing={3}>
                    <Button
                      as={InertiaLink}
                      href={`/chikagei/${chikagei.url_alias ?? chikagei.id}`}
                      variant="solid"
                      colorScheme="teal"
                      leftIcon={<InfoIcon />}
                    >
                      Detailed View
                    </Button>
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

export default ChikageiList;
