import { Song } from "@/types";

import usePlayer from "./usePlayer";
// import useSubscribeModal from "./useSubscribeModal";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";
import toast from "react-hot-toast";

const useOnPlay = (songs: Song[]) => {
  console.log("useOnplay");
  const player = usePlayer();
  //   const subscribeModal = useSubscribeModal();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onPlay = (id: string) => {
    console.log("onPlay");
    if (!user) {
      toast.error("Logon to Listen");
      return authModal.onOpen();
    }

    player.setId(id);
    player.setIds(songs.map((song) => song.id));
  };

  return onPlay;
};

export default useOnPlay;
