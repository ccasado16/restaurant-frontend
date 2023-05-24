<script lang="ts"></script>
<template>
  <div class="flex h-screen justify-center">
    <v-card class="m-auto px-6 py-8 w-64">
      <v-form>
        <v-text-field class="mb-2" label="Username"></v-text-field>

        <v-text-field
          label="Password"
          placeholder="Enter your password"
          type="password"
        ></v-text-field>

        <v-btn
          block
          color="success"
          size="large"
          type="submit"
          variant="elevated"
        >
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>
