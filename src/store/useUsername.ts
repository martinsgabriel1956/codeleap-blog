import { create } from 'zustand'

type Username = {
  username: string | null;
  setUsername: (username: string) => void;
  getUsername: () => void;
}

export const useUsername = create<Username>((set) => {
  return {
    username: null,
    setUsername(username: string){
      if (username) {
        localStorage.setItem("username", username)
        set(() => {
          return {
            username
          }
        })
      }
    },
    getUsername() {
      const getUser = localStorage.getItem("username");
      set(() => {
        return {
          username: getUser
        }
      })
    }
  }
})