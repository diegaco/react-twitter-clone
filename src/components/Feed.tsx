import {
  Text,
  Icon,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Image,
  StackDivider,
  Input,
  Button,
  CircularProgress,
  Box,
  useColorModeValue,
  Divider,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { BsStars, BsImage } from "react-icons/bs";
import {
  AiOutlineCalendar,
  AiOutlineGif,
  AiOutlineSmile,
} from "react-icons/ai";
import {
  RiBarChartHorizontalFill,
  RiBarChartHorizontalLine,
} from "react-icons/ri";
import { useMemo, useState } from "react";

const Feed: React.FC = () => {
  const [tweets, setTweets] = useState<string[]>([]);
  const progressColor = useColorModeValue("gray.300", "whiteAlpha.300");
  // const trackColor = useColorModeValue();

  return (
    <Stack py={3} spacing={4} divider={<StackDivider />}>
      <Stack>
        <Stack direction="row" px={4} justifyContent="space-between">
          <Text fontSize="xl" as="h2" fontWeight="bold">
            Inicio
          </Text>
          <Icon as={BsStars} w={6} h={6} />
        </Stack>
      </Stack>
      <Stack>
        <Stack direction="row" px={4}>
          <Image
            boxSize="48px"
            borderRadius="full"
            objectFit="cover"
            src="https://pbs.twimg.com/profile_images/1207638042049236992/9q7TmUVS_x96.jpg"
            alt="Diego Acosta"
          />
          <Stack spacing={4} py={3} divider={<StackDivider />} flexBasis="100%">
            <Input
              _placeholder={{ color: "gray.300" }}
              variant="unstyled"
              placeholder="¿Qué está pasando?"
              fontSize="xl"
              fontWeight="600"
            />
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" spacing={4}>
                <Icon as={BsImage} w={5} h={5} />
                <Icon as={AiOutlineGif} w={5} h={5} />
                <Icon as={RiBarChartHorizontalLine} w={5} h={5} />
                <Icon as={AiOutlineSmile} w={5} h={5} />
                <Icon as={AiOutlineCalendar} w={5} h={5} />
              </Stack>
              <Stack direction="row" spacing={4}>
                <Stack
                  spacing={3}
                  direction="row"
                  divider={<StackDivider />}
                  alignItems="center"
                >
                  <CircularProgress
                    value={10}
                    size={6}
                    thickness="6"
                    trackColor={progressColor}
                  />
                  <Button
                    colorScheme="primary"
                    variant="outline"
                    px={0}
                    py={0}
                    width={6}
                    height={6}
                    minW="initial"
                    fontWeight="normal"
                  >
                    {" "}
                    +{" "}
                  </Button>
                </Stack>
                <Button
                  onClick={() => setTweets(() => [...tweets, String(+new Date())])}
                  variant="solid"
                  colorScheme="primary"
                  size="sm"
                >
                  Twittear
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <AnimatePresence>
        <Stack divider={<StackDivider />} py={3} spacing={4}>
        {tweets.map((index) => (
          <Stack
            key={index}
            spacing={4}
            px={4}
            as={motion.div}
            layoutId={String(index)}
            initial={{ scale: 0}}
            animate={{ scale: 1}}
            exit={{ scale: 0}}
            onClick={() => setTweets(() => tweets.filter(tweet => tweet != index))}
          >
            <Stack direction="row" spacing={4} alignItems="center">
              <SkeletonCircle w={12} h={12} />
              <Stack>
                <Skeleton width="120px" height={6} />
                <Skeleton width="80px" height={3} />
              </Stack>
            </Stack>
            <SkeletonText noOfLines={6} height={24} />
          </Stack>
        ))}
        </Stack>
      </AnimatePresence>
    </Stack>
  );
};

export default Feed;
