<template>
  <ion-page>
    <ion-content class="ion-padding" fullscreen>
      <div class="container">
        <div class="ion-text-center pb-4">
          <ion-icon :icon="personOutline"></ion-icon>
        </div>
        <form style="width: 100%;" @submit.prevent="handleLogin()">
          <ion-input v-model="email_username" label="Email Address/Username" label-placement="floating" mode="md"
            fill="outline" placeholder="Email Address/Username" :type="inputType" class="ion-margin-bottom mt-4"
            required></ion-input>

          <div class="password-input">
            <ion-input v-model="password" label="Password" label-placement="floating" mode="md" fill="outline"
              placeholder="Password" :type="showPassword ? 'text' : 'password'" class="ion-margin-bottom"
              required></ion-input>
            <ion-icon :icon="showPassword ? eyeOutline : eyeOffOutline" class="eye-icon" style="font-size: 20px;"
              @click="toggleShowPassword"></ion-icon>
          </div>

          <ion-button expand="full" class="mb-4" size="large" type="submit">
            <b>LOGIN</b>
          </ion-button>
          <ion-loading :is-open="openLoader" message="Logging in.." duration="3000" spinner="circles"></ion-loading>
        </form>

        <ion-text class="text-center ion-margin-bottom muted">
          Forget password?
          <b @click="gotoPage('ForgetPassword')" class="text-dark">Reset</b>
        </ion-text>
      </div>
      <div class="ion-text-center" style="">
        <ion-text class="muted">Don't have an account? <b @click="gotoPage('Register')" class="text-dark">Sign
            up</b></ion-text>
      </div>
      <!-- 
      <ion-toast message="Something went wrong, check your internet connection" :is-open="offline"
        @didDismiss="dismissToast()" :duration="10000" position="bottom" color="danger" animated="true"></ion-toast> -->

      <ion-toast :message="toastMessage" :is-open="showToast" @didDismiss="dismissToast()" :duration="1000"
        position="bottom" color="danger" animated="true"></ion-toast>
      <!-- 
      <ion-toast message="You are currently offline" :is-open="offline" @didDismiss="dismissToast()" :duration="3000"
        position="bottom" color="danger" animated="true"></ion-toast> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
  IonButton, IonText, IonIcon, IonToast, IonLabel, IonSpinner, IonLoading
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { personOutline } from 'ionicons/icons';
import { eyeOffOutline } from 'ionicons/icons';
import { eyeOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { login } from '@/services/AuthService';
import { ref, computed, watch } from 'vue';

export default defineComponent({
  components: {
    IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
    IonButton, IonText, IonIcon, IonToast, IonLabel, IonSpinner, IonLoading
  },
  setup() {
    const router = useRouter();
    const password = ref('');
    const showToast = ref(false);
    const showPassword = ref(false);
    const offline = ref(false);
    const toastMessage = ref('');
    const openLoader = ref(false);


    const email_username = ref('');
    const inputType = computed(() => email_username.value.includes('@') ? 'email' : 'text');

    const gotoPage = (page: string) => {
      console.log(page);
      router.push({ name: page });
    };

    const handleLogin = async () => {
      openLoader.value = true
      const response = await login(email_username.value, password.value);
      openLoader.value = false
      if (response.success == true) {
        email_username.value = ''
        password.value = ''
        router.push({ name: 'Home' });
      } else {
        toastMessage.value = response.message;
        showToast.value = !response.success;
      }

    };

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    watch(email_username, () => {
      showToast.value = false;
    });

    if (navigator.onLine) {
      console.log('online');
      offline.value = false;
    } else {
      offline.value = true;
      console.log('offline');
    }

    console.log(offline.value);

    const dismissToast = () => {
      showToast.value = false;
      offline.value = false;
    };

    return {
      personOutline,
      eyeOffOutline,
      eyeOutline,
      gotoPage,
      password,
      email_username,
      inputType,
      handleLogin,
      login,
      showToast,
      showPassword,
      toggleShowPassword,
      dismissToast,
      offline,
      toastMessage,
      openLoader
    };
  },
});
</script>
