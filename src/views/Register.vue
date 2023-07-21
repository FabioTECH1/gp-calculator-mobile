<template>
  <ion-page>
    <ion-header color='primary' class="ion-no-border">
      <div v-if="currentView === 'second'">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button default-href="/register" class="text-white m-3" text=""
              @click="goToPreviousView"></ion-back-button>
          </ion-buttons>
        </ion-toolbar>
      </div>
    </ion-header>
    <ion-content class="ion-padding" fullscreen>
      <div class="container">
        <div class="ion-text-center pb-4">
          <ion-icon :icon="personOutline" style="font-size: 200px;" class="text-white"></ion-icon>
        </div>

        <!-- First View -->
        <form style="width: 100%;" @submit.prevent="registerUser">
          <div v-if="currentView === 'first'">
            <ion-input v-model="firstName" label="First name" label-placement="floating" mode="md" fill="outline"
              placeholder="First name" type="text" class="ion-margin-bottom text-white"
              style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

            <ion-input v-model="middleName" label="Middle name (optional)" label-placement="floating" mode="md"
              fill="outline" placeholder="Middle name (optional)" type="text" class="ion-margin-bottom text-white"
              style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

            <ion-input v-model="lastName" label="Last name" label-placement="floating" mode="md" fill="outline"
              placeholder="Last name" type="text" class="ion-margin-bottom text-white"
              style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

            <ion-button expand="full" class="ion-margin-bottom mb-4" style="--background:rgb(32, 209, 32);" size="large"
              @click="goToNextView" :disabled="!areFieldsFilled">
              <b>Continue</b>
            </ion-button>
          </div>

          <!-- Second View -->
          <div v-if="currentView === 'second'">
            <ion-input v-model="userName" label="Username" label-placement="floating" mode="md" fill="outline"
              placeholder="Username" type="text" class="ion-margin-bottom text-white"
              style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

            <ion-input v-model="email" label="Email Address" label-placement="floating" mode="md" fill="outline"
              placeholder="Email Address" type="email" class="ion-margin-bottom text-white"
              style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

            <ion-input v-model="referral" label="Referral" label-placement="floating" mode="md" fill="outline"
              placeholder="Referral" type="text" class="ion-margin-bottom text-white"
              style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

            <div class="password-input">
              <ion-input v-model="password" label="Password" label-placement="floating" mode="md" fill="outline"
                placeholder="Password" :type="showPassword ? 'text' : 'password'" class="ion-margin-bottom text-white"
                style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>
              <ion-icon :icon="showPassword ? eyeOutline : eyeOffOutline" class="text-white eye-icon"
                style="font-size: 20px;" @click="toggleShowPassword"></ion-icon>
            </div>

            <ion-button expand="full" class="ion-margin-bottom mb-4" style="--background:rgb(32, 209, 32);" size="large"
              type="submit">
              <b>Submit</b>
            </ion-button>
            <ion-loading :is-open="openLoader" message="Creating account.." duration="3000"
              spinner="circles"></ion-loading>

          </div>
        </form>

        <!-- <div > -->
        <div v-if="currentView === 'first'" class="ion-text-center text-white">
          <ion-text>
            Already have an account? <b @click="gotoPage('Login')">Sign in</b>
          </ion-text>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonBackButton, IonButtons } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personOutline } from 'ionicons/icons';
import { eyeOffOutline } from 'ionicons/icons';
import { eyeOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { ref, computed } from 'vue';
import { register } from '@/services/RegisterService';
import Verify from './Verify.vue';

export default defineComponent({
  components: { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, IonBackButton, IonButtons },
  setup() {
    const router = useRouter();

    // Data properties
    let currentView = ref('first');
    let firstName = ref('');
    let middleName = ref('');
    let lastName = ref('');
    let email = ref('');
    let userName = ref('');
    let referral = ref('');
    let password = ref('');
    let showPassword = ref(false);
    let openLoader = ref(false);

    const gotoPage = (page: string) => {
      console.log(page);
      router.push({ name: page });
    };

    const goToNextView = () => {
      currentView.value = 'second';
    };

    const goToPreviousView = () => {
      currentView.value = 'first';
    };

    const toggleShowPassword = () => {
      showPassword.value = !showPassword.value;
    };

    const registerUser = async () => {
      openLoader.value = true
      const response = await register(firstName.value, middleName.value, lastName.value, email.value, userName.value, referral.value, password.value);
      openLoader.value = false
      if (response) {
        console.log('otp sent');
        router.push({ name: 'VerifyOtp' });

        //otp page
      } else {
        console.log('error');
        //toast the error
      }
    }
    const areFieldsFilled = computed(() => {
      return firstName.value.trim() !== '' && lastName.value.trim() !== '';
    });

    return {
      personOutline,
      eyeOffOutline,
      eyeOutline,
      currentView,
      firstName,
      middleName,
      lastName,
      userName,
      email,
      referral,
      password,
      gotoPage,
      goToNextView,
      goToPreviousView,
      showPassword,
      toggleShowPassword,
      registerUser,
      areFieldsFilled,
      openLoader
    };
  },
});
</script>

<style>
.password-input {
  position: relative;
}

.eye-icon {
  position: absolute;
  top: 34%;
  right: 22px;
  z-index: 1200;
}
</style>
