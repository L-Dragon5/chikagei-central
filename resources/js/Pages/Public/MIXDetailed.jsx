import { ChevronRightIcon, EditIcon } from '@chakra-ui/icons';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  HStack,
  SimpleGrid,
  Skeleton,
  Spacer,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';
import Markdown from 'react-markdown';

import { PublicLayout } from '@/components/PublicLayout';
import { useAuthUser } from '@/lib/user';

const MIXDetailed = ({ mix }) => {
  const { user } = useAuthUser();

  return (
    <PublicLayout title={mix.name}>
      <Breadcrumb
        bgColor={useColorModeValue('gray.200', 'gray.500')}
        px={6}
        py={2}
        spacing={2}
        separator={<ChevronRightIcon color="gray.500" />}
      >
        <BreadcrumbItem>
          <BreadcrumbLink as={InertiaLink} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink as={InertiaLink} href="/mix">
            MIX List
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink href="#" fontWeight="500">
            {mix.name}
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>

      {user ? (
        <HStack bgColor={useColorModeValue('red.200', 'red.700')} p={4}>
          <Heading as="h4" size="md">
            Admin Tools
          </Heading>
          <Spacer />
          <Button leftIcon={<EditIcon />} colorScheme="purple">
            Edit MIX
          </Button>
        </HStack>
      ) : null}

      <Box p={4}>
        <Heading as="h1" size="2xl">
          {mix.name}
        </Heading>
        {mix.jp_name && (
          <Heading as="h2" size="lg">
            <em>{mix.jp_name}</em>
          </Heading>
        )}

        <Grid
          gridTemplateColumns="repeat(3, 1fr)"
          gridTemplateRows="repeat(2, 1fr)"
          gap={8}
          mt={8}
        >
          <Card as={GridItem}>
            <CardHeader>
              <Heading as="h4" size="md">
                English Romaji
              </Heading>
            </CardHeader>
            <CardBody as={Markdown}>{mix.words}</CardBody>
          </Card>
          <Card as={GridItem}>
            <CardHeader>
              <Heading as="h4" size="md">
                Original Japanese
              </Heading>
            </CardHeader>
            <CardBody as={Markdown}>{mix.jp_words}</CardBody>
          </Card>
          <Card as={GridItem} rowSpan={2}>
            <CardHeader>
              <Heading as="h4" size="md">
                Song Examples
              </Heading>
            </CardHeader>
            <CardBody as={Stack}>
              <Skeleton h="20px" />
              <Skeleton h="20px" />
              <Skeleton h="20px" />
            </CardBody>
          </Card>
          <Card as={GridItem} mt={8} colSpan={2}>
            <CardHeader>
              <Heading as="h4" size="md">
                Notes
              </Heading>
            </CardHeader>
            <CardBody as={Markdown}>{mix.notes}</CardBody>
          </Card>
        </Grid>
      </Box>
    </PublicLayout>
  );
};

export default MIXDetailed;
