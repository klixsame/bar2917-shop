import { UserService } from "@/app/services/user.service";
import { IFullUser } from "@/app/types/user.interface";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";


export const useProfile = () => {

  const { user } = useAuth()

  const { data } = useQuery({
    queryKey: ['get profile'],
    queryFn: () => UserService.getProfile(),
    select: (data) => data.data,
    enabled: !!user
  });

  return { profile: data || ({} as IFullUser)};
};
