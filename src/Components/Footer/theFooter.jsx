import React from 'react';
import { Box, Flex, Link, Icon } from '@chakra-ui/react';
import { FaLinkedin, FaInstagram, FaMeetup, FaTelegram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <Box as="footer" p={4} bg="gray.100">
      <Flex justify="center">
        <Link href="https://www.linkedin.com/in/guymorganb" isExternal mr={4}>
          <Icon as={FaLinkedin} boxSize={6} />
        </Link>
        <Link href="https://www.instagram.com/guyycodes" isExternal mr={4}>
          <Icon as={FaInstagram} boxSize={6} />
        </Link>
        <Link href="https://www.meetup.com/rgv-tech-meetup" isExternal mr={4}>
          <Icon as={FaMeetup} boxSize={6} />
        </Link>
        <Link href="https://www.guymorganb.com" isExternal mr={4}>
          guymorganb.com
        </Link>
        <Link href="https://t.me/guyycodes" isExternal>
          <Icon as={FaTelegram} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
};