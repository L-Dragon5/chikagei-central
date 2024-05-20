import { EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  HStack,
  Spacer,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import MDEditor from '@uiw/react-md-editor';
import { useRef } from 'react';

import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ChikageiForm } from '@/components/ChikageiForm';
import { PublicLayout } from '@/components/PublicLayout';
import { useAuthUser } from '@/lib/user';

const ChikageiDetailed = ({ chikagei }) => {
  const { user } = useAuthUser();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const editChikageiBtnRef = useRef();

  const breadcrumbData = [
    { href: '/chikagei', name: 'Chikagei List' },
    { href: '#', name: chikagei.name, isCurrentPage: true },
  ];

  return (
    <PublicLayout title={chikagei.name}>
      <Breadcrumbs breadcrumbData={breadcrumbData} />

      {user ? (
        <>
          <HStack bgColor={useColorModeValue('red.200', 'red.700')} p={4}>
            <Heading as="h4" size="md">
              Admin Tools
            </Heading>
            <Spacer />
            <Button
              ref={editChikageiBtnRef}
              leftIcon={<EditIcon />}
              colorScheme="purple"
              onClick={onOpen}
            >
              Edit MIX
            </Button>
          </HStack>
          <ChikageiForm
            key={`edit-chikagei-form-${chikagei.id}`}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={editChikageiBtnRef}
            chikagei={chikagei}
          />
        </>
      ) : null}

      <Box p={4}>
        <Heading as="h1" size="2xl">
          {chikagei.name}
        </Heading>
        {chikagei.jp_name && (
          <Heading as="h2" size="lg" fontStyle="italic">
            {chikagei.jp_name}
          </Heading>
        )}

        <Grid
          gridTemplateColumns="1fr"
          gridTemplateRows="repeat(2, 1fr)"
          gap={4}
          mt={8}
        >
          <Card as={GridItem}>
            <CardHeader>
              <Heading as="h4" size="md">
                Examples
              </Heading>
            </CardHeader>
            <CardBody
              as={MDEditor.Markdown}
              source={chikagei.examples ?? 'No examples found'}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </Card>
          <Card as={GridItem} mt={8}>
            <CardHeader>
              <Heading as="h4" size="md">
                Notes
              </Heading>
            </CardHeader>
            <CardBody
              as={MDEditor.Markdown}
              source={chikagei.notes ?? 'No notes found'}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </Card>
        </Grid>
      </Box>
    </PublicLayout>
  );
};

export default ChikageiDetailed;
