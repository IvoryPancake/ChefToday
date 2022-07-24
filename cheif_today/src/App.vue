<template>
  <div>
    <div>
      <pre>
        {{JSON.stringify(formValues,null,2)}}
      </pre>
    </div>
    <form @submit.prevent="submitForm">
    <div>
      <label for="name">Name</label>
      <input type="text" id="name" v-model.lazy="formValues.name">
    </div>
    <div>
      <label for="age">Age</label>
      <input type="number" id="age" v-model.number="formValues.age">
    </div>
    <div>
      <label for="profileSummary">Profile Summary</label>
      <textarea id="profileSummary" v-model="formValues.profileSummary"></textarea>
    </div>
    <div>
      <label for="country">Country</label>
      <select id="country" v-model="formValues.country">
        <option value="">Select a country</option>
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <label for="jobLocation">Job Location</label>
      <select id="jobLocation" multiple v-model="formValues.jobLocation">
        <option value="india">India</option>
        <option value="vietnam">Vietnam</option>
        <option value="singapore">Singapore</option>
      </select>
    </div>
    <div>
      <input type="checkbox" id="remoteWork" v-model="formValues.remoteWork" true-value="yes" false-value="no">
      <label for="remoteWork">Open to Remote Work?</label>
    </div>

    <div>
      <label>Skill Sets</label>
      <input type="checkbox" id="html" value="html" v-model="formValues.skillSet">
      <label for="html">HTML</label>
      <input type="checkbox" id="css" value="css" v-model="formValues.skillSet">
      <label for="css">CSS</label>
      <input type="checkbox" id="javascript" value="javascript" v-model="formValues.skillSet">
      <label for="javascript">JavaScript</label>
    </div>

    <div>
      <label>Years of Experience</label>
      <input type="radio" id="0-2" value="0-2" v-model="formValues.yearsOfExperience">
      <label for="0-2">0-2</label>
      <input type="radio" id="3-5" value="3-5" v-model="formValues.yearsOfExperience">
      <label for="3-5">3-5</label>
      <input type="radio" id="6-10" value="6-10" v-model="formValues.yearsOfExperience">
      <label for="6-10">6-10</label>
    </div>

    <div>
      <button>Submit</button>
    </div>

  </form>
  </div>

  
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      formValues: {
        name:"",
        age:null,
        profileSummary: '',
        country: '',
        jobLocation: [],
        remoteWork: "no",
        skillSet:[],
        yearsOfExperience: '',
      }
    }
  },
  methods: {
    submitForm(){
      console.log('Form Values:', this.formValues);
    }
  }
}
</script>

<style>
#div {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

label {
  font-weight: bold;
  display: flex;
  margin-bottom: 60px;
}

input+label{
  font-weight: bold;
  display: inline-flex;
  margin-right: 20px;
}

input[type='text'],
textarea,
select{
  display: block;
  widows: 400;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.428;
  color: #555;
  background-color: #fff;
  background-image: none;
}

.underline{
  text-decoration: underline;
}
</style>
