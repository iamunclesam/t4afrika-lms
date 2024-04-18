<template>
    <main>
        <div
            class="fixed md:hidden bottom-5 left-0 right-0 z-50 mx-3 rounded-full  py-3 bg-gray-700 border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
                <button type="button"
                    class="inline-flex flex-col items-center justify-center px-5 hover:bg-purple-50 hover:rounded-l-full dark:hover:bg-gray-800 group">
                    <svg class="w-5 h-5 mb-2 text-gray-200 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-blue-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <span
                        class="text-sm text-white dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-blue-500">Home</span>
                </button>
                <button type="button"
                    class="inline-flex flex-col items-center justify-center px-5 hover:bg-purple-50 dark:hover:bg-gray-800 group">

                    <svg class="w-6 h-6 mb-2 text-gray-200 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-blue-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path fill="currentColor"
                            d="M256 368a16 16 0 0 1-7.94-2.11L108 285.84a8 8 0 0 0-12 6.94V368a16 16 0 0 0 8.23 14l144 80a16 16 0 0 0 15.54 0l144-80a16 16 0 0 0 8.23-14v-75.22a8 8 0 0 0-12-6.94l-140.06 80.05A16 16 0 0 1 256 368" />
                        <path fill="currentColor"
                            d="M495.92 190.5v-.11a16 16 0 0 0-8-12.28l-224-128a16 16 0 0 0-15.88 0l-224 128a16 16 0 0 0 0 27.78l224 128a16 16 0 0 0 15.88 0L461 221.28a2 2 0 0 1 3 1.74v144.53c0 8.61 6.62 16 15.23 16.43A16 16 0 0 0 496 368V192a14.76 14.76 0 0 0-.08-1.5" />
                    </svg>


                    <span
                        class="text-sm text-white dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-blue-500">Academy</span>
                </button>
                <button type="button"
                    class="inline-flex flex-col items-center justify-center px-5 hover:bg-purple-50 dark:hover:bg-gray-800 group">

                    <svg class="w-5 h-5 mb-2 text-gray-200 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-blue-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M23.596 13.43H11.562a2.46 2.46 0 0 0-2.639 2.231l-.001.009a2.472 2.472 0 0 0 2.683 2.239l-.009.001h12a.57.57 0 0 0 .621-.527v-3.424a.61.61 0 0 0-.604-.529h-.018zm-12.034 3.638a1.43 1.43 0 1 1 1.43-1.43v.004c0 .788-.639 1.426-1.426 1.426zM3.295 0v6.404h1.368V3.668c.138.034.298.056.462.062h.004a1.871 1.871 0 0 0 1.866-1.865a2.098 2.098 0 0 0-.066-.481l.003.015h7.492a2.324 2.324 0 0 0-.062.462v.004a1.871 1.871 0 0 0 1.865 1.866c.168-.006.329-.028.483-.066l-.016.003v2.736h1.401V0zm15.389 5.626h1.741a2.266 2.266 0 0 0-1.727-1.49l-.014-.002z" />
                        <path fill="currentColor"
                            d="M11.471 12.684h11.938V9.047a2.066 2.066 0 0 0-2.217-1.865h.007h-18.96a.097.097 0 0 0-.062-.031a.814.814 0 0 1-.466-.682v-.002a.886.886 0 0 1 .647-.776l.006-.001V4.105C1.057 4.167 0 6.032 0 8.364v13.772A2.067 2.067 0 0 0 2.215 24h-.007h18.96a2.065 2.065 0 0 0 2.207-1.857l.001-.008v-3.637H11.504c-1.927 0-3.482-1.306-3.482-2.891c0-1.616 1.554-2.922 3.45-2.922z" />
                    </svg>


                    <span
                        class="text-sm text-white dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-blue-500 ">Wallet</span>
                </button>
                <button type="button"
                    class="inline-flex flex-col items-center justify-center px-5 hover:bg-purple-50 hover:rounded-r-full  dark:hover:bg-gray-800 group">
                    <svg class="w-5 h-5 mb-2 text-gray-200 dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-blue-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                    <span
                        class="text-sm text-white dark:text-gray-400 group-hover:text-purple-600 dark:group-hover:text-blue-500">Profile</span>
                </button>
            </div>
        </div>

    </main>
</template>

<script>
export default {

}
</script>

<style></style>