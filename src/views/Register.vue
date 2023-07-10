<template>
  <ion-page>
    <ion-content class="ion-padding" style="--background:rgb(23, 23, 245);" fullscreen>
      <div class="container">
        <div class="ion-text-center pb-4">
          <ion-icon :icon="personOutline" style="font-size: 200px;" class="text-white"></ion-icon>
        </div>
        <form style="width: 100%;">
          <ion-input label="Full Name" label-placement="floating" mode="md" fill="outline" placeholder="Full Name"
            type="text" class="ion-margin-bottom text-white" style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

          <ion-input label="Email Address" label-placement="floating" mode="md" fill="outline" placeholder="Email Address"
            type="email" class="ion-margin-bottom text-white" style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

          <ion-input label="Password" label-placement="floating" mode="md" fill="outline" placeholder="Password"
            type="password" class="ion-margin-bottom text-white"
            style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

          <ion-input label="Confirm Password" label-placement="floating" mode="md" fill="outline"
            placeholder="Confirm Password" type="password" class="ion-margin-bottom text-white"
            style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

          <ion-button expand="full" class="ion-margin-bottom mb-4" style="--background:rgb(32, 209, 32);"
            size="large"><b>Register</b></ion-button>
        </form>
      </div>
      <div class="ion-text-center text-white" style="">
        <ion-text>Already have an account? <b @click="gotoPage('Login')">Sign in
          </b></ion-text>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon, },
  setup() {
    const router = useRouter()

    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    return {
      personOutline,
      gotoPage
    }
  },



});
</script>