<template>
    <div class="grid lg:grid lg:grid-cols-2 lg:gap-2 grid-cols-1 gap-1 w-auto">
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
            <div class="grid grid-cols-2 gap-2 mt-5 mx-auto" v-if="dataUser && dataMeeting">
                <!-- Users card -->
                <div class="flex items-center shadow justify-between px-8 h-32 bg-orange-500 rounded-lg dark:bg-darker">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-100 uppercase dark:text-primary-light">
                            Registered Users
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
                            class="text-lg font-medium leading-none tracking-wider text-slate-100 uppercase dark:text-primary-light">
                            registered meeting
                        </h6>
                        <span class="text-3xl font-semibold text-slate-100">{{ dataMeeting.length }}</span>
                        <span class="inline-block px-2 py-px ml-2 text-xs text-green-500 bg-green-100 rounded-md">
                            +2.6%
                        </span>
                    </div>
                    <div>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                class="w-20 h-20 text-slate-100 dark:text-primary-dark">
                                <path
                                    d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                <path fill-rule="evenodd"
                                    d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
                                    clip-rule="evenodd" />
                            </svg>
                        </span>
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
                <div class="flex items-center shadow justify-between px-8 h-32 bg-purple-500 rounded-lg dark:bg-darker" v-if="scheduledMeetings">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            Meeting schedule
                        </h6>
                        <span class="text-3xl font-semibold text-slate-100">{{ scheduledMeetings }}</span>
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
                <div class="flex items-center shadow justify-between px-8 h-32 bg-blue-500 rounded-lg dark:bg-darker" v-if="MeetingsCompleted">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-white uppercase dark:text-primary-light">
                            Meeting Completed
                        </h6>
                        <span class="text-3xl font-semibold text-white">{{ MeetingsCompleted }}</span>
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
                <!-- Users card -->
                <div class="flex items-center shadow justify-between px-8 h-32 bg-orange-500 rounded-lg dark:bg-darker" v-if="meetingHigh">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            Meeting Category
                        </h6>
                        <span class="text-3xl font-semibold text-slate-100">{{ meetingHigh }} <span class="text-xs">HIGH</span></span>
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
                <div class="flex items-center shadow justify-between px-8 h-32 bg-yellow-400 rounded-lg dark:bg-darker" v-if="meetingMiddle">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-white uppercase dark:text-primary-light">
                            Meeting Category
                        </h6>
                        <span class="text-3xl font-semibold text-white">{{ meetingMiddle }} <span class="text-xs">MIDDLE</span></span>
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
        </div>
    </div>
    <div class="grid lg:flex lg:flex-auto grid-cols-1 gap-1 w-auto px-5">
        <div class="w-1/3 max-w-full mx-auto">
                    <div
                        class="relative flex-[1_auto] flex flex-col break-words min-w-0 border bg-white rounded-lg bg-gray-150 m-5">
                        <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
                            <div class="relative mx-auto w-36 rounded-full">
                                <img class="mx-auto h-auto w-full rounded-full"
                                    src="@/assets/img/DashboardUser/user.png"
                                    alt="" />
                            </div>
                            <h1 class="my-1 text-center text-xl font-bold leading-8 text-gray-900">{{ fullname || 'unknow' }}
                            </h1>
                            <p class="text-center text-sm leading-6 text-gray-500 hover:text-gray-600">{{ bio || 'unknow' }}</p>
                            <div class="grid lg:grid-cols-2 lg:gap-2">
                                <div class="flex items-center py-3 text-sm bg-gray-100 px-3 rounded-lg">
                                    <span>Age :</span>
                                    <span class="ml-auto"><span
                                            class="rounded-full py-1 px-2 text-xs font-medium text-slate-900">
                                            {{ username || 'unknow' }}</span></span>
                                </div>
                                <div class="flex items-center py-3 text-sm mt-3 bg-gray-100 px-3 rounded-lg">
                                    <span>Email :</span>
                                    <span class="ml-auto"><span
                                            class="rounded-full py-1 px-2 text-xs font-medium text-slate-900">{{ email || 'unknow' }}</span></span>
                                </div>
                                <div class="flex items-center py-3 text-sm mt-3 bg-gray-100 px-3 rounded-lg">
                                    <span>Age :</span>
                                    <span class="ml-auto"><span
                                            class="rounded-full py-1 px-2 text-xs font-medium text-slate-900">{{ age || 'unknow' }}</span></span>
                                </div>
                                <div class="flex items-center py-3 text-sm mt-3 bg-gray-100 px-3 rounded-lg">
                                    <span>Address :</span>
                                    <span class="ml-auto"><span
                                            class="rounded-full py-1 px-2 text-xs font-medium text-slate-900">
                                        {{ location || 'unknow' }}</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <!-- <div class="relative flex flex-col break-words border bg-white rounded-lg bg-gray-150 m-5 w-1/3">

        </div> -->
        <!-- MEETING LIST -->
        <div class="flex flex-wrap -mx-6 flex-1">
            <div class="w-full max-w-full mx-auto">
                <div
                    class="relative flex-[1_auto] flex flex-col break-words min-w-0 border bg-white rounded-lg bg-gray-150 m-5 w-auto">
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
                        <div class="flex-auto block py-8 pt-6 px-9 overflow-y-scroll h-[40rem]">
                            <div class="overflow-x-auto">
                                <table class="w-full my-0 align-middle text-dark border-neutral-200 ">
                                    <thead class="align-bottom">
                                        <tr class="font-semibold text-[0.95rem] text-purple-400">
                                            <th class="pb-3 text-start lg:min-w-[155px] min-w-[100px]">USERNAME</th>
                                            <th class="pb-3 text-end lg:min-w-[100px]">EMAIL</th>
                                            <th class="pb-3 pr-12 text-end lg:min-w-[175px]">STATUS</th>
                                            <th class="pb-3 pr-12 text-end lg:min-w-[100px]">REGISTERED</th>
                                            <th class="pb-3 text-end lg:min-w-[50px]">DETAILS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-dashed last:border-b-0"
                                            v-for="data in getAllUser.rows" :key="data.id">
                                            <td class="p-3 pl-0">
                                                <div class="flex items-center">
                                                    <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                                                            class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                            alt="">
                                                    </div>
                                                    <div class="flex flex-col justify-start">
                                                        <a href="javascript:void(0)"
                                                            class="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary">
                                                            {{ data.username }}
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="p-3 pr-0 text-end">
                                                <span
                                                    class="font-semibold text-light-inverse text-md/normal truncate">{{
                                                        data.email }}</span>
                                            </td>
                                            <td class="p-3 pr-12 text-end">
                                                <span
                                                    class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-purple-800 bg-purple-300 rounded-lg">
                                                    {{ data.role }}
                                                </span>
                                            </td>
                                            <td class="pr-0 text-start">
                                                <span class="font-semibold text-light-inverse text-md/normal truncate">
                                                    {{ new Date(data.createdAt).toLocaleDateString('id-ID', {
                                                        timeZone: 'UTC'
                                                    }) }}
                                                </span>
                                            </td>
                                            <td class="p-3 pr-0 text-end flex flex-wrap">
                                                <button @click="showUser(data.id)"
                                                    class="ml-auto relative text-secondry-primary bg-light-dark hover:text-purple-800 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                    <span
                                                        class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-6 h-6">
                                                            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                                                            <path fill-rule="evenodd"
                                                                d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
                                                                clip-rule="evenodd" />
                                                        </svg>

                                                    </span>
                                                </button>
                                                <button @click="handleDeleteUser(data.id)"
                                                    class="ml-auto relative text-red-600 bg-light-dark hover:text-red-700 flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                                                    <span
                                                        class="flex items-center justify-center p-0 m-0 leading-none shrink-0 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-6 h-6">
                                                            <path fill-rule="evenodd"
                                                                d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
                                                                clip-rule="evenodd" />
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
    <!-- End -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            username: '',
            fullname: '',
            email: '',
            role: '',
            profile_picture: '',
            bio: '',
            birth_date: '',
            location: '',
            UserId: null
        };
    },
    computed: {
        ...mapGetters('meeting', ['getMeetings']),
        ...mapGetters('user', ['getUserProfile', 'getAllUser' , 'getSelectedUser']),
        user() {
            return this.getUserProfile;
        },
        dataUser() {
            return this.getAllUser
        },
        dataMeeting() {
            return this.getMeetings
        },
        dataUserById () {
            return this.getSelectedUser
        },
        scheduledMeetings() {
            // Filter meeting berdasarkan status 'terjadwal'
            let scheduledMeetings = this.getMeetings.filter(getMeetings => getMeetings.Meeting.meeting_info === 'terjadwal');
            // Mengembalikan panjang array yang disaring
            return scheduledMeetings.length;
        },
        MeetingsCompleted() {
            // Filter meeting berdasarkan status 'terjadwal'
            let MeetingsCompleted = this.getMeetings.filter(getMeetings => getMeetings.Meeting.meeting_info === 'selesai');

            // Mengembalikan panjang array yang disaring
            return MeetingsCompleted.length;
        },
        meetingHigh() {
            // Filter meeting berdasarkan status 'terjadwal'
            let meetingHigh = this.getMeetings.filter(getMeetings => getMeetings.Meeting.meeting_kategori === 'High');

            // Mengembalikan panjang array yang disaring
            return meetingHigh.length;
        },
        meetingMiddle() {
            // Filter meeting berdasarkan status 'terjadwal'
            let meetingHigh = this.getMeetings.filter(getMeetings => getMeetings.Meeting.meeting_kategori === 'Middle');

            // Mengembalikan panjang array yang disaring
            return meetingHigh.length;
        },
        age() {
            // Pastikan user_profile dan birth_date tersedia
            if (this.dataUserById && this.dataUserById.user_profiles[0] && this.dataUserById.user_profiles[0].birth_date) {
                // Konversi tanggal lahir menjadi objek Date
                const birthDate = new Date(this.dataUserById.user_profiles[0].birth_date);
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
        ...mapActions('meeting', ['fetchAllMeetings']),
        ...mapActions('user', ['fetchUserProfile', 'fetchAllUser', 'deleteUserById','fetchUserById']),
       // Metode untuk menampilkan data pengguna berdasarkan ID pengguna
       async showUser(userId) {
        try {
            // Panggil aksi fetchUserById dengan userId yang diberikan
            await this.fetchUserById(userId);

            // Ambil data pengguna yang diambil dari Vuex
            const selectedUser = this.getSelectedUser;

            if (selectedUser) {
                // Isi nilai formulir dengan data pengguna yang diperoleh
                this.username = selectedUser.username;
                this.fullname = selectedUser.fullname;
                this.email = selectedUser.email;
                this.role = selectedUser.role;
                this.profile_picture = selectedUser.user_profiles[0].profile_picture || '';
                this.location = selectedUser.user_profiles[0].location || '';
                this.bio = selectedUser.user_profiles[0].bio || '';
                this.birth_date = selectedUser.user_profiles[0]?.birth_date || '';

                // Simpan ID pengguna yang sedang ditampilkan
                this.UserId = userId;
            } else {
                alert('User not found');
            }
        } catch (error) {
            console.error('Failed to show user:', error);
            alert('Failed to show user. Please try again.');
        }
    },
        // Metode baru untuk menangani tindakan delete
        handleDeleteUser(userId) {
            // Panggil aksi deleteUser dari Vuex dengan ID pengguna yang ingin dihapus
            this.deleteUserById(userId)
                .then(() => {
                    // Setelah penghapusan berhasil, lakukan sesuatu jika diperlukan, misalnya:
                    // - Tampilkan notifikasi bahwa pengguna telah dihapus
                    // - Atau refresh data pengguna
                    this.fetchAllUser();
                    alert('User deleted successfully');
                })
                .catch(error => {
                    // Tangani kesalahan jika penghapusan gagal
                    console.error('Error deleting user:', error);
                    alert('Failed to delete user');
                });
        }
    },
    created() {
        this.fetchAllMeetings();
        this.fetchUserProfile();
        this.fetchAllUser();
    },
}
</script>


<style scoped></style>
