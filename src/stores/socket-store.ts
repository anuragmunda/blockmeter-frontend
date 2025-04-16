import { create } from "zustand";
import { io, Socket } from "socket.io-client";

const bacekndUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
type SocketStoreState = {
    socket: Socket | null;
}

type SocketStoreActions = {
    setSocket: (socket: Socket) => void;
}

const useSocketStore = create<SocketStoreState & SocketStoreActions>((set) => ({
    socket: io(bacekndUrl),
    setSocket: (socket) => set(() => ({ socket })),
}))

export default useSocketStore