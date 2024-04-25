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
            <div class="grid grid-cols-2 gap-2 mt-4">
                <!-- Users card -->
                <div class="flex items-center shadow justify-between px-8 h-32 bg-orange-500 rounded-lg dark:bg-darker">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            Registered Meeting
                        </h6>
                        <span class="text-3xl font-semibold text-slate-100">{{ dataMeeting.length }}</span>
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
                            class="text-lg font-medium leading-none tracking-wider text-slate-600 uppercase dark:text-primary-light">
                            Meeting Schedule
                        </h6>
                        <span class="text-3xl font-semibold text-slate-700">{{ scheduledMeetings }}</span>
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
                            Meeting Completed
                        </h6>
                        <span class="text-3xl font-semibold text-slate-100">{{ MeetingsCompleted }}</span>
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
                <!-- end -->
                <!-- Users card -->
                <div class="flex items-center shadow justify-between px-8 h-32 bg-blue-500 rounded-lg dark:bg-darker">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            Meeting Category
                        </h6>
                        <span class="text-3xl font-semibold text-white">{{ meetingHigh }} <span class="text-sm">HIGH</span></span>
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
                <!-- end -->
                <!-- Users card -->
                <div class="flex items-center shadow justify-between px-8 h-32 bg-orange-500 rounded-lg dark:bg-darker">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            Meeting Status
                        </h6>
                        <span class="text-3xl font-semibold text-white">{{ meetingOnline }} <span class="text-sm">ONLINE</span></span>
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
                <!-- end -->
                <!-- Card -->
                <div class="flex items-center shadow justify-between px-8 h-32 bg-yellow-400 rounded-lg dark:bg-darker">
                    <div>
                        <h6
                            class="text-lg font-medium leading-none tracking-wider text-slate-300 uppercase dark:text-primary-light">
                            Meeting Status
                        </h6>
                        <span class="text-3xl font-semibold text-white">{{ meetingOffline }} <span class="text-sm">OFFLINE</span></span>
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
                <!-- end -->
            </div>
        </div>
    </div>
    <div class="grid lg:grid lg:grid-cols-2 grid-cols-1 gap-1 w-auto px-5">
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
                                                <th class="pb-3 text-start lg:min-w-[175px] min-w-[100px]">TASK</th>
                                                <th class="pb-3 text-end lg:min-w-[100px]">OWNER</th>
                                                <th class="pb-3 text-end lg:min-w-[100px]">KATEGORI</th>
                                                <th class="pb-3 pr-12 text-end lg:min-w-[175px]">STATUS</th>
                                                <th class="pb-3 pr-12 text-end lg:min-w-[100px]">DEADLINE</th>
                                                <th class="pb-3 text-end lg:min-w-[50px]">DETAILS</th>
                                            </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-dashed last:border-b-0"
                                                v-for="(meeting, index) in getMeetings.slice().reverse().slice(0, 5)"
                                                :key="index">
                                                <td class="p-3 pl-0">
                                                    <div class="flex items-center">
                                                        <div class="relative inline-block shrink-0 rounded-2xl me-3">
                                                            <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=4&w=880&h=880&q=100"
                                                                class="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl"
                                                                alt="">
                                                        </div>
                                                        <div class="flex flex-col w-32 justify-start truncate">
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
                                                <td class="p-3 pr-0 text-end">
                                                    <span
                                                        class="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-purple-800 bg-purple-300 rounded-lg">
                                                        {{ meeting.Meeting.meeting_kategori }}
                                                    </span>
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
                                                <td class="p-3 pr-0 text-end flex space-x-2 flex-nowrap mt-4">
                                                    <button @click="showSelectedMeeting(meeting.id)"
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
                                                <button @click="deleteSelectedMeeting(meeting.id)"
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
        <!-- MEETING LIST -->
        <div class="relative flex flex-col break-words border bg-white rounded-lg bg-gray-150 m-5 ml-10">
            <div
                class="relative flex flex-col min-w-0 break-words bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                <!-- card header -->
                <div class="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                    <h3 class="flex flex-col items-start justify-center m-2 ml-0 font-medium text-xl/tight text-dark">
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
                <section class="lg:p-6 p-3 rounded-md dark:bg-purple-800">
                                <form>
                                    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                        <div>
                                            <label
                                                class="text-slate-700 dark:text-purple-200 font-bold uppercase">Meeting
                                                Title</label>
                                            <input id="username" type="text" v-model="meeting_title"
                                                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        </div>

                                        <div>
                                            <label
                                                class="text-slate-700 dark:text-purple-200 font-bold uppercase">Meeting
                                                Deskripsi</label>
                                            <input type="text" v-model="meeting_deskripsi"
                                                class="block w-full px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring">
                                        </div>
                                    </div>
                                    <div class="grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2 lg:mt-4 mt-2">
                                        <!-- Calender -->
                                        <div class="grid grid-cols-1">
                                            <label
                                                class="text-slate-700 dark:text-purple-200 font-bold uppercase">Meeting
                                                Schedule</label>
                                            <VDatePicker class="lg:mb-16" title-position="left" view="weekly"
                                                v-model="date" mode="dateTime" is24hr />
                                        </div>
                                        <!-- End -->
                                        <div class="grid grid-cols-1 gap-6">
                                            <div class="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                                <div>
                                                    <label
                                                        class="text-slate-700 dark:text-purple-200 font-bold uppercase">Meeting
                                                        kategori</label>
                                                    <select id="meetingCategory" v-model="meeting_kategori"
                                                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring uppercase">
                                                        <option value="High">High</option>
                                                        <option value="Middle">Middle</option>
                                                    </select>

                                                </div>
                                                <div>
                                                    <label
                                                        class="text-slate-700 dark:text-purple-200 font-bold uppercase">Meeting
                                                        status</label>
                                                    <select v-model="meeting_status"
                                                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring uppercase">
                                                        <option value="Online">Online</option>
                                                        <option value="Offline">Offline</option>
                                                    </select>

                                                </div>
                                            </div>

                                            <div class="mx-auto grid grid-cols-1 ">
                                                <div>
                                                    <label
                                                        class="text-slate-700 dark:text-purple-200 font-bold uppercase">Meeting
                                                        Address</label>
                                                    <input type="text" v-model="meeting_address"
                                                        class="block w-full px-4 py-2 mt-2 text-black bg-white border border-purple-200 rounded-md dark:bg-purple-800 dark:text-purple-300 dark:border-purple-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                                        placeholder="Meeting link, Physical address">
                                                </div>
                                                <label
                                                    class="text-slate-700 dark:text-purple-200 font-bold mt-2 uppercase">Meeting
                                                    Evaluasi</label>
                                                <textarea class="mt-1" v-model="meeting_evaluation"
                                                    cols="50" rows="5"></textarea>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="flex mx-auto space-x-2 justify-end mt-6">
                                        <button @click="saveEditedMeeting"
                                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-orange-600 rounded-md hover:bg-orange-500 focus:outline-none focus:bg-orange-500">Save</button>
                                        <button @click="resetForm"
                                            class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-blue-800 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Reset</button>
                                    </div>
                                </form>
                            </section>
            </div>
        </div>
    </div>
    <!-- End -->
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            meeting_title: '',
            meeting_deskripsi: '',
            meeting_kategori: '',
            meeting_status: '',
            date: new Date(),
            meeting_address: '',
            meeting_evaluation: '',
            MeetingId: null, // Menyimpan id pertemuan yang sedang diedit
        };
    },
    computed: {
        ...mapGetters('meeting', ['getMeetings']),
        ...mapGetters('user', ['getUserProfile']),
        user() {
            return this.getUserProfile;
        },
        dataMeeting() {
            return this.getMeetings;
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
        meetingOnline() {
            // Filter meeting berdasarkan status 'terjadwal'
            let meetingOnline = this.getMeetings.filter(getMeetings => getMeetings.Meeting.meeting_status === 'Online');

            // Mengembalikan panjang array yang disaring
            return meetingOnline.length;
        },
        meetingOffline() {
            // Filter meeting berdasarkan status 'terjadwal'
            let meetingOffline = this.getMeetings.filter(getMeetings => getMeetings.Meeting.meeting_status === 'Offline');

            // Mengembalikan panjang array yang disaring
            return meetingOffline.length;
        },
    },
    methods: {
        ...mapActions('meeting', ['fetchMeetings', 'addMeeting', 'updateMeeting', 'deleteMeeting']),
        ...mapActions('user', ['fetchUserProfile']),
        async showSelectedMeeting(meetingId) {
            try {
                // Isi nilai formulir dengan data pertemuan yang diperoleh
                const selectedMeeting = this.getMeetings.find(meeting => meeting.id === meetingId);
                if (!selectedMeeting) {
                    alert('Meeting not found');
                    return;
                }
                this.meeting_title = selectedMeeting.Meeting.meeting_title;
                this.meeting_deskripsi = selectedMeeting.Meeting.meeting_deskripsi;
                this.meeting_kategori = selectedMeeting.Meeting.meeting_kategori;
                this.meeting_status = selectedMeeting.Meeting.meeting_status;
                this.date = new Date(selectedMeeting.Meeting.meeting_schedule);
                this.meeting_address = selectedMeeting.Meeting.meeting_address;
                this.meeting_evaluation = selectedMeeting.Meeting.meeting_evaluation;
                // Simpan ID pertemuan yang sedang ditampilkan
                this.MeetingId = meetingId;
            } catch (error) {
                console.error('Failed to show meeting:', error);
                alert('Failed to show meeting. Please try again.');
            }
        },
        async saveEditedMeeting() {
            try {
                if (!this.MeetingId) {
                    // Jika tidak ada pertemuan yang sedang diedit, tidak ada yang disimpan
                    alert('No meeting is being edited');
                    return;
                }

                // Mengambil bagian waktu dari date
                const meetingTime = this.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                // Menambahkan tanggal dan waktu ke dalam meetingData
                const meetingData = {
                    meeting_title: this.meeting_title,
                    meeting_deskripsi: this.meeting_deskripsi,
                    meeting_kategori: this.meeting_kategori,
                    meeting_schedule: this.date.toISOString().slice(0, 10) + ' ' + meetingTime, // Menggunakan format ISO 8601
                    meeting_status: this.meeting_status,
                    meeting_address: this.meeting_address,
                    meeting_evaluation: this.meeting_evaluation
                };

                // Kirim permintaan untuk memperbarui pertemuan ke backend dan tunggu hingga selesai
                await this.updateMeeting({ id: this.MeetingId, meetingData });

                // Reset ID pertemuan yang sedang diedit
                this.MeetingId = null;

                alert('Meeting updated successfully');

                // Setel kembali nilai input fields ke default
                this.resetForm();
            } catch (error) {
                console.error('Failed to update meeting:', error);
                alert('Failed to update meeting. Please try again.');
            }
        },

        resetForm() {
            // Setel kembali nilai input fields ke default
            this.meeting_title = '';
            this.meeting_deskripsi = '';
            this.meeting_kategori = '';
            this.meeting_status = '';
            this.date = new Date();
            this.meeting_address = '';
            this.meeting_evaluation = '';
        },
        async deleteSelectedMeeting(meetingId) {
            try {
                if (!meetingId) {
                    alert('No meeting selected for deletion');
                    return;
                }

                // Kirim permintaan untuk menghapus pertemuan ke backend
                await this.deleteMeeting(meetingId);

                // Tampilkan pesan berhasil setelah menghapus
                alert('Meeting deleted successfully');

                // Perbarui daftar pertemuan setelah menghapus
                this.fetchMeetings();
            } catch (error) {
                console.error('Failed to delete meeting:', error);
                alert('Failed to delete meeting. Please try again.');
            }
        },
    },
    created() {
        this.fetchMeetings();
        this.fetchUserProfile();
    },
};
</script>

<style scoped></style>
