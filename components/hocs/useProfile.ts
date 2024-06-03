import { UserService } from "@/app/services/user.service";
import { IFullUser } from "@/app/types/user.interface";
import { useQuery } from "@tanstack/react-query";


export const useProfile = () => {
  const { data } = useQuery({
    queryKey: ['get profile'],
    queryFn: () => UserService.getProfile(),
    select: (data) => data.data,
  });

  return { profile: data || ({} as IFullUser)};
};
