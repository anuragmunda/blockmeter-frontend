import { create } from "zustand";
import { io, Socket } from "socket.io-client";

const bacekndUrl = "http://localhost:3001"
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