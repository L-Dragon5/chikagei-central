import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import {
  Flex,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Spacer,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as InertiaLink, usePage } from '@inertiajs/react';
import { useDebounce } from '@uidotdev/usehooks';
import { useState } from 'react';

export const PublicNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { url } = usePage();

  const [quickSearchValue, setQuickSearchValue] = useState('');
  const debouncedQuickSearchValue = useDebounce(quickSearchValue, 300);

  const links = [
    { route: '/chikagei', name: 'Chikagei List' },
    { route: '/mix', name: 'MIX List' },
  ];

  const handleQuickSearchChange = (e) => {
    setQuickSearchValue(e.target.value);
  };

  return (
    <Flex
      px={6}
      py={2}
      bgColor={useColorModeValue('orange.200', 'orange.700')}
      shadow="md"
    >
      <HStack spacing={4}>
        <Link
          as={InertiaLink}
          href="/"
          borderBottom={url === '/' ? '1px solid' : null}
          _hover={{ borderBottom: null }}
        >
          Home
        </Link>

        {links.map((linkObj) => (
          <Link
            key={`nav-${linkObj.name}`}
            as={InertiaLink}
            href={linkObj.route}
            borderBottom={url.startsWith(linkObj.route) ? '1px solid' : null}
            _hover={{ borderBottom: null }}
          >
            {linkObj.name}
          </Link>
        ))}
      </HStack>
      <Spacer />
      <HStack>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.500" />
          </InputLeftElement>
          <Input
            bgColor={useColorModeValue('gray.50', 'gray.600')}
            placeholder="Quick search"
            onChange={handleQuickSearchChange}
            _placeholder={{ color: 'gray.500' }}
          />
        </InputGroup>
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
      </HStack>
    </Flex>
  );
};
