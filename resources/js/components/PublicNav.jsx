import { MoonIcon, SearchIcon, SunIcon } from '@chakra-ui/icons';
import {
  Avatar,
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

import { useAuthUser } from '@/lib/user';

export const PublicNav = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { url } = usePage();
  const { user } = useAuthUser();

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
      position="sticky"
      top={0}
      zIndex={1}
    >
      <HStack spacing={8}>
        <Link
          as={InertiaLink}
          href="/"
          borderBottom={url === '/' ? '1px solid' : null}
          _hover={{ borderBottom: '1px solid' }}
        >
          Home
        </Link>

        {links.map((linkObj) => (
          <Link
            key={`nav-${linkObj.name}`}
            as={InertiaLink}
            href={linkObj.route}
            borderBottom={url.startsWith(linkObj.route) ? '1px solid' : null}
            _hover={{ borderBottom: '1px solid' }}
          >
            {linkObj.name}
          </Link>
        ))}
      </HStack>
      <Spacer />
      <HStack>
        <IconButton
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
        />
        {user?.id && <Avatar name={`Admin ${user.id}`} />}
      </HStack>
    </Flex>
  );
};
