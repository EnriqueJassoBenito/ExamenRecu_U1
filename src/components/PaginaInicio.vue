<template>
  <div>
    <h1>Pagina de Inicio</h1>
    <b-breadcrumb :items="bread"></b-breadcrumb>
    <b-link @click="addRegistro"></b-link>

    <!-- :to="{ name: 'paginaregistro' }" -->

    <div class="overflow-auto">
      <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" :fields="fields" aria-controls="my-table"></b-pagination>

      <p class="mt-3">Current Page: {{ currentPage }}</p>

      <b-table id="my-table" :items="data" :per-page="perPage" :fields="fields" :current-page="currentPage" small></b-table>
    </div>

    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bread: [
        {
          text: "Pagina de Registro",
          to: { name: "paginaregistro" },
        },
        {
          active: true,
        },
      ],
      perPage: 3,
      currentPage: 1,
      fields: [
          { key: 'name', sortable: true },
          { key: 'edad', sortable: true },
          { key: 'cuatrimestre', sortable: true },
          { key: 'carrera', sortable: false }
        ],
      data: [
        { 'id': 1, 'Nombre': 'Jasso', 'Edad': '20', 'Cuatrimestre': '2', 'Carrera': 'DSM' },
        
      ],
    };
  },
  computed: {
    rows() {
      return this.data.length;
    },
    paginatedRegistros() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = startIndex + this.perPage;
      return this.data.slice(startIndex, endIndex);
    },

  },
  methods: {
    //Funcion para el registro
    addRegistro(){
      this.$router.push({ name: "paginaregistro" });
    },
    // Esta función puede ser llamada desde cualquier componente para cargar los registros desde el almacenamiento local
    loadRegistrosFromLocalStorage() {
      const registros = JSON.parse(localStorage.getItem('registros')) || [];
      this.registros = registros;
    },
  },
  created() {
  if (this.$route.params.data) {
    this.data = this.$route.params.data;
  }
}
};
</script>

<style></style>