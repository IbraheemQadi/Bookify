import { City } from "@/entities/City";
import { Hotel } from "@/entities/Hotel";
import { Room } from "@/entities/Room";
import { createContext, useContext, useState } from "react";

interface AdminDrawerContext {
  selectedRow: City | Hotel | Room | null;
  isOpen: boolean;
  openDrawer: (row: City | Hotel | Room) => void;
  closeDrawer: () => void;
  isOpenForCreate: boolean;
  openDrawerForCreate: () => void;
}

const AdminDrawerContext = createContext<AdminDrawerContext>(
  {} as AdminDrawerContext
);

export const useAdminDrawer = () => useContext(AdminDrawerContext);

interface AdminDrawerProviderProps {
  children: React.ReactNode;
}

export function AdminDrawerProvider({ children }: AdminDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenForCreate, setIsOpenForCreate] = useState(false);
  const [selectedRow, setSelectedRow] = useState<City | Hotel | Room | null>(
    null
  );

  const openDrawer = (row: City | Hotel | Room) => {
    setIsOpen(true);
    setSelectedRow(row);
  };

  const closeDrawer = () => {
    setIsOpenForCreate(false);
    setIsOpen(false);
    setSelectedRow(null);
  };

  const openForCreate = () => {
    setIsOpenForCreate(true);
    openDrawer({} as City);
  };

  return (
    <AdminDrawerContext.Provider
      value={{
        selectedRow,
        isOpen,
        openDrawer,
        closeDrawer,
        isOpenForCreate,
        openDrawerForCreate: openForCreate,
      }}
    >
      {children}
    </AdminDrawerContext.Provider>
  );
}
