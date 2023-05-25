<script lang="ts" setup>
  import { ref } from "vue";
  import { ILogin } from "../../models/IAuth";
  import { VForm } from "vuetify/components";
  import { useRouter } from "vue-router";
  import authLogin from "../../actions/authLogin";
  import loginRules from "./loginRules";

  const authModel = ref({
    username: "",
    password: "",
  } as ILogin);

  const formRef = ref<InstanceType<typeof VForm> | null>(null);
    const loading = ref<boolean>(false);
  const router = useRouter();

  const login = async () => {
    const isValidForm = await formRef.value?.validate();
    if (!isValidForm.valid) {
      console.log("Form is not valid");
      return;
    }

    console.log("Form is valid");
    loading.value = true;
    // login action
    const response = await authLogin(authModel.value);
    if (response) router.push("/"); // TODO - Change this to a non-hardcoded value
    loading.value = false;
  };
</script>

<template>
  <div class="flex h-screen justify-center">
    <v-card class="m-auto px-6 py-8 w-64">
      <v-form ref="formRef" :model="authModel">
        <v-text-field
          class="mb-2"
          label="Username"
          v-model="authModel.username"
          :rules="loginRules.username"
        ></v-text-field>

        <v-text-field
          label="Password"
          v-model="authModel.password"
          :rules="loginRules.password"
          placeholder="Enter your password"
          type="password"
          @keydown.enter="login"
        ></v-text-field>

        <v-btn
          block
          color="success"
          size="large"
          variant="elevated"
          @click="login"
          :loading="loading"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
