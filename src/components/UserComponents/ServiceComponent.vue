<template>
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-5 lg:px-16 lg:mb-10 lg:mx-auto">
            <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3 lg:px-12">
                <li
                    class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                    <RouterLink to="/user-dashboard" class="relative">
                        <div class="relative w-full aspect-video">
                            <img class="rounded w-full h-full object-cover"
                                src="@/assets/img/Main/calender.jpg"
                                alt="Writey A.I" loading="lazy">

                            <div class="absolute bottom-0 left-0 right-0 p-3 bg-purple-600 text-white">
                                <h2 class="text-xl font-semibold">Meeting Scheduling</h2>
                                <p class="font-medium text-sm">Features for scheduling meetings</p>
                            </div>
                        </div>
                    </RouterLink>

                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">
                        

                        <p class="text-gray-600 two-lines">
                            Easily organize your schedule with integrated calendars, automatic scheduling, and customizable timings. Powerful collaboration tools enable seamless coordination in scheduling meetings, allowing you to manage meetings efficiently.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Freemium</span>
                            </li>

                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Content Generation,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Marketing,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>SEO,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Writing</span>
                            </li>
                        </ul>
                    </div>

                </li>
                <li
                    class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                    <RouterLink to="/user-dashboard" class="relative">
                        <div class="relative w-full aspect-video">
                            <img class="rounded w-full h-full object-cover"
                                src="@/assets/img/Main/notifikasi.jpg"
                                alt="Writey A.I" loading="lazy">

                            <div class="absolute bottom-0 left-0 right-0 p-4 bg-purple-600 text-white">
                                <h2 class="text-xl font-semibold">Meeting Notification</h2>
                                <p class="font-medium text-sm">Features for Notification Meetings</p>
                            </div>
                        </div>
                    </RouterLink>

                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">

                        <p class="text-gray-600 two-lines">
                            Send automatic notifications to participants before the meeting starts. Customize reminder times to ensure everyone is prepared and attends on time, with key details like meeting link and topic included.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Freemium</span>
                            </li>

                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Content Generation,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Marketing,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>SEO,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Writing</span>
                            </li>
                        </ul>
                    </div>

                </li>
                <li
                    class="relative bg-white flex flex-col justify-between border rounded shadow-md hover:shadow-primary-400">

                    <RouterLink to="/user-dashboard" class="relative">
                        <div class="relative w-full aspect-video">
                            <img class="rounded w-full h-full object-cover"
                                src="@/assets/img/Main/Evaluasi.jpg"
                                alt="Writey A.I" loading="lazy">

                            <div class="absolute bottom-0 left-0 right-0 p-4 bg-purple-600 text-white">
                                <h2 class="text-xl font-semibold">Meeting Evaluasi</h2>
                                <p class="font-medium text-sm">Features for evaluating meeting results</p>
                            </div>
                        </div>
                    </RouterLink>

                    <div class="flex flex-col justify-beetween gap-3 px-4 py-2">

                        <p class="text-gray-600 two-lines">
                            Summarize decisions, tasks, and follow-ups after the meeting. Collect participant feedback to assess meeting effectiveness and document results for future reference, helping you improve and refine subsequent meetings.
                        </p>

                        <ul class="flex flex-wrap items-center justify-start text-sm gap-2">
                            <li title="Pricing type"
                                class="flex items-center cursor-pointer gap-0.5 bg-gray-100 text-black px-2 py-0.5 rounded-full">
                                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M13 3.5C13 2.94772 12.5523 2.5 12 2.5C11.4477 2.5 11 2.94772 11 3.5V4.0592C9.82995 4.19942 8.75336 4.58509 7.89614 5.1772C6.79552 5.93745 6 7.09027 6 8.5C6 9.77399 6.49167 10.9571 7.5778 11.7926C8.43438 12.4515 9.58764 12.8385 11 12.959V17.9219C10.2161 17.7963 9.54046 17.5279 9.03281 17.1772C8.32378 16.6874 8 16.0903 8 15.5C8 14.9477 7.55228 14.5 7 14.5C6.44772 14.5 6 14.9477 6 15.5C6 16.9097 6.79552 18.0626 7.89614 18.8228C8.75336 19.4149 9.82995 19.8006 11 19.9408V20.5C11 21.0523 11.4477 21.5 12 21.5C12.5523 21.5 13 21.0523 13 20.5V19.9435C14.1622 19.8101 15.2376 19.4425 16.0974 18.8585C17.2122 18.1013 18 16.9436 18 15.5C18 14.1934 17.5144 13.0022 16.4158 12.1712C15.557 11.5216 14.4039 11.1534 13 11.039V6.07813C13.7839 6.20366 14.4596 6.47214 14.9672 6.82279C15.6762 7.31255 16 7.90973 16 8.5C16 9.05228 16.4477 9.5 17 9.5C17.5523 9.5 18 9.05228 18 8.5C18 7.09027 17.2045 5.93745 16.1039 5.17721C15.2467 4.58508 14.1701 4.19941 13 4.0592V3.5ZM11 6.07814C10.2161 6.20367 9.54046 6.47215 9.03281 6.8228C8.32378 7.31255 8 7.90973 8 8.5C8 9.22601 8.25834 9.79286 8.79722 10.2074C9.24297 10.5503 9.94692 10.8384 11 10.9502V6.07814ZM13 13.047V17.9263C13.7911 17.8064 14.4682 17.5474 14.9737 17.204C15.6685 16.7321 16 16.1398 16 15.5C16 14.7232 15.7356 14.1644 15.2093 13.7663C14.7658 13.4309 14.0616 13.1537 13 13.047Z"
                                        fill="currentColor"></path>
                                </svg>
                                <span>Freemium</span>
                            </li>

                        </ul>

                        <ul class="flex flex-wrap text-sm gap-2 my-1">
                            <li class="flex items-center gap-2">
                                <span>Content Generation,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Marketing,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>SEO,</span>
                            </li>
                            <li class="flex items-center gap-2">
                                <span>Writing</span>
                            </li>
                        </ul>
                    </div>

                </li>
            </div>
        </div>
    </section>
    <!-- NEXT
    <div class="relative font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-40 before:z-10">
      <img src="https://readymadeui.com/photo.webp" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover object-bottom" />
      <div class="min-h-[400px] relative z-50 h-full max-w-4xl mx-auto flex flex-col justify-center items-center text-center text-white px-6 py-10">
        <div class="max-w-3xl mx-auto text-center">
          <h3 class="md:text-5xl text-4xl font-extrabold">Subscribe to Our Newsletter</h3>
          <p class="text-sm mt-6">Subscribe to our newsletter and stay up to date with the latest news,
            updates, and exclusive offers. Get valuable insights. Join our community today!</p>
          <div class="max-w-lg mx-auto bg-gray-100 flex px-2 py-1 rounded-full text-left mt-12 border focus-within:border-gray-700">
            <input type='email' placeholder='Enter your email' class="w-full outline-none border-none bg-transparent text-sm text-[#333] px-4 py-3" />
            <button type='button'
              class=" bg-purple-600 hover:bg-purple-800 transition-all text-white font-semibold text-sm rounded-full px-8 py-3">Submit</button>
          </div>
        </div>
      </div>
    </div> -->
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>