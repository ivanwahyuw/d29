<template>
  <div>
    <div class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center profile-header"
        style="min-height: 600px; background: #6d6d6d; background-size: cover; background-position: center top;"><b-container fluid>
          <!-- Mask -->
          <span class=" opacity-8"></span>
          <!-- Header container -->
          <b-container fluid class="mt--0">
            <b-row >
          <b-container fluid class="mt--0">
              <b-row>
                <b-col xl="4" class="order-xl-2 mb-5">
                  <user-card></user-card>
                </b-col>
                <b-col xl="8" class="order-xl-1">
                  <edit-profile-form></edit-profile-form>
                </b-col>
              </b-row>
            </b-container>
            </b-row>
          </b-container>
        </b-container>
    </div>

    
  </div>
</template>
<script>
  import EditProfileForm from './UserProfile/EditProfileForm.vue';
  import UserCard from './UserProfile/UserCard.vue';

  export default {
    components: {
      EditProfileForm,
      UserCard
    }
  };
</script>
<style>
</style>
