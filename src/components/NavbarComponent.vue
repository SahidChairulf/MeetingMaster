<template>
    <!-- Navbar Start -->
    <nav class="fixed top-0" style="z-index: 999;">
        <div class="w-screen flex flex-wrap items-center justify-between lg:mx-auto p-4 lg:px-12 uppercase">
            <!-- Dekstop Mode -->
            <RouterLink to="/" class="hidden md:block lg:flex items-center space-x-3 lg:rtl:space-x-reverse lg:ml-14">
                <span class="self-center text-4xl whitespace-nowrap text-white dark:text-white font-bold">MEETING <span
                        class="text-purple-600">master</span></span>
            </RouterLink>
            <!-- End -->
            <!-- Button Homberger menu -->
            <button type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-purple-500 rounded-lg md:hidden hover:bg-transparent"
                @click="toggleNavbar">
                <span class="sr-only">Button Open Menu</span>
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15" />
                </svg>
            </button>
            <!-- End -->
            <!-- Mobile Mode -->
            <RouterLink :to="{ hash: '#home' }" @click="scrollToSection('#home')"
                class="flex md:hidden lg:hidden items-center space-x-3 lg:rtl:space-x-reverse lg:ml-14">
                <span class="self-center text-2xl whitespace-nowrap text-white dark:text-white font-bold">MEETING <span
                        class="text-purple-600">master</span></span>
            </RouterLink>
            <!-- End -->
            <!-- Dekstop Menu -->
            <div class="hidden w-full lg:block md:block md:w-auto lg:mr-14">
                <ul
                    class="text-xl items-center justify-center flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg- md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent dark:border-gray-700">
                    <li>
                        <RouterLink :to="{ hash: '#about' }" @click="scrollToSection('#about')"
                            class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                            aria-current="page">About</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ hash: '#service' }" @click="scrollToSection('#service')"
                            class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Services</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ hash: '#about' }"
                            class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Pricing</RouterLink>
                    </li>
                    <li>
                        <RouterLink :to="{ hash: '#about' }"
                            class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 hover:text-purple-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
                            Contact</RouterLink>
                    </li>
                    <!-- <button
                            class="flex items-center justify-center px-3 text-white bg-purple-500 border border-solid border-purple-500 hover:bg-purple-800 font-bold uppercase text-xs py-1 rounded-lg outline-none focus:outline-none ease-linear transition-all duration-150"
                            type="button">
                            LOGIN
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6 ml-2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button> -->
                </ul>
                
            </div>
            <!-- End -->
            <!-- Mobile Menu -->
            <div class="hidden w-screen fixed top-0 left-0 bottom-0 bg-black bg-opacity-80" id="navbar-default">
                <div class="fixed top-0 right-0 flex flex-col items-center justify-center h-full">
                    <div class="grid grid-rows-5 gap-2 mb-24">
                        <!-- Facebook -->
                        <div class="items-center">
                            <button
                                class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>
                        </div>
                        <!-- Twiter -->
                        <div class="items-center">
                            <button
                                class="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-5 h-5 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </button>
                        </div>
                        <!-- Youtube -->
                        <div class="items-center">
                            <button
                                class="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                    <path
                                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 011.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 01-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 01-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 01 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 011.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 01 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg>
                            </button>
                        </div>
                        <!-- Linkedin -->
                        <div class="items-center">
                            <button
                                class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-5 h-5 fill-current" role="img" viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                                    </path>
                                </svg>
                            </button>
                        </div>
                        <!-- Wa -->
                        <div class="items-center">
                            <button
                                class="bg-purple-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-5 h-5 fill-current" fill="currentColor" viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- End -->
                <!-- Navbar Mobile Link -->
                <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-black overflow-y-auto">
                    <!-- Navbar Close -->
                    <button @click="toggleNavbar" class="">
                        <svg class="h-10 w-10 text-gray-400 cursor-pointer hover:text-gray-500"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12">
                            </path>
                        </svg>
                    </button>
                    <!-- End -->
                    <div class="flex flex-col justify-center h-full">
                        <ul>
                            <li class="mb-1">
                                <RouterLink :to="{ hash: '#about' }" @click="scrollToSection('#about')"
                                    class="block p-4 text-sm font-semibold text-white hover:bg-purple-400 hover:text-purple-600 rounded"
                                    href="#">About Us</RouterLink>
                            </li>
                            <li class="mb-1">
                                <RouterLink to=""
                                    class="block p-4 text-sm font-semibold text-white hover:bg-purple-400 hover:text-purple-600 rounded"
                                    href="#">Services</RouterLink>
                            </li>
                            <li class="mb-1">
                                <RouterLink to=""
                                    class="block p-4 text-sm font-semibold text-white hover:bg-purple-400 hover:text-purple-600 rounded"
                                    href="#">Pricing</RouterLink>
                            </li>
                            <li class="mb-1">
                                <RouterLink to=""
                                    class="block p-4 text-sm font-semibold text-white hover:bg-purple-400 hover:text-purple-600 rounded"
                                    href="#">Contact</RouterLink>
                            </li>
                        </ul>
                    </div>
                    <div class="items-end mt-auto justify-items-end">
                        <div class="pt-6">
                            <a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-xl"
                                href="#">Sign in</a>
                            <a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-purple-600 hover:bg-purple-700 rounded-xl"
                                href="#">Sign Up</a>
                        </div>
                        <p class="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © MeetingMaster</span>
                        </p>
                    </div>
                </nav>
            </div>
            <!-- End -->
        </div>
    </nav>
    <!-- Navbar End -->
</template>

<script>
export default {
    methods: {
        toggleNavbar() {
            const navbar = document.getElementById('navbar-default');
            if (navbar) {
                navbar.classList.toggle('hidden'); // Toggle class 'hidden'
            } else {
                console.error("Element with ID 'navbar-default' not found");
            }
        },
        scrollToSection(id) {
            const element = document.querySelector(id);
            if (element) {
                window.scrollTo({
                    top: element.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    }
}
</script>
<style scoped></style>