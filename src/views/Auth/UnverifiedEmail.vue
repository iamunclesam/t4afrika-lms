<template>
    <main>
        <div class="flex justify-center items-center text-center">
            <div class="md:m-40 m-10 md:mt-10 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 21 21" class="mx-auto">
                    <g fill="none" fill-rule="evenodd" transform="translate(2 2)">
                        <path stroke="red" stroke-linecap="round" stroke-linejoin="round"
                            d="M8.5 16.5a8 8 0 1 0 0-16a8 8 0 0 0 0 16z" />
                        <circle cx="6" cy="6" r="1" fill="red" />
                        <circle cx="11" cy="6" r="1" fill="red" />
                        <path stroke="red" stroke-linecap="round" stroke-linejoin="round"
                            d="M5.5 11.5c.603-1.333 1.603-2 3-2s2.397.667 3 2" />
                    </g>
                </svg>
                <h1 class="md:text-6xl text-3xl">Oops, seems you've not confirmed your email yet</h1>
                <p class="text-gray-500 mt-10">Pls check your email, we sent you a confirmation link.</p>


                <div class="md:mt-20 mt-10 text-center border-none border-t-green-500">

                    <p class="text-gray-500"> if you didn't receive any email from us kindly
                        <button @click="resendConfirmationEmail" :disabled="resendDisabled"
                            class="mt-4 py-2 text-green-500 rounded ">
                            {{ resendDisabled ? `Resend in ${resendTimer}s` : 'Resend Confirmation Email' }}
                        </button>
                    </p>

                </div>

                <RouterLink class="bg-green-500 text-white text-lg text-center mt-20 py-3 px-4 rounded" to="/login"><button
                        class="mt-10">Proceed to Sign In</button></RouterLink>
            </div>
        </div>
    </main>
</template>
  
<script>
import { auth } from '@/firebase';
import { sendEmailVerification } from "firebase/auth";


export default {
    data() {
        return {
            resendDisabled: false,
            resendTimer: 60, // Initial countdown value in seconds
        };
    },
    methods: {
        async resendConfirmationEmail() {
            try {
                const user = auth.currentUser;
                await sendEmailVerification(user);
                this.resendDisabled = true; // Disable the button
                this.startCountdown(); // Start the countdown timer
                         } catch (error) {
                console.error('Error resending confirmation email:', error);
                  }
        },

        startCountdown() {
            let countdown = this.resendTimer;
            const countdownInterval = setInterval(() => {
                if (countdown === 0) {
                    clearInterval(countdownInterval);
                    this.resendDisabled = false; // Re-enable the button
                } else {
                    countdown--;
                    this.resendTimer = countdown;
                }
            }, 1000); // Update countdown every second (1000 milliseconds)
        },
    },
};
</script>
  
<style ></style>
