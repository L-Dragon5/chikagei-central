import { Flex, Text } from '@chakra-ui/react';

export const PublicFooter = () => {
  return (
    <Flex px={6} py={2} bgColor="gray.600" gridRowStart="3" gridRowEnd="4">
      <Text color="white">&copy; 2024 Chikagei Central</Text>
    </Flex>
  );
};
