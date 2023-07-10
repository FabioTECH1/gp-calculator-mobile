<template>
  <ion-page>
    <ion-content class="ion-padding" style="--background:rgb(23, 23, 245);" fullscreen>
      <div class="container">
        <div class="ion-text-center pb-4">
          <ion-icon :icon="personOutline" style="font-size: 200px;" class="text-white"></ion-icon>
        </div>
        <form style="width: 100%;" @submit.prevent="handleLogin()">
          <ion-input v-model="email" label="Email Address" label-placement="floating" mode="md" fill="outline"
            placeholder="Email Address" type="email" class="ion-margin-bottom mt-4 text-white"
            style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

          <ion-input v-model="password" label="Password" label-placement="floating" mode="md" fill="outline"
            placeholder="Password" type="password" class="ion-margin-bottom text-white"
            style="--border-color:rgb(54, 54, 243, 0.986);"></ion-input>

          <ion-button expand="full" class="tex" style="--background:rgb(32, 209, 32);" size="large"
            type="submit"><b>LOGIN</b></ion-button>
        </form>
        <ion-text class="text-center text-white ion-margin-bottom"><b @click="gotoPage('ForgetPassword')">Forget
            password?</b></ion-text>
      </div>
      <div class="ion-text-center text-white" style="">
        <ion-text>Don't have an account? <b @click="gotoPage('Register')">Sign up</b></ion-text>
      </div>

    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon } from '@ionic/vue';
import { defineComponent } from 'vue';
import { personOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { login } from '@/services/AuthService';
import { ref } from 'vue';

export default defineComponent({
  components: { IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonTitle, IonButton, IonText, IonIcon },
  setup() {
    const router = useRouter();
    const email = ref('');
    const password = ref('');

    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    const handleLogin = async () => {
      const success = await login(email.value, password.value);
      if (success) {
        router.push({ name: 'Home' });
        console.log('Login successful');
      } else {
        console.error('Login failed');
      }
    };

    return {
      personOutline,
      gotoPage,
      email,
      password,
      handleLogin,
      login,
    };
  },

});
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 94%
}

ion-input.text-white {
  --background: rgba(54, 54, 243, 0.986);
  --border-color: rgb(54, 54, 243, 0.986);
}
</style>