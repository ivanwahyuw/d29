<template>
    <div>
      <!-- BootstrapVue Done -->
      <base-header class="pb-6 pb-8 pt-5 pt-md-8 ">
        <!-- Card stats -->
  
      </base-header>
      <card>
      <div>
        Nama Penjual
        <b-form-input v-model="nama" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
      No Penjual
      <b-form-input v-model="nama" placeholder="Enter your name"></b-form-input>
      <div class="mt-2"></div>
  </div>
    <div>
        Tipe
        <b-form-input v-model="tipe" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
        Harga
        <b-form-input v-model="jumlah" placeholder="Enter your name"></b-form-input>
        <div class="mt-2"></div>
    </div>
    <div>
        Tanggal
        <b-form-input v-model="tanggal" type="date"></b-form-input>
        <div class="mt-2"></div>
    </div>
  
    <b-button variant="success" v-on:click="simpan_obat()">Simpan</b-button>
    
  </card>
    </div>
  </template>
  <script>
    import Vue from 'vue'
    import VueClipboard from 'vue-clipboard2'
    import BaseHeader from '@/components/BaseHeader';
    import { Table, TableColumn } from 'element-ui';
    import axios from 'axios'
  
    axios.defaults.baseURL = 'http://localhost/rumah/crumah'
    
    const head_form = {headers: {'Content-Type': 'multipart/form-data'}}
  
    Vue.use(VueClipboard)
    export default {
      name: 'icons',
      components: {
        BaseHeader,
        [Table.name]: Table,
        [TableColumn.name]: TableColumn
      },
      data() {
      return {
        nama : '',
        jumlah : '',
        tanggal : '',
        tipe : '',
        tgl_kadaluarsa : '',
      }
    },
      methods: {
        simpan_obat : function(){
            var arr_post = {
                nama : this.nama,
                tipe : this.tipe,
                jumlah : this.jumlah,
                tanggal : this.tanggal,
                tgl_kadaluarsa : this.tgl_kadaluarsa,
            }
  
            axios.post("tambah_obat",arr_post,head_form)
                .then(response => (
                    // alert('Berhasil ditambahkan')
                    alert("Berhasil ditambahkan")
                    // this.$refs.formTambah.reset()
                ))
                .catch(error => alert(error));
        }
      }
    };
  
  </script>
  
  <style></style>