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
  useDisclosure,
} from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';
import MDEditor from '@uiw/react-md-editor';
import { useRef } from 'react';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { MixForm } from '@/components/MixForm';
import { PublicLayout } from '@/components/PublicLayout';
import { useAuthUser } from '@/lib/user';

const MIXList = ({ allMix }) => {
  const { user } = useAuthUser();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const addMixBtnRef = useRef();

  const breadcrumbData = [{ href: '#', name: 'MIX List', isCurrentPage: true }];

  return (
    <PublicLayout title="MIX List">
      <Breadcrumbs breadcrumbData={breadcrumbData} />

      {user ? (
        <>
          <HStack bgColor={useColorModeValue('red.200', 'red.700')} p={4}>
            <Heading as="h4" size="md">
              Admin Tools
            </Heading>
            <Spacer />
            <Button
              ref={addMixBtnRef}
              leftIcon={<AddIcon />}
              colorScheme="purple"
              onClick={onOpen}
            >
              Add MIX
            </Button>
          </HStack>
          <MixForm
            key="create-mix-form"
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={addMixBtnRef}
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
            {allMix.map((mix) => (
              <Tr key={`mix-${mix.id}`}>
                <Td>{mix.name}</Td>
                <Td>{mix.jp_name}</Td>
                <Td>
                  <HStack spacing={3}>
                    <Button
                      as={InertiaLink}
                      href={`/mix/${mix.url_alias ?? mix.id}`}
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
                        <PopoverBody>
                          <MDEditor.Markdown
                            source={mix.words}
                            style={{ whiteSpace: 'pre-wrap' }}
                          />
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
