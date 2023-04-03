import { Box, Flex, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { GrTwitter } from 'react-icons/gr';


const Footer = () => {
    return (
        <footer>
            <Flex my="50px"  align="center" justify="center" fontSize="25px" gap="5px" >
                <Box color="twitter.600" mt="2px"><GrTwitter/></Box>
                <Link color="white" href='https://twitter.com/0xdevnet_eth' target={'_blank'}>Built with React.JS by 0xdevnet.eth</Link>
            </Flex>
        </footer>
    );
};

export default Footer;