import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      userName: 'Niccolas Barton ',
      email: 'niccolas.barton@porsche-consulting.com',
      memberSince: '8/12/2020',
      pfp: 'https://media.licdn.com/dms/image/C4E03AQEulW8Rjr-NrA/profile-displayphoto-shrink_800_800/0/1581865220860?e=1719446400&v=beta&t=V2XxjHUZAjFXO7nSjcD1sz1bUC7jeYMYvyv49PzjT9E',
      is2FAEnabled: false,
    }
  },

  actions: {
    toggle2FA() {
      this.is2FAEnabled = !this.is2FAEnabled
    },

    changeUserName(userName: string) {
      this.userName = userName
    },
  },
})
