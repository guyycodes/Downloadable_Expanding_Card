import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";


export const Announcement = () => {

    let marqueeText = "Every little bit helps me improve and add the features you want, while remaining free, no sign-ups, no data collection, just bringing value for free. Consider making a small donation to help out. Thank you for your support!";
    let marquee = Array(2).fill(marqueeText); 

    return(
        <Box>
        <Button type="button"
            w="100%"
            p="1em 1"
            left={0}
            zIndex={-1}
            overflow="hidden"
            whiteSpace="nowrap"
            position="absolute"
            display="flex"
            color="#ffeaa7"
            lineHeight="1"
            fontSize="1.25rem"
            textTransform="uppercase"
            fontFamily="Work Sans"
            border="none"
            borderBottom="2px solid #E5E4E2"
            backgroundColor="#2d3436"
            _hover={{ backgroundColor: "rgba(99, 110, 114, 0.5)",
            "> span": { animationPlayState: "paused" } // Targeting child spans on hover
          }}
          sx={{
            "@keyframes marquee": {
              to: { transform: "translateX(-100%)" },
            }
          }}
        >
        {marquee.map((item, index) => (
          <Text 
            key={index}
            as="span" 
            sx={{
              animation: `marquee ${35}s infinite normal linear`,
              padding: "0 0.5em",
            }}>{item}</Text>
        ))}

        </Button>
      </Box>

    )
}