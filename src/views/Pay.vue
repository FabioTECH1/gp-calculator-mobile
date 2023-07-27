<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="mt-2 text-center border-bottom p-2"><b>Pay Bill</b></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding-top" fullscreen>
      <ion-list>
        <div @click="">
          <ion-item class="ion-margin">
            <ion-icon :icon="wifi" class="icon" style="font-size: 40px;" />
            <div class="m-3">
              <h6 class="mb-0"><b class="d-block">Buy Data</b></h6>
              <span class="muted footnote">Buy SME data for all networks</span>
            </div>
            <ion-icon :icon="chevronForward" class="icon" slot="end" />
          </ion-item>
        </div>
        <div @click="">
          <ion-item class="ion-margin">
            <ion-icon :icon="call" class="icon" style="font-size: 40px;" />
            <div class="m-3">
              <h6 class="mb-0"><b class="d-block">Buy Airtime</b></h6>
              <span class="muted footnote">Recharge your airtime for all networks</span>
            </div>
            <ion-icon :icon="chevronForward" class="icon" slot="end" />
          </ion-item>
        </div>
        <div @click="">
          <ion-item class="ion-margin">
            <ion-icon :icon="flash" class="muted" style="font-size: 40px;"></ion-icon>
            <div class="m-3">
              <h6 class="mb-0"><b class="d-block muted">Electricity Bill</b></h6>
              <!-- <span class="muted" style="font-size: 13px;">Pay your electricity bill with ease</span> -->
              <span class="muted footnote">Coming Soon</span>
            </div>
            <ion-icon :icon="chevronForward" class="icon muted" slot="end" />
          </ion-item>
        </div>
        <div @click="">
          <ion-item class="ion-margin">
            <ion-icon :icon="tv" class="muted footnote" style="font-size: 40px;"></ion-icon>
            <div class="m-3">
              <h6 class="mb-0"><b class="d-block muted">Cable Subscription</b></h6>
              <!-- <span class="muted" style="font-size: 13px;">Pay for any cable subscription</span>
               -->
              <span class="muted footnote">Coming Soon</span>
            </div>
            <ion-icon :icon="chevronForward" class="icon muted" slot="end" />
          </ion-item>
        </div>
      </ion-list>
      <!-- </div> -->
    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {
  IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
  IonButton, IonText, IonIcon, IonToast, IonLabel, IonSpinner, IonLoading, IonButtons, IonBackButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import {
  personOutline, eyeOffOutline, eyeOutline, wifi,
  chevronForward, call, flash, tv
} from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { login } from '@/services/AuthService';
import { ref, computed, watch } from 'vue';

export default defineComponent({
  components: {
    IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle,
    IonButton, IonText, IonIcon, IonToast, IonLabel, IonSpinner, IonLoading, IonButtons, IonBackButton
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
      personOutline, eyeOffOutline, eyeOutline,
      wifi, chevronForward, call, flash, tv,
      gotoPage, openLoader,
      password, email_username, inputType,
      handleLogin, login,
      showToast, dismissToast, toastMessage,
      showPassword, toggleShowPassword,
      offline,
    };
  },
});
</script>
