<template>
  <ion-page>
    <ion-content class="ion-padding" fullscreen>

      <div class="text-white">
        <h1 class="welcome-message">Welcome, {{ user?.name }}</h1>
        <div class="wallet-info">
          <div class="balance">Balance: ${{ balance }}</div>
          <ion-button @click="" expand="full" class="add-money-button">
            <b>Add Money to Wallet</b>
          </ion-button>
        </div>
      </div>

      <!-- Transactions section -->
      <ion-list class="transactions-list">
        <ion-item v-for="transaction in transactions" :key="transaction.id">
          <div class="transaction-info">
            <div class="transaction-date">{{ transaction.date }}</div>
            <div class="transaction-amount"
              :class="{ 'transaction-credit': transaction.type === 'credit', 'transaction-debit': transaction.type === 'debit' }">
              {{ transaction.type === 'credit' ? '+' : '-' }} ${{ transaction.amount }}
            </div>
          </div>
          <div class="transaction-description">{{ transaction.description }}</div>
        </ion-item>
      </ion-list>

      <!-- <ion-button @click="userInfo()">Get User</ion-button> -->
      <ion-button @click="handleLogout()" expand="full" class="" style="--background:rgb(32, 209, 32);"
        size="large"><b>Logout</b></ion-button>
    </ion-content>

    <ion-footer>
      <ion-toolbar>
        <ion-grid>
          <ion-row class="ion-justify-content-around">
            <!-- <ion-icon :icon="home-outline"></ion-icon> -->
            <ion-col class="ion-text-center">
              <ion-icon :icon="homeOutline" class="icon"></ion-icon>
              <!-- <div>Home</div> -->
            </ion-col>
            <ion-col class="ion-text-center">
              <ion-icon :icon="sendOutline" class="icon"></ion-icon>
              <!-- <div>Pay</div> -->
            </ion-col>
            <ion-col class="ion-text-center">
              <ion-icon :icon="optionsOutline" class="icon"></ion-icon>
              <!-- <div>More</div> -->
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<style>
.icon {
  font-size: 28px;
}

/* Page-specific styles */
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90%;
}

.welcome-message {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.wallet-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
}

.balance {
  font-size: 20px;
  margin-bottom: 15px;
}

.add-money-button {
  --background: rgb(32, 209, 32);
  --color: #fff;
  font-size: 16px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 15px;
}

/* Styles for the transactions section */
.transactions-list {
  height: 60%;
  overflow-y: auto;
}

.transaction-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 20px;
}

.transaction-date {
  font-size: 14px;
}

.transaction-amount {
  font-size: 18px;
}

.transaction-credit {
  color: green;
}

.transaction-debit {
  color: red;
}

.transaction-description {
  margin-left: 20px;
  font-size: 16px;
}
</style>

<script lang="ts">
import {
  IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonGrid, IonRow,
  IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton, IonFooter, IonCol
} from '@ionic/vue';
import { defineComponent, onMounted } from 'vue';
import { personOutline, homeOutline, sendOutline, optionsOutline } from 'ionicons/icons';
import { useRouter } from 'vue-router';
import { logout } from '@/services/AuthService';
import { IUser, getUser } from '@/services/UserService';
import { ref } from 'vue';



export default defineComponent({
  components: {
    IonInput, IonItem, IonList, IonContent, IonToolbar, IonPage, IonHeader, IonGrid, IonRow,
    IonTitle, IonButton, IonText, IonIcon, IonButtons, IonBackButton, IonFooter, IonCol
  },
  setup() {
    const router = useRouter()
    const user = ref<IUser>();

    const gotoPage = (page: string) => {
      router.push({ name: page });
    }

    const handleLogout = async () => {
      await logout();
      router.push({ name: 'Login' });
    };

    const userInfo = async () => {
      user.value = await getUser();
      // console.log(userData);
    }
    const user_ = ref({ name: 'John Doe' });
    const balance = ref(500);

    // Dummy transactions data
    const transactions = [
      { id: 1, date: '2023-07-21', amount: 100, type: 'credit', description: 'Received payment' },
      { id: 2, date: '2023-07-20', amount: 50, type: 'debit', description: 'Purchase at Store A' },
      { id: 3, date: '2023-07-19', amount: 200, type: 'debit', description: 'Online Shopping' },
      { id: 4, date: '2023-07-18', amount: 150, type: 'credit', description: 'Refund' },
      { id: 5, date: '2023-07-17', amount: 300, type: 'credit', description: 'Salary' },
      { id: 6, date: '2023-07-16', amount: 50, type: 'debit', description: 'Coffee Shop' },
      { id: 8, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
      { id: 9, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
      { id: 10, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
      { id: 11, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
      { id: 12, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
      { id: 13, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
      { id: 14, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
      { id: 15, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
      { id: 16, date: '2023-07-15', amount: 80, type: 'debit', description: 'Lunch with friends' },
    ];

    onMounted(() => {
      userInfo()
    })

    return {
      personOutline,
      homeOutline,
      sendOutline,
      optionsOutline,
      gotoPage,
      user,
      handleLogout,
      userInfo,
      user_,
      balance,
      transactions,
      // userData
    }
  },
});
</script>