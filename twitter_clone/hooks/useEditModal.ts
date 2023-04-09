import { create } from 'zustand';

interface EditModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onclose: () => void;
}

const useEditModal = create<EditModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({isOpen:true}),
    onclose: () => set({isOpen:false}),
}));

export default useEditModal;