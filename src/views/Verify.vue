<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/login" class="text-white m-3" text=""></ion-back-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="container text-white">
        <h1><b>Code from Email</b></h1>
        <ion-text>Enter the 6-digit we sent to your email</ion-text>
        <div style="width: 100%;">
          <div class="ion-margin-bottom mt-4">
            <vue-otp-input :should-auto-focus="true" :num-inputs="6" separator="" class="text-dark"
              inputClasses="otp-input" @on-change="handleOnChange" />
          </div>
          <ion-button expand="full" class="ion-margin-bottom mb-4" style="--background:rgb(32, 209, 32);" size="large"
            @click="verifyUser" :disabled="otp.length !== 6"><b>PROCEED</b></ion-button>
          <ion-loading :is-open="openLoader" message="Verifying OTP.." duration="3000" spinner="circles"></ion-loading>
        </div>
        <!-- <ion-toast :message="toastMessage" :is-open="showToast" @didDismiss="dismissToast()" :duration="1000"
          position="bottom" color="danger" animated="true"></ion-toast> -->
        <ion-text v-if="countdown > 0">Did not receive the code?
          <b> Resend in {{ countdown }}s</b>
        </ion-text>
        <ion-text v-else>Did not receive the code?
          <b @click="resendOtp"> Resend code</b>
        </ion-text>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton } from '@ionic/vue';
import { defineComponent, ref, computed } from 'vue';
import { personOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import VueOtpInput from 'vue3-otp-input';
import { verify, resend_otp } from '@/services/RegisterService';

export default defineComponent({
  components: { VueOtpInput, IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton },
  setup() {
    const router = useRouter();
    const countdown = ref(9);
    const otp = ref('');
    const openLoader = ref(false);


    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    const startTimer = () => {
      const timer = setInterval(() => {
        if (countdown.value > 0) {
          countdown.value--;
        } else {
          clearInterval(timer);
        }
      }, 1000);
    };
    startTimer();

    const handleOnChange = (OtpValue: any) => {
      // console.log('OTP changed: ', OtpValue);
      otp.value = OtpValue;

    }

    const verifyUser = async () => {
      openLoader.value == true;
      console.log(otp.value.length);
      if (otp.value.length == 6) {
        const success = await verify(otp.value);
        openLoader.value == false;
        if (success) {
          router.push({ name: 'Home' });
          console.log('Login successful');
        } else {
          // showToast.value = true;
          console.error('Login failed');
        }
      }
    }

    const resendOtp = async () => {
      const success = await resend_otp();
      countdown.value = 59;
      startTimer();
    }

    return {
      personOutline,
      gotoPage,
      otp,
      verifyUser,
      handleOnChange,
      resendOtp,
      countdown: computed(() => countdown.value),
      openLoader
    }
  },
});
</script>
