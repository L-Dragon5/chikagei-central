import { Flex, Link, Spacer, Text } from '@chakra-ui/react';

export const PublicFooter = () => {
  return (
    <Flex px={6} py={2} bgColor="gray.600" gridRowStart="3" gridRowEnd="4">
      <Text color="white">&copy; 2024 Chikagei Central</Text>
      <Spacer />
      <Text color="white">
        Built by{' '}
        <Link href="https://x.com/LDragon555" isExternal>
          @L-Dragon{' '}
        </Link>
        with help from{' '}
        <Link href="https://x.com/midnightaerie" isExternal>
          @Midnight Aerie
        </Link>
      </Text>
    </Flex>
  );
};
