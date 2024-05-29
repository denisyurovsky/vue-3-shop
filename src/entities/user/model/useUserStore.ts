import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useUserStore = defineStore('user', () => {

  const isAuth = ref(true);
  const user = reactive({
    name: 'Denzel'
  })

  const logout = () => {
    isAuth.value = false;
  }

  const login = () => {
    isAuth.value = true;
  }

  return {isAuth, user, logout, login}
})