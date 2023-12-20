import { create } from "zustand";

interface AppState {
  isDeleteModalOpen: boolean;
  setIsDeleteModalOpen: (open: boolean) => void;

  isRenameModalOpen: boolean;
  setIsRenameModalOpen: (open: boolean) => void;

  fileId: string | null;
  setFileId: (fileId: string) => void;

  filename: string;
  setFilename: (filename: string) => void;
}

export const useAppStor = create<AppState>()((set) => ({
  fileId: null,
  setFileId: (fileId: string) => set((_state) => ({ fileId })),

  filename: "",
  setFilename: (filename: string) => set((_state) => ({ filename })),

  isdeleteModalOpen: false,
  setIsDeleteModalOpen: (open) =>
    set((_state) => ({ isDeleteModalOpen: open })),

  isRenameModalOpen: false,
  setIsRenameModalOpen: (open) =>
    set((_state) => ({ isRenameModalOpen: open })),
}));
