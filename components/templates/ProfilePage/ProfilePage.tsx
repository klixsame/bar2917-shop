import { useAuth } from "@/components/hocs/useAuth";
import { useProfile } from "@/components/hocs/useProfile";
import Loader from "@/components/ui/Loader";
import { Input } from "@nextui-org/react";


const ProfilePage = () => {
    const { profile } = useProfile();

    const {isLoading} = useAuth()

    
    return (
        <div className="w-1/2">
            <form className="h-96 rounded-lg bg-background-card shadow-sm p-9">

                    {isLoading ? ( <Loader /> ) : (<>

                        <Input
                        className="input-custom mb-1"
                        type="text" 
                        label="Ваше имя" 
                        value={profile.name}
                        size="sm"
                        isReadOnly
                        errorMessage="Неверное имя" />
                        
                        <Input 
                        className="input-custom mb-3"
                        type={"text"}
                        label="Ваш телефон" 
                        value={profile.phone}
                        color="default"
                        size="sm"
                        errorMessage="Телефон"
                        />

                        <Input 
                        className="input-custom mb-3"
                        type={"text"}
                        label="Дата рождения" 
                        value={profile.birthdate}
                        color="default"
                        size="sm"
                        errorMessage="Дата рождения"
                        />

                        <Input 
                        className="input-custom mb-3"
                        type={"text"}
                        label="Почта" 
                        value={profile.email}
                        color="default"
                        size="sm"
                        errorMessage="Дата рождения"
                        />


                    <div className="justify-center flex-row">
                    </div>
                    </>)}
            </form>
        </div> 
    )

}

export default ProfilePage