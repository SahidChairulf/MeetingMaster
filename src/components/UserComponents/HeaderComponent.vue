<template>
    <div>
        <!-- component -->
        <header>
            <div class="bg-black bg-opacity-90">
                <div class="w-full lg:h-screen h-[42rem] bg-cover bg-center relative"
                    style="background-image: url(https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D); opacity: 0.2;">
                </div>
            </div>
            <div class="absolute inset-0 mt-44 lg:py-28 lg:justify-between lg:grid lg:grid-cols-2 lg:gap-2">
                <!-- TEXT & BUTTON -->
                <div class="lg:ml-24 lg:mb-52 lg: ml-4 mr-4">
                    <h1 class="font-extrabold justify-center text-3xl w-auto lg:w-auto lg:text-4xl text-white uppercase">
                        <span class="text-purple-600 ">
                            Meeting Master
                        </span>
                        <span class="text-2xl">
                            Elevate Your Meetings with Seamless Collaboration, Intuitive Tools, Effective Planning, and Real-Time Insights.
                            <span class="text-purple-600 text-2xl">
                                since 2024
                            </span>
                        </span>
                    </h1>
                    <div class="grid-cols-2 gap-2 justify-start lg:mt-8 mt-5">
                        <button
                            class="text-white lg:w-40 mr-3 bg-purple-700 hover:bg-purple-900 hover:text-white active:bg-purple-900 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                            type="button">
                            LEARN MORE
                        </button>
                        <button
                            class="text-white lg:w-40 lg:mt-0 mt-2 text-sm bg-purple-700 hover:bg-purple-900 hover:text-white active:bg-purple-900 font-bold uppercase lg:text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button">
                            Register
                        </button>
                    </div>
                </div>
                <!-- End -->
                <!-- SOSIAL MEDIA -->
                <div class="lg:flex items-start justify-end mr-8 mt-6 lg:mt-0 hidden">
                    <div class="grid grid-cols-1 gap-1">
                        <!-- Facebook -->
                        <div class="items-center">
                            <button
                                class="bg-blue-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-8 h-8 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </button>
                        </div>
                        <!-- End -->
                        <!-- Twiter -->
                        <div class="items-center mt-2">
                            <button
                                class="bg-blue-400 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-8 h-8 fill-current" role="img" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                                </svg>
                            </button>
                        </div>
                        <!-- End -->
                        <!-- Youtube -->
                        <div class="items-center mt-2">
                            <button
                                class="bg-red-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                                </svg>
                            </button>
                        </div>
                        <!-- End -->
                        <!-- Linkedin -->
                        <div class="items-center mt-2">
                            <button
                                class="bg-blue-600 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-8 h-8 fill-current" role="img" viewBox="0 0 256 256"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path
                                            d="M218.123122,218.127392 L180.191928,218.127392 L180.191928,158.724263 C180.191928,144.559023 179.939053,126.323993 160.463756,126.323993 C140.707926,126.323993 137.685284,141.757585 137.685284,157.692986 L137.685284,218.123441 L99.7540894,218.123441 L99.7540894,95.9665207 L136.168036,95.9665207 L136.168036,112.660562 L136.677736,112.660562 C144.102746,99.9650027 157.908637,92.3824528 172.605689,92.9280076 C211.050535,92.9280076 218.138927,118.216023 218.138927,151.114151 L218.123122,218.127392 Z M56.9550587,79.2685282 C44.7981969,79.2707099 34.9413443,69.4171797 34.9391618,57.260052 C34.93698,45.1029244 44.7902948,35.2458562 56.9471566,35.2436736 C69.1040185,35.2414916 78.9608713,45.0950217 78.963054,57.2521493 C78.9641017,63.090208 76.6459976,68.6895714 72.5186979,72.8184433 C68.3913982,76.9473153 62.7929898,79.26748 56.9550587,79.2685282 M75.9206558,218.127392 L37.94995,218.127392 L37.94995,95.9665207 L75.9206558,95.9665207 L75.9206558,218.127392 Z M237.033403,0.0182577091 L18.8895249,0.0182577091 C8.57959469,-0.0980923971 0.124827038,8.16056231 -0.001,18.4706066 L-0.001,237.524091 C0.120519052,247.839103 8.57460631,256.105934 18.8895249,255.9977 L237.033403,255.9977 C247.368728,256.125818 255.855922,247.859464 255.999,237.524091 L255.999,18.4548016 C255.851624,8.12438979 247.363742,-0.133792868 237.033403,0.000790807055">
                                        </path>
                                    </g>
                                </svg>
                            </button>
                        </div>
                        <!-- End -->
                        <!-- Wa -->
                        <div class="items-center mt-2">
                            <button
                                class="bg-pink-500 p-2 font-semibold text-white inline-flex items-center space-x-2 rounded">
                                <svg class="w-8 h-8 fill-current" fill="currentColor" viewBox="0 0 24 24"
                                    aria-hidden="true">
                                    <path fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </button>
                        </div>
                        <!-- End -->
                    </div>
                </div>
                <!-- End -->
            </div>
        </header>
        <!-- Banner CTA -->
        <div class="bg-purple-700 uppercase text-white py-3 px-6 justify-between items-center mx-auto lg:px-28 hidden lg:flex">
            <p class="text-md font-semibold"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi</p>
            <button
                class="mt-2  lg:w-38 bg-white text-purple-700 hover:bg-purple-400 hover:text-white font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mb-1 ease-linear transition-all duration-150"
                type="button">GET IT NOW</button>
        </div>
        <!-- End Banner CTA -->
    </div>
</template>

<script>
export default {

}
</script>

<style></style>
