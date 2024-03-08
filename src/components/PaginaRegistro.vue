<template>
  <div>
    <h1>Pagina de registro</h1>
    <b-breadcrumb :items="bread"></b-breadcrumb>
    <b-link :to="{ name: 'paginainicio' }"></b-link>

    <!-- Form -->
    <div class="col col-sm-3 ">

      <b-form @submit.stop.prevent="onSubmit" v-if="show">
        <b-form-group id="input-group-2" label="Nombre:" label-for="input-2">
          <b-form-input id="input-2" name="input-2" v-model="form.name" v-validate="'alpha'"
            :state="validateState('input-2')" aria-describedby="input-2-feedback" placeholder="Ingresa el nombre">
          </b-form-input>
          <b-form-invalid-feedback id="input-2-feedback">Invalido</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="input-group-3" label="Edad:" label-for="input-3">
          <b-form-input id="input-3" name="input-3" v-model="form.edad"
            v-validate="{ required: true, max_value: 100, numeric }" :state="validateState('input-3')"
            aria-describedby="input-2-feedback" placeholder="Ingresa tu edad">
          </b-form-input>
          <b-form-invalid-feedback id="input-3-feedback">Debe ingresar valores correctos</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="input-group-4" label="Cuatrimestre:" label-for="input-4">
          <b-form-input id="input-4" name="input-4" v-model="form.cuatrimestre"
            v-validate="{ required: true, max_value: 12, numeric }" :state="validateState('input-4')"
            aria-describedby="input-4-feedback" placeholder="Cuatrimestre que cursa">
          </b-form-input>
          <b-form-invalid-feedback id="input-4-feedback">Debe ingresar valores correctos</b-form-invalid-feedback>
        </b-form-group>

        <b-form-group id="input-group-5" label="Carrera:" label-for="input-5">
          <b-form-input id="input-5" name="input-5" v-model="form.carrera" v-validate="{ required: true, min: 3, alpha }"
            :state="validateState('input-5')" aria-describedby="input-5-feedback" placeholder="Carrera que cursa">
          </b-form-input>
          <b-form-invalid-feedback id="input-5-feedback">Debe ingresar valores correctos</b-form-invalid-feedback>
        </b-form-group>

        <b-button variant="danger" class="mt-4">Cancelar</b-button>
        <b-button variant="success" class="mt-4" type="submit">Aceptar</b-button>

      </b-form>
      <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bread: [
        {
          text: 'Pagina de Inicio',
          to: { name: 'paginainicio' }
        },
        {
          active: true
        },
      ],
      form: {
        name: '',
        edad: '',
        cuatrimestre: '',
        carrera: '',
      },
      show: true,
      // data: [],

    }
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref);
      }
      return null;
    },
    onSubmit() {
      this.$validator.validateAll().then(result => {
        if (!result) {
          return;
        }
        // Guardar los datos del formulario en el almacenamiento local
        const registro = {
          name: this.form.name,
          edad: this.form.edad,
          cuatrimestre: this.form.cuatrimestre,
          carrera: this.form.carrera
        };
        let registros = JSON.parse(localStorage.getItem('registros')) || [];
        registros.push(registro);
        localStorage.setItem('registros', JSON.stringify(registros));

        // Redirigir a la página de inicio
        this.$router.push({ name: 'paginainicio', params: { data: registros } });
      });
    },
    //
    created() {
      console.log(this.$route.params.data);
      if (this.$route.params.data) {
        this.data = this.$route.params.data
      }
    }
  }
}
</script>

<style></style>