<template>
  <ion-page>
    <ion-header class="ion-no-border">
      <ion-toolbar>
        <ion-title class="mt-2 text-center border-bottom p-2"><b>More</b></ion-title>
      </ion-toolbar>

    </ion-header>

    <ion-content class="ion-padding-top" fullscreen>
      <ion-list>
        <div @click="">
          <ion-item class="ion-margin">
            <ion-icon :icon="personCircle" class="icon" style="font-size: 40px;" />
            <div class="m-3">
              <h6 class="mb-0"><b class="d-block">Yusuf Faruk</b></h6>
              <span class="muted footnote">Update your profile information</span>
            </div>
            <ion-icon :icon="chevronForward" class="icon" slot="end" />
          </ion-item>
        </div>
        <div @click="">
          <ion-item class="ion-margin">
            <ion-icon :icon="helpCircle" class="icon" style="font-size: 40px;" />
            <div class="m-3">
              <h6 class="mb-0"><b class="d-block">Get Help</b></h6>
              <span class="muted footnote">Get support or send feedback</span>
            </div>
            <ion-icon :icon="chevronForward" class="icon" slot="end" />
          </ion-item>
        </div>
        <div @click="">
          <ion-item class="ion-margin">
            <ion-icon :icon="key" class="icon" style="font-size: 40px;" />
            <div class="m-3">
              <h6 class="mb-0"><b class="d-block">Security</b></h6>
              <span class="muted footnote">Protect yourself from intruders</span>
            </div>
            <ion-icon :icon="chevronForward" class="icon" slot="end" />
          </ion-item>
        </div>
        <div @click="">
          <ion-item class="ion-margin">
            <ion-icon :icon="people" class="icon" style="font-size: 40px;" />
            <div class="m-3">
              <h6 class="mb-0"><b class="d-block">Referrals</b></h6>
              <!-- <span class="muted" style="font-size: 13px;">Pay your electricity bill with ease</span> -->
              <span class="muted footnote">Earn money when your friends join us</span>
            </div>
            <ion-icon :icon="chevronForward" class="icon" slot="end" />
          </ion-item>
        </div>
      </ion-list>

      <div class="ion-text-center" style="">
        <ion-text class="muted"><b @click="handleLogout" class="text-danger">Sign
            Out</b></ion-text>
      </div>
      <!-- </div> -->
      <!-- <ion-button @click="handleLogout()" expand="full" class="" size="large"><b>Logout</b></ion-button> -->

    </ion-content>

  </ion-page>
</template>

<script lang="ts">
import {
  IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonAvatar,
  IonButton, IonText, IonIcon, IonToast, IonLabel, IonSpinner, IonLoading, IonButtons, IonBackButton
} from '@ionic/vue';
import { defineComponent } from 'vue';
import {
  personOutline, eyeOffOutline, eyeOutline, wifi,
  chevronForward, call, flash, tv, helpCircle, key, gitNetwork, people, personCircle
} from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { logout } from '@/services/AuthService';
import { ref, computed, watch } from 'vue';

export default defineComponent({
  components: {
    IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonAvatar,
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

    const handleLogout = async () => {
      await logout();
      router.push({ name: 'Login' });
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
      personOutline, eyeOffOutline, eyeOutline, key, gitNetwork, personCircle,
      wifi, chevronForward, call, flash, tv, helpCircle, people,
      gotoPage, openLoader,
      password, email_username, inputType,
      handleLogout,
      showToast, dismissToast, toastMessage,
      showPassword, toggleShowPassword,
      offline,
    };
  },
});
</script>
