import { useUsername } from "../../store/useUsername"

export function useHome() {
  const username = useUsername(state => state.username);

  return {
    username
  }
}
