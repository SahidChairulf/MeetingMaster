<template>
    <div class="grid lg:grid lg:grid-cols-2 lg:gap-2 grid-cols-1 gap-1 w-auto h-screen">
        <div class="px-5 mt-6">
            <!-- Profile User -->
            <div class="flex flex-auto w-full bg-purple-500 rounded-lg h-48 px-4" v-if="user">
                <div class="flex flex-auto items-center lg:ml-8 lg:px-2">
                    <div class="grid grid-cols-1 gap-1">
                        <h1 class="font-bold lg:text-4xl text-2xl text-slate-300">Welcome , <span class="">{{
                            user.username }}</span></h1>
                        <h1 class="font-semibold lg:text-base text-lg mr-2 lg:mr-0 lg:ml-2 text-slate-200">All projects
                            from
                            the Loopple team</h1>
                    </div>
                </div>
                <div class="flex items-center">
                    <img class="ml-auto mx-auto mr-20 w-full h-48 rounded-lg"
                        src="@/assets/img/DashboardUser/CARD-img-1.png" alt="">
                </div>
            </div>
            <!-- End -->

            <div class="flex flex-wrap -mx-6">
                <div class="w-full max-w-full mx-auto">
                    <div
                        class="relative flex-[1_auto] flex flex-col break-words min-w-0 border bg-white rounded-lg bg-gray-150 m-5">
                        <div
                            class="relative flex flex-col min-w-0 break-words bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <!-- card header -->
                            <div
                                class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3
                                    class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
                                    <span class="mr-3 font-semibold text-dark">Projects Deliveries</span>
                                    <span class="mt-1 font-medium text-purple-400 text-lg/normal">All projects from
                                        the Loopple team</span>
                                </h3>
                                <div class="relative flex flex-wrap items-center my-2">
                                    <a href="javascript:void(0)"
                                        class="inline-block text-[.925rem] font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-150 ease-in-out text-light-inverse bg-purple-400 border-light shadow-none border-0 py-2 px-5 hover:bg-purple-500 active:bg-purple-500 focus:bg-light">
                                        See other projects </a>
                                </div>
                            </div>
                            <!-- end card header -->
                            <!-- card body  -->
                            <section class="lg:p-6 p-3  bg-white rounded-md shadow-md dark:bg-purple-800">
                                <form>
                                    <div>
                                        <label
                                            class="text-slate-700 dark:text-purple-200 font-bold uppercase">fullname</label>
                                        <input type="text" v-model="fullname"
                                            class="block w-full px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            placeholder="Meeting link, Physical address">
                                    </div>
                                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-2">
                                        <div>
                                            <label
                                                class="text-slate-700 dark:text-purple-200 font-bold uppercase">Username</label>
                                            <input type="text" v-model="username"
                                                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        </div>
                                        <div>
                                            <label
                                                class="text-slate-700 dark:text-purple-200 font-bold uppercase">Email</label>
                                            <input type="email" v-model="email"
                                                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        </div>
                                    </div>
                                    <div>
                                        <label
                                            class="text-slate-700 dark:text-purple-200 font-bold uppercase">password</label>
                                        <input type="password" v-model="password"
                                            class="block w-9/12 px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            placeholder="Meeting link, Physical address">
                                    </div>
                                    <div class="flex mx-auto space-x-2 justify-end mt-6">

                                        <button @click="performRegistration" type="button"
                                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-purple-600 rounded-md hover:bg-purple-500 focus:outline-none focus:bg-purple-500">Add</button>
                                        <button @click="resetForm"
                                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Reset</button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="px-4 mt-6">
            <div class="flex flex-auto">
                <!-- Search -->
                <div class="relative w-full max-w-2xl bg-white rounded-full">
                    <input placeholder="e.g. Blog"
                        class="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md hover:outline-none focus:ring-purple-200 focus:border-purple-200"
                        type="text" name="query" id="query">
                    <button type="submit"
                        class="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-purple-600 sm:px-6 sm:text-base sm:font-medium hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        <svg class="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                        Search
                    </button>
                </div>
                <!-- Profile -->
                <div class="relative ml-6">
                    <img class="object-cover w-16 h-16 rounded-full ring ring-gray-300 dark:ring-gray-600"
                        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                        alt="">
                    <span
                        class="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 ring-1 ring-white"></span>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-2 mt-5 mx-auto">
                <!-- Users card -->
                <div class="flex items-center shadow justify-between px-8 h-32 bg-purple-500 rounded-lg dark:bg-darker" v-if="dataUser">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            Users
                        </h6>
                        <span class="text-3xl font-semibold text-slate-100">{{ dataUser.count }}</span>
                        <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +2.6%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg class="w-20 h-20 text-slate-100 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
                <!-- Users card -->
                <div class="flex items-center shadow justify-between px-8 h-32 bg-blue-500 rounded-lg dark:bg-darker">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-600 uppercase dark:text-primary-light" v-if="dataMeeting">
                            Meeting
                        </h6>
                        <span class="text-3xl font-semibold text-slate-700">{{ dataMeeting.length }}</span>
                        <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +2.6%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg class="w-20 h-20 text-slate-700 dark:text-primary-dark"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
    computed: {
        ...mapGetters('user', ['getUserProfile' , 'getAllUser']),
        ...mapGetters('meeting', ['getMeetings']),
        user() {
            return this.getUserProfile;
        },
        dataUser() {
            return this.getAllUser
        },
        dataMeeting() {
            return this.getMeetings
        },
    },
    methods: {
        ...mapActions('user', ['fetchUserProfile', 'createAccount' , 'fetchAllUser']),
        ...mapActions('meeting', ['fetchAllMeetings']),
        async performRegistration() {


            const userData = {
                email: this.email,
                password: this.password,
                fullname: this.fullname,
                username: this.username,
            };

            try {
                const { success, role , error } = await this.createAccount(userData);

                if (success) {
                    alert('Success Create User')
                } else {
                    // Menampilkan pesan kesalahan jika pendaftaran gagal
                    this.error = error || 'Registration failed. Please try again.';
                }
            } catch (error) {
                console.error(error);
                this.error = 'An error occurred during registration. Please try again later.';
            }
        },
        resetForm() {
            // Reset nilai input ke nilai awal
            this.performRegistration();
        }
    },

    created() {
        this.fetchUserProfile();
        this.fetchAllMeetings();
    },
};
</script>

<style scoped></style>
