import { City } from "@/entities/City";
import { Hotel } from "@/entities/Hotel";
import { Room } from "@/entities/Room";
import { createContext, useContext, useState } from "react";

interface AdminDrawerContext {
  selectedRow: City | Hotel | Room | null;
  isOpen: boolean;
  openDrawer: (row: City | Hotel | Room) => void;
  closeDrawer: () => void;
}

const AdminDrawerContext = createContext<AdminDrawerContext>(
  {} as AdminDrawerContext
);

export const useAdminDrawer = () => useContext(AdminDrawerContext);

interface AdminDrawerProviderProps {
  children: React.ReactNode;
}

export function AdminDrawerProvider({ children }: AdminDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedRow, setSelectedRow] = useState<City | Hotel | Room | null>(
    null
  );

  const openDrawer = (row: City | Hotel | Room) => {
    setIsOpen(true);
    setSelectedRow(row);
  };

  const closeDrawer = () => {
    setIsOpen(false);
    setSelectedRow(null);
  };

  return (
    <AdminDrawerContext.Provider
      value={{ selectedRow, isOpen, openDrawer, closeDrawer }}
    >
      {children}
    </AdminDrawerContext.Provider>
  );
}
