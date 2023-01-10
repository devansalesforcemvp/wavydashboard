const CandidateForm = () => {
  
    return (
        <div className="form "  style={{boxShadow:"3px 3px 3px 10px  lightblue"}}>

            <div style={{marginLeft:"25%"}}><h1 class="title is-3 is white " style={{textShadow:"3px 3px 3px lightblue"}}>ADD NEW CONTACT</h1></div>
        <div class="field">
  <div class="control">
<input class="input is-warning" type="text" placeholder="Enter First Name"/>
  </div>
</div>

<div class="field">
  <div class="control "> 

    <input class="input is-success" type="text" placeholder="Enter Last Name" />

  </div>
</div>
<div class="field">
  <div class="control ">
    <input class="input is-link" type="text" placeholder="Enter Job Title" />
 

  </div>
  
</div>
<div class="field">
  <div class="control">
<input class="input is-warning" type="text" placeholder="Enter Phone Number"/>
  </div>
</div>
<div class="field">
  <div class="control ">
    <input class="input is-success" type="email" placeholder="Enter Email" />
 

  </div>
</div>
<div class="field">
  <div class="control ">
    <input class="input is-link" type="text" placeholder="Enter Skill-Set" />
 

  </div>
  
</div>
<div class="field">
  <div class="control ">
    <input class="input is-link" type="text" placeholder="Enter Company" />
 

  </div>
  
</div>
<div class="field">
  <div class="control ">
    <input class="input is-warning" type="text" placeholder="Enter Address" />
 

  </div>

</div>
<div class="field">
  <div class="control ">
    <input class="input is-success" type="text" placeholder="Enter Hourly Rate $ USD" />
 

  </div>
  
</div>

<div class="field">
  <div class="control ">
    <input class="input is-success" type="text" placeholder="Enter Salary $ USD" />
 

  </div>
  
</div>

  <div class="field">
  <div class="control ">
    <input class="input is-success" type="text" placeholder="Enter Website" />
 

  </div>
  
</div>

<div class="field" >
  <div class="control">
    <div class="select is-link " style={{width:"100%"}}>
      <select>
        <option>Not Contacted</option>
        <option>Contact</option>
        <option>Interview Scheduled</option>
        <option>Placed</option>
        <option>Do Not Contact</option>

      </select>
    </div>
  </div>
</div>






<div class="field ">
  <span class="control">
    <button class="button is-primary ">Submit</button>
  </span>
  <span class="control">
    <button class="button is-danger is-light">Cancel</button>
  </span>
</div>
        </div>
    );
}


export default CandidateForm;