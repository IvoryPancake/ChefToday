<template>
<!-- SearchPage -->
    <div>
      <div>
        {{JSON.stringify(searchForm,null,2)}}
      </div>

        <!-- logo -->
        <div></div>
        <!-- Avatar -->
        <div></div>
        <!-- welcome Text -->
        <div>
            <h2>WELCOME CHEF {{userId}}</h2>
        </div>
        <!-- SearchBox -->
        <div>
          <form @submit.prevent="searchMenu">
            <div>
              <input type="text" placeholder="Food Name(*)" id="foodName" v-model="searchForm.foodName">
            </div>
            <!-- search by cuisin type -->
            <div>
              <select id="cuisineType" multiple  v-show="extendSearchForm" v-model="searchForm.cuisineType">
                <option value="">Select Cuisine Type</option>
                <option value="Caribbean">Caribbean</option>
                <option value="Italian">Italian</option>
                <option value="Korean">Korean</option>
                <option value="Chinese">Chinese</option>
                <option value="Japanese">Japanese</option>
                <option value="Indian">Indian</option>
                <option value="American">American</option>
                <option value="Thai">Thai</option>
                <option value="Spanich">Spanich</option>
                <option value="French">French</option>
                <option value="Moroccan">Moroccan</option>
              </select>
            </div>
            <!-- search by uploader id -->
            <div>
              <input type="text" placeholder="Uploader ID" id="uploaderId"  v-show="extendSearchForm" v-model="searchForm.uploaderId" @input="searchForm.uploaderId = $event.target.value.toLowerCase()">
            </div>
            <!-- search by ingredients -->
            <div>

            </div>
            <!-- search by cooking time -->
            <div>
              <input type="number" placeholder="Cooking Time (min)" id="cookingTime" v-show="extendSearchForm" v-model.number="searchForm.cookingTime">
            </div>

            <!-- extends button -->
            <div>
            <button @click="extendSearchFormToggle()">extend</button>
            </div>

            <div>
              <button>SEARCH</button>
            </div>
          </form>
        </div>
        

        <!-- Today Special -->
        <div>
            <h4>Today's Special</h4>
            
        </div>
    </div>
</template>

<script>


export default {
  name: 'SearchPage',
  data(){
    return {
      userId:'temporary ID',
      extendSearchForm: false,
      searchForm:{
        foodName:"",
        cuisineType:[],
        uploaderId:"",
        ingredients:[],
        cookingTime:null,
      }
    }
  },
  methods:{
    extendSearchFormToggle(){
      console.log('method called');
      return this.extendSearchForm = !this.extendSearchForm;
    },
    searchMenu(){
      console.log(this.searchForm);
      //format check
      if(this.searchForm.foodName === ""){
        console.log("format incomplete");
      }
      else{
        console.log("pass format to server");
      }
    }
  }
}
</script>

<style>

</style>
