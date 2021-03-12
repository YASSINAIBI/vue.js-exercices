<template>
  <div>
    <h1>Create Simple Form Validation</h1>

    <ul v-for="error in formErrors" v-bind:key="error">
        <li class="alert alert-danger error"> {{ error }} </li>
    </ul>

    <transition name="fade">
        <ul v-for="sucess in sucessForm" v-bind:key="sucess">
            <li class="alert alert-success sucess"> {{ sucess }} </li>
        </ul>
    </transition>

    <div class="container mb-5">
      <form method="POST" @submit="submitFunction">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            v-model="email"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <label for="exampleFormControlTextarea1">Message</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            v-model="message"
          ></textarea>
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">I agree</label>
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
        <!-- :disabled="isDisabled == true" -->
      </form>
    </div>
  </div>
</template>

<script>
export default {
    data: function() {
        return {
                formErrors: [],
                sucessForm: [],
              email: null,
              password: null,
              message: null
        }
    },

  methods: {
      submitFunction: function(e) {
          e.preventDefault();

        this.formErrors = [];

        if(!this.email){
            this.formErrors.push("you can't leave email empty");
        }
        if(!this.password){
            this.formErrors.push("you can't leave password empty");
        }
        if(!this.message){
            this.formErrors.push("you can't leave message empty");
        }
        if(this.message.length < 10) {
            this.formErrors.push(`you should enter more than ${this.message.length} character`);
        }

        if(!this.formErrors.length){
            this.sucessForm.push("the form is valid");

            setTimeout(() => {
                this.sucessForm = [];
            }, 2000);
            return true;
        }

      }
  },
    name: "Tuto5"
};
</script>

<style lang="scss" scoped>
    .error {
        padding: 1%;
        list-style: none;
        margin: 2% 30%;
    }
    .sucess{
        @extend .error
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }

</style>
