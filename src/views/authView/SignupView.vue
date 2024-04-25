<template>
    <div>
        <section class="bg-white dark:bg-gray-900">
            <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
                <form class="w-full max-w-md border px-6 rounded-lg"  @submit.prevent="performRegistration">
                    <div class="flex justify-center mx-auto mt-2">
                        <img class="w-auto h-7 sm:h-8" src="https://merakiui.com/images/logo.svg" alt="">
                    </div>

                    <div class="flex items-center justify-center mt-6">
                        <RouterLink to="/auth-login"
                            class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b dark:border-gray-400 dark:text-gray-300">
                            sign in
                        </RouterLink>

                        <a href="#"
                            class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                            sign up
                        </a>
                    </div>

                    <div class="relative flex items-center mt-8">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>

                        <input type="text"
                            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            v-model="fullname" placeholder="Full Name">
                    </div>

                    <div class="relative flex items-center mt-6">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </span>

                        <input type="email"
                            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            v-model="email" placeholder="Email">
                    </div>

                    <div class="relative flex items-center mt-4">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </span>

                        <input type="password"
                            class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            v-model="password" placeholder="Password">
                    </div>

                    <div class="relative flex items-center mt-10">
                        <span class="absolute">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"class="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500">
                                <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clip-rule="evenodd" />
                            </svg>
                        </span>

                        <input type="text"
                            class="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            v-model="username" placeholder="Username">
                    </div>

                    <div class="mt-6">
                        <button
                            type="submit"
                            class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                            Sign Up
                        </button>

                        <div class="mt-6 text-center ">
                            <a href="#" class="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                Already have an account?
                            </a>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
</template>

// Pada komponen Register.vue
<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      fullname: '',
      error: '' // Tambahkan variabel untuk menangani pesan kesalahan
    };
  },
  methods: {
  ...mapActions('auth', ['register']),
  async performRegistration() {
    // Form validation
    if (!this.email || !this.password || !this.fullname || !this.username) {
      this.error = 'Please fill in all fields.';
      return;
    }

    // Validation for username length
    if (this.username.length > 10) {
      this.error = 'Username must not exceed 10 characters.';
      return;
    }

    const userData = {
      email: this.email,
      password: this.password,
      fullname: this.fullname,
      username: this.username,
    };

    try {
      const { success, role, error } = await this.register(userData);

      if (success) {
        if (role === 'admin') {
          this.$router.push('/admin-dashboard'); // Navigasi ke halaman dashboard admin
        } else {
          this.$router.push('/user-dashboard'); // Navigasi ke halaman dashboard pengguna
        }
      } else {
        // Menampilkan pesan kesalahan jika pendaftaran gagal
        this.error = error || 'Registration failed. Please try again.';
      }
    } catch (error) {
      console.error(error);
      this.error = 'An error occurred during registration. Please try again later.';
    }
  },
},
};
</script>




<style lang="scss" scoped></style>