import {
  Card,
  CardBody,
  CardHeader,
  Grid,
  GridItem,
  Heading,
  Link,
  ListItem,
  Stack,
  Text,
  UnorderedList,
  useBreakpointValue,
} from '@chakra-ui/react';
import { Link as InertiaLink } from '@inertiajs/react';

import { PublicLayout } from '@/components/PublicLayout';

const Index = ({ updatedChikagei, updatedMix }) => {
  const templateColumns = useBreakpointValue({
    base: '1fr',
    md: 'repeat(3, minmax(300px, 1fr))',
  });
  const templateRows = useBreakpointValue({
    base: 'repeat(4, 500px)',
    md: 'repeat(2, minmax(300px, 1fr))',
  });

  return (
    <PublicLayout title="Index" p={4}>
      <Grid
        minH="300px"
        templateColumns={templateColumns}
        templateRows={templateRows}
        gap={4}
      >
        <GridItem as={Card} colSpan={[1, null, null, 2]}>
          <CardHeader>
            <Heading as="h1" size="lg">
              About
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack spacing={4}>
              <Text>
                There are dozens of guides out there with information on MIXs
                and calls for songs, but there is often a language barrier
                (they’re all written in Japanese) or they exist on a separate
                PDF that you have to dig up. This site was built to be a pocket
                database for English native Wotas to be able to instantaneously
                pull up a MIX or song guide on the spot for reference purposes.{' '}
              </Text>
              <Text>
                As it is with a lot of other stuff, there is a time and place
                for everything. Taiga and MIX at your own leisure, but do so
                responsibly. This is solely to be a quick text reference and was
                not intended to be a tutorial for MIX culture.
              </Text>
            </Stack>
          </CardBody>
        </GridItem>
        <GridItem as={Card} rowSpan={[1, null, null, 2]}>
          <CardHeader>
            <Heading as="h1" size="lg">
              Recently Updated
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Heading as="h4" size="md">
                Chikagei
              </Heading>
              <UnorderedList>
                {updatedChikagei.map((chikagei) => (
                  <ListItem key={chikagei.id}>
                    <Link
                      as={InertiaLink}
                      herf={`/chikagei/${chikagei.url_alias ?? chikagei.id}`}
                    >
                      <Text fontSize="xl">{chikagei.name}</Text>
                      <Text fontSize="md">
                        [
                        {chikagei.updated_at
                          ? new Date(chikagei.updated_at).toLocaleString()
                          : 'N/A'}
                        ]
                      </Text>
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </Stack>
            <Stack mt={8}>
              <Heading as="h4" size="md">
                MIX
              </Heading>
              <UnorderedList>
                {updatedMix.map((mix) => (
                  <ListItem key={mix.id}>
                    <Link
                      as={InertiaLink}
                      herf={`/mix/${mix.url_alias ?? mix.id}`}
                    >
                      <Text fontSize="xl">{mix.name}</Text>
                      <Text fontSize="md">
                        [
                        {mix.updated_at
                          ? new Date(mix.updated_at).toLocaleString()
                          : 'N/A'}
                        ]
                      </Text>
                    </Link>
                  </ListItem>
                ))}
              </UnorderedList>
            </Stack>
          </CardBody>
        </GridItem>

        <GridItem as={Card}>
          <CardHeader>
            <Heading as="h2" size="md">
              Notes about MIX
            </Heading>
          </CardHeader>
          <CardBody>
            <Stack>
              <Text>
                You will see ◯◯◯ used quite often in this database. This is what
                we call an “oshi-call” and it’s where you yell the name of your
                favorite member.
              </Text>
              <Text>
                Typically when you perform “Ahhh 👏👏 Jyaa Ikuzo!” the “Ahhh” is
                accompanied by three 👏👏👏 with a pause between the first clap
                and second clap. So in total, you should be performing five
                claps.
              </Text>
            </Stack>
          </CardBody>
        </GridItem>
        <GridItem as={Card}>
          <CardHeader>
            <Heading as="h2" size="md">
              Sources
            </Heading>
          </CardHeader>
          <CardBody>
            <UnorderedList>
              <ListItem>
                <Link
                  href="https://shikaku-kenkyujyo.com/maneki-kecak/mix/"
                  isExternal
                >
                  https://shikaku-kenkyujyo.com/maneki-kecak/mix/
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://yestiger.wordpress.com/2018/03/07/idol-101-how-to-do-idol-calls-and-mixes/">
                  https://yestiger.wordpress.com/2018/03/07/idol-101-how-to-do-idol-calls-and-mixes/
                </Link>
              </ListItem>
              <ListItem>Videos from YouTube</ListItem>
              <ListItem>Videos from X (formerly Twitter)</ListItem>
              <ListItem>Other Taigas</ListItem>
            </UnorderedList>
          </CardBody>
        </GridItem>
      </Grid>
    </PublicLayout>
  );
};

export default Index;
