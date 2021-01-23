import {Heading, Box} from "@chakra-ui/react";
import ListSection from "./ListSection";
import GridSection from "./GridSection";

export default function Section ({section}) {
    let currentSection;

    switch(section.sectionType) {
        case "LIST":
            currentSection = <ListSection content={section.content}/>
            break
        case "GRID":
            currentSection = <GridSection content={section.content}/>
            break
        default:
            currentSection = <></>
            break
    }

    return <Box textAlign="left" mb={8}>
        <Heading mb={6} as="h2" size="lg">{section.title}</Heading>
        {currentSection}
    </Box>
}