<template>

  <v-col
      cols="12"
      md="4"
  >
    <v-select
        v-model="variant"
        :items="items"
        clearable
        label="Filter by country"
    ></v-select>

    <v-select
        v-model="variant"
        :items="items"
        clearable
        label="Filter by score"
    ></v-select>
  </v-col>

</template>

<script>
  export default {
    name: 'Filters',

    data: () => ({
      items: [
        'russia',
        'usa',
        '> 20',
        '< 10',
      ],
      variant: 'default',
    }),
  }
</script>