<template>
  <ion-page>
    <ion-content class="ion-padding" style="--background:rgb(23, 23, 245);" fullscreen>
      <div class="container">
        <div class="ion-text-center pb-4">
          <ion-icon :icon="personOutline" style="font-size: 200px;" class="text-white"></ion-icon>
        </div>
        <form style="width: 100%;" @submit.prevent="handleLogin()">
          <ion-input v-model="email_username" label="Email Address/Username" label-placement="floating" mode="md"
            fill="outline" placeholder="Email Address/Username" :type="inputType"
            class="ion-margin-bottom mt-4 text-white" style="--border-color: rgb(54, 54, 243, 0.986)"
            required></ion-input>

          <div class="password-input">
            <ion-input v-model="password" label="Password" label-placement="floating" mode="md" fill="outline"
              placeholder="Password" :type="showPassword ? 'text' : 'password'" class="ion-margin-bottom text-white"
              style="--border-color:rgb(54, 54, 243, 0.986);" required></ion-input>
            <ion-icon :icon="showPassword ? eyeOutline : eyeOffOutline" class="text-white eye-icon"
              style="font-size: 20px;" @click="toggleShowPassword"></ion-icon>
          </div>

          <ion-button expand="full" class="mb-4" style="--background:rgb(32, 209, 32);" size="large" type="submit">
            <b>LOGIN</b>
          </ion-button>
        </form>
        <ion-text class="text-center text-white ion-margin-bottom">
          <b @click="gotoPage('ForgetPassword')">Forget password?</b>
        </ion-text>
      </div>
      <div class="ion-text-center text-white" style="">
        <ion-text>Don't have an account? <b @click="gotoPage('Register')">Sign up</b></ion-text>
      </div>

      <ion-toast message="Something went wrong, check your internet connection" :is-open="offline"
        @didDismiss="dismissToast()" :duration="10000" position="bottom" color="danger" animated="true"></ion-toast>

      <ion-toast :message="toastMessage" :is-open="showToast" @didDismiss="dismissToast()" :duration="3000"
        position="bottom" color="danger" animated="true"></ion-toast>
      <!-- 
      <ion-toast message="You are currently offline" :is-open="offline" @didDismiss="dismissToast()" :duration="3000"
        position="bottom" color="danger" animated="true"></ion-toast> -->
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonToast } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personOutline } from 'ionicons/icons';
import { eyeOffOutline } from 'ionicons/icons';
import { eyeOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { login } from '@/services/AuthService';
import { ref, computed, watch } from 'vue';

export default defineComponent({
  components: { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonToast },
  setup() {
    const router = useRouter();
    const password = ref('');
    const showToast = ref(false);
    let showPassword = ref(false);
    const offline = ref(false);
    const toastMessage = ref('');


    const email_username = ref('');
    const inputType = computed(() => email_username.value.includes('@') ? 'email' : 'text');

    const gotoPage = (page: string) => {
      console.log(page);
      router.push({ name: page });
    };

    const handleLogin = async () => {
      const response = await login(email_username.value, password.value);
      if (response.success == true) {
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
      toastMessage
    };
  },
});
</script>
