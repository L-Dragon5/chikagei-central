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
import { MixForm } from '@/components/MixForm';
import { PublicLayout } from '@/components/PublicLayout';
import { useAuthUser } from '@/lib/user';

const MIXDetailed = ({ mix }) => {
  const { user } = useAuthUser();

  const { isOpen, onOpen, onClose } = useDisclosure();
  const editMixBtnRef = useRef();

  const breadcrumbData = [
    { href: '/mix', name: 'MIX List' },
    { href: '#', name: mix.name, isCurrentPage: true },
  ];

  return (
    <PublicLayout title={mix.name}>
      <Breadcrumbs breadcrumbData={breadcrumbData} />

      {user ? (
        <>
          <HStack bgColor={useColorModeValue('red.200', 'red.700')} p={4}>
            <Heading as="h4" size="md">
              Admin Tools
            </Heading>
            <Spacer />
            <Button
              ref={editMixBtnRef}
              leftIcon={<EditIcon />}
              colorScheme="purple"
              onClick={onOpen}
            >
              Edit MIX
            </Button>
          </HStack>
          <MixForm
            key={`edit-mix-form-${mix.id}`}
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={editMixBtnRef}
            mix={mix}
          />
        </>
      ) : null}

      <Box p={4}>
        <Heading as="h1" size="2xl">
          {mix.name}
        </Heading>
        {mix.jp_name && (
          <Heading as="h2" size="lg" fontStyle="italic">
            {mix.jp_name}
          </Heading>
        )}

        <Grid
          gridTemplateColumns="repeat(2, 1fr)"
          gridTemplateRows="repeat(2, 1fr)"
          gap={4}
          mt={8}
        >
          <Card as={GridItem}>
            <CardHeader>
              <Heading as="h4" size="md">
                English Romaji
              </Heading>
            </CardHeader>
            <CardBody
              as={MDEditor.Markdown}
              source={mix.words}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </Card>
          <Card as={GridItem}>
            <CardHeader>
              <Heading as="h4" size="md">
                Original Japanese
              </Heading>
            </CardHeader>
            <CardBody
              as={MDEditor.Markdown}
              source={mix.jp_words}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </Card>
          <Card as={GridItem} mt={8} colSpan={2}>
            <CardHeader>
              <Heading as="h4" size="md">
                Notes
              </Heading>
            </CardHeader>
            <CardBody
              as={MDEditor.Markdown}
              source={mix.notes ?? 'No notes found'}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </Card>
          <Card as={GridItem} colSpan={2}>
            <CardHeader>
              <Heading as="h4" size="md">
                Examples
              </Heading>
            </CardHeader>
            <CardBody
              as={MDEditor.Markdown}
              source={mix.examples ?? 'No examples found'}
              style={{ whiteSpace: 'pre-wrap' }}
            />
          </Card>
        </Grid>
      </Box>
    </PublicLayout>
  );
};

export default MIXDetailed;
