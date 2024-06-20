import { Pagination, PaginationCursor, PaginationItem } from "@nextui-org/pagination";
import { FC, useState } from "react";
import Loader from "../../Loader";
import AdminListItem from "./AdminListItem";
import { IListItem } from "./admin-list.interface";

interface IAdminList {
    listItems?: IListItem[];
    isLoading: boolean;
    removeHandler?: (id: number) => void;
}

const AdminList: FC<IAdminList> = ({
    listItems = [],
    isLoading,
    removeHandler
}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 7;

    const startIndex = (currentPage - 1) * itemsPerPage;
    const visibleItems = listItems.slice(startIndex, startIndex + itemsPerPage);

    const totalPages = Math.ceil(listItems.length / itemsPerPage);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : listItems.length ? (
                <>
                <div className="justify-between h-full gap-3">
                    {visibleItems.map(listItem => (
                        
                        <AdminListItem
                            key={listItem.id}
                            removeHandler={removeHandler ? () => removeHandler(listItem.id) : undefined}
                            listItem={listItem}
                        />
                        
                    ))}
                    </div>
                    <div className="flex-row justify-center items-center h-24 w-7/12">
                    <Pagination
                        total={totalPages}
                        page={currentPage}
                        onChange={handlePageChange}
                        aria-label="Pagination Navigation"
                        siblings={2}
                        loop 
                        showControls
                        classNames={{
                            cursor:
                              "bg-background-button-card",
                          }}
                    >
                        {Array.from(Array(totalPages).keys()).map(page => (
                            <PaginationItem
                                key={`page-${page + 1}`}
                                isActive={currentPage === page + 1}
                                onClick={() => handlePageChange(page + 1)}
                            >
                                {page + 1}
                            </PaginationItem>
                        ))}
                        <PaginationCursor
                            onClick={() => handlePageChange(currentPage - 1)}
                        />
                        <PaginationCursor
                            onClick={() => handlePageChange(currentPage + 1)}
                        />
                    </Pagination>
                    </div>
                </>
            ) : (
                <div>Элементы не найдены</div>
            )}
        </div>
    );
};

export default AdminList;
