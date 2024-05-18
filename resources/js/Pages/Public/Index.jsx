import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  ListItem,
  Skeleton,
  SkeletonText,
  Stack,
  UnorderedList,
} from '@chakra-ui/react';
import { useState } from 'react';

import { PublicLayout } from '@/components/PublicLayout';

const Index = () => {
  return (
    <PublicLayout title="Index">
      <Grid minH="300px" templateColumns="repeat(3, 1fr)" gap={4} p={4}>
        <GridItem as={Card} colSpan={2}>
          <CardHeader>
            <Heading as="h1" size="lg">
              About
            </Heading>
          </CardHeader>
          <CardBody>
            <SkeletonText noOfLines={5} spacing={4} skeletonHeight={2} />
          </CardBody>
        </GridItem>
        <GridItem as={Card}>
          <CardHeader>
            <Heading as="h1" size="lg">
              Recently Updated
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Skeleton h="20px" />
              <Skeleton h="20px" />
              <Skeleton h="20px" />
              <Skeleton h="20px" />
            </Stack>
          </CardBody>
        </GridItem>
      </Grid>
    </PublicLayout>
  );
};

export default Index;
