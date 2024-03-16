<template>
  <main>
    <div class="login">
      <div class="grid grid-cols-1 md:grid-cols-3">
        <div class="col bg-blue-600 h-screen side hidden md:block">
          <div class="h-screen flex items-center justify-center">
            <div>

            </div>
          </div>
        </div>

        <div class="col-span-2 bg-white p-4">

        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      email: '',
      password: '',
      loading: false
    }
  },

  computed: {
    generatedId() {
      // Define characters for the ID
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
      const idLength = 15 // Adjust the length of the ID as needed

      // Generate the ID
      let id = ''
      for (let i = 0; i < idLength; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length)
        id += characters.charAt(randomIndex)
      }

      return id
    }
  },

  methods: {
    register() {
      // Dispatch the register action with username, email, and password
      this.$store.dispatch('register', {
        id: this.generatedId,
        fullName: this.fullName,
        email: this.email,
        password: this.password
      })

      if (this.fullName == '' && this.email == '') {
        alert('pls fill all field')
      } else {
        this.loading = true
      }

      ; (this.fullName = ''), (this.email = ''), (this.password = '')
    }
  }
}
</script>

<style scoped></style>
