import { HStack, VStack, Icon, Image, Text } from '@chakra-ui/react'
import { BsThreeDots } from "react-icons/bs";

const ProfileButton: React.FC = () => {
  return (
    <HStack pt={4} justifyContent="space-between" alignItems="center">
      <HStack>
        <Image
          boxSize="40px"
          borderRadius="full"
          objectFit="cover"
          src="https://pbs.twimg.com/profile_images/1207638042049236992/9q7TmUVS_x96.jpg"
          alt="Diego Acosta"
        />
        <VStack alignItems="start" spacing={0}>
          <Text fontWeight="bold">Diego Acosta</Text>
          <Text fontSize="sm" color="gray.500">
            @diegoacosta211
          </Text>
        </VStack>
      </HStack>
      <Icon as={BsThreeDots} w={6} h={6} />
    </HStack>
  );
}

export default ProfileButton
