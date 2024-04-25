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

            <!-- MEETING LIST -->
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
                            <div class="flex-auto block py-8 pt-6 px-9 overflow-y-scroll h-auto">
                                <div class="overflow-x-auto">
                                    <table class="w-full my-0 align-middle text-dark border-neutral-200 ">
                                        <thead class="align-bottom">
                                            <tr class="font-semibold text-[0.95rem] text-purple-400">
                                                <th class="pb-3 text-start lg:min-w-[175px] min-w-[100px]">TASK</th>
                                                <th class="pb-3 text-end lg:min-w-[100px]">OWNER</th>
                                                <th class="pb-3 pr-12 text-end lg:min-w-[175px]">STATUS</th>
                                                <th class="pb-3 pr-12 text-end lg:min-w-[100px]">DEADLINE</th>
                                                <th class="pb-3 text-end lg:min-w-[50px]">DETAILS</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="border-b border-dashed last:border-b-0"
                                                v-for="(meeting, index) in getMeetings.slice(0, 5) " :key="index">
                                                <td class="p-3 pl-0">
                                                    <div class="flex items-center">
                                                        <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                                                                class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                alt="">
                                                        </div>
                                                        <div class="flex flex-col justify-start">
                                                            <a href="javascript:void(0)"
                                                                class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary truncate">
                                                                {{ meeting.Meeting.meeting_title }}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <span
                                                        class="font-semibold text-light-inverse text-md/normal truncate">{{
                                                            meeting.User.username }}</span>
                                                </td>
                                                <td class="p-3 pr-12 text-end">
                                                    <span
                                                        class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-purple-800 bg-purple-300 rounded-lg">
                                                        {{ meeting.Meeting.meeting_status }}
                                                    </span>
                                                </td>
                                                <td class="pr-0 text-start">
                                                    <span
                                                        class="font-semibold text-light-inverse text-md/normal truncate">{{
                                                            meeting.Meeting.meeting_schedule }}</span>
                                                </td>
                                                <td class="p-3 pr-0 text-end">
                                                    <button
                                                        class="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                        <span
                                                            class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-4 h-4">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                            </svg>
                                                        </span>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End -->
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
                <div class="flex items-center shadow justify-between px-8 h-32 bg-purple-500 rounded-lg dark:bg-darker">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            total meetings
                        </h6>
                        <span class="text-3xl font-semibold text-slate-100">{{ meeting.length }}</span>
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
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            Meeting Schedule
                        </h6>
                        <span class="text-3xl font-semibold text-white">{{ scheduledMeetings }}</span>
                        <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +2.6%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg class="w-20 h-20 text-white dark:text-primary-dark"
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
            <div class="flex flex-wrap -mx-6">
                <div class="w-full max-w-full mx-auto">
                    <div
                        class="relative flex-[1_auto] flex flex-col break-words min-w-0 border bg-white rounded-lg bg-gray-150 m-5">
                        <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg" v-if="user">
                            <div class="relative mx-auto w-36 rounded-full">
                                <img class="mx-auto h-auto w-full rounded-full"
                                    src="@/assets/img/DashboardUser/user.png" alt="" />
                            </div>
                            <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{ user.fullname }}
                            </h1>
                            <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">{{
                                user.user_profiles.bio }}</p>
                            <div class="grid lg:grid-cols-2 lg:gap-2">
                                <div class="flex items-center py-3 text-sm mt-3 bg-gray-100 px-3 rounded-lg">
                                    <span>Status :</span>
                                    <span class="ml-auto"><span
                                            class="rounded-full py-1 px-2 text-sm font-medium text-slate-700">{{
                                                user.role }}</span></span>
                                </div>
                                <div class="flex items-center py-3 text-sm mt-3 bg-gray-100 px-3 rounded-lg">
                                    <span>Email :</span>
                                    <span class="ml-auto"><span
                                            class="rounded-full py-1 px-2 text-sm font-medium text-slate-700">{{
                                                user.email }}</span></span>
                                </div>
                                <div class="flex items-center py-3 text-sm mt-3 bg-gray-100 px-3 rounded-lg">
                                    <span>Address :</span>
                                    <span class="ml-auto"><span
                                            class="rounded-full py-1 px-2 text-sm font-medium text-slate-700">
                                            {{ user.user_profiles.location }}</span></span>
                                </div>
                                <div class="flex items-center py-3 text-sm bg-gray-100 px-3 rounded-lg">
                                    <span>Age :</span>
                                    <span class="ml-auto"><span
                                            class="rounded-full py-1 px-2 text-sm font-medium text-slate-700">
                                            {{ age }}</span></span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Profile User -->
            <div class="flex flex-auto w-full bg-blue-500 rounded-lg h-48 px-4 break-words shadow-xl"
                v-for="(meeting, index) in getMeetings.slice().reverse().slice(0, 1)">
                <div class="flex flex-auto items-center lg:ml-3 lg:px-2">
                    <div class="grid grid-cols-1 gap-1">
                        <h1 class="font-bold lg:text-xl text-md text-slate-300 uppercase mt-2">Upcoming meeting topics , <span
                                class="">{{ meeting.Meeting.meeting_title }}</span></h1>
                        <h1 class="font-medium lg:text-base text-lg mr-2 mt-2 lg:mr-0 text-slate-300 uppercase">Will come at a
                            time <span>{{ meeting.Meeting.meeting_schedule }}</span></h1>
                        <h1 class="font-medium lg:text-base text-lg mr-2 lg:mr-0 text-slate-300 uppercase">This meeting is
                            categorized as <span>{{ meeting.Meeting.meeting_kategori }} & {{
                                meeting.Meeting.meeting_status }}</span></h1>
                        <RouterLink to="/user-dashboard-meeting-details"
                            class="text-blue-500 lg:w-36 mt-3 mr-3 bg-slate-200 hover:bg-slate-200 hover:text-slate-200 active:bg-slate-200 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                            type="button">
                            LEARN MORE
                        </RouterLink>
                    </div>
                </div>
                <div class="flex items-center">
                    <img class="ml-auto mx-auto mr-20 w-full h-48 rounded-lg"
                        src="@/assets/img/DashboardUser/CARD-img-1.png" alt="">
                </div>
            </div>
            <!-- End -->
        </div>
    </div>
    </template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('meeting', ['getMeetings']),
        ...mapGetters('user', ['getUserProfile']),
        meeting() {
            return this.getMeetings;
        },
        user() {
            return this.getUserProfile;
        },
        scheduledMeetings() {
            // Tampilkan isi this.meeting sebelum filter
            console.log("Data sebelum filter:", this.meeting);

            // Filter meeting berdasarkan status 'terjadwal'
            let scheduledMeetings = this.meeting.filter(meeting => meeting.Meeting && meeting.Meeting.meeting_info === 'terjadwal');


            // Tampilkan hasil filter
            console.log("Hasil filter:", scheduledMeetings);

            // Mengembalikan panjang array yang disaring
            return scheduledMeetings.length;
        },
        age() {
            // Pastikan user_profile dan birth_date tersedia
            if (this.user && this.user.user_profiles && this.user.user_profiles.birth_date) {
                // Konversi tanggal lahir menjadi objek Date
                const birthDate = new Date(this.user.user_profiles.birth_date);
                // Tanggal saat ini
                const currentDate = new Date();
                // Hitung selisih tahun antara tanggal lahir dan tanggal saat ini
                let age = currentDate.getFullYear() - birthDate.getFullYear();
                // Jika bulan atau hari saat ini lebih kecil dari tanggal lahir, kurangi umur dengan 1
                if (currentDate.getMonth() < birthDate.getMonth() || (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate())) {
                    age--;
                }
                return age;
            }
            return null; // Jika birth_date tidak tersedia
        }
    },
    methods: {
        ...mapActions('meeting', ['fetchMeetings']),
        ...mapActions('user', ['fetchUserProfile']),
    },
    created() {
        this.fetchMeetings();
        this.fetchUserProfile();
    },
}
</script>

<style scoped></style>
