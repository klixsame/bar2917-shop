import { useRouter } from "next/navigation";
import { FC } from "react";
import { MdDeleteForever } from "react-icons/md";
import { RiEdit2Line, RiExternalLinkLine } from "react-icons/ri";
import { IListItem } from "../admin-list.interface";
import { button } from "@nextui-org/react";

interface IAdminActions extends Pick<IListItem, 'editUrl' | 'viewUrl'> {
    removeHandler?: () => void;
}

const AdminActions: FC<IAdminActions> = ({
    editUrl,
    viewUrl,
    removeHandler
}) => {
    const { push } = useRouter()

    return (
        <div className="flex-row gap-4 mr-2">
            {viewUrl && (
                <button onClick={() => push(viewUrl)}>
                    <RiExternalLinkLine size={22} className="hover:text-orange-500"/>
                </button>
            )}
            {editUrl && (
                <button onClick={() => push(editUrl)}>
                    <RiEdit2Line size={22} className="hover:text-orange-500"/>
                </button>
            )}
            {removeHandler && (
                <button onClick={removeHandler}>
                    <MdDeleteForever size={22} className="hover:text-orange-500"/>
                </button>
            )}
        </div>
    )
}

export default AdminActions