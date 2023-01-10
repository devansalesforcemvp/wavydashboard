const CompanyForm = () => {
    
    return (
        <div className="form "  style={{boxShadow:"3px 3px 3px 10px  lightblue"}}>

            <div style={{marginLeft:"25%"}}><h1 class="title is-3 is white " style={{textShadow:"3px 3px 3px lightblue"}}>ADD NEW CONTACT</h1></div>
        <div class="field">
  <div class="control">
<input class="input is-warning" type="text" placeholder="Enter Company Name"/>
  </div>
</div>

<div class="field">
  <div class="control "> 

    <input class="input is-success" type="text" placeholder="Enter Company Industry" />

  </div>
</div>
<div class="field">
  <div class="control ">
    <input class="input is-link" type="text" placeholder="Enter Company Phone Number" />
 

  </div>
  
</div>
<div class="field">
  <div class="control">
<input class="input is-warning" type="text" placeholder="Enter Company Point of Contact"/>
  </div>
</div>
<div class="field">
  <div class="control ">
    <input class="input is-success" type="email" placeholder="Enter Company Email" />
 

  </div>
</div>
<div class="field">
  <div class="control ">
    <input class="input is-warning" type="text" placeholder="Enter Address" />
 

  </div>

</div> 
<div class="field">
  <div class="control ">
    <input class="input is-link" type="text" placeholder="Enter Company Website " />
 

  </div>
  
</div>
 <div class="field">
  <div class="control ">
    <input class="input is-success" type="text" placeholder="Company's Biggest Competitor" />
 

  </div>
  
</div>

<div class="field" >
  <div class="control">
    <div class="select is-link " style={{width:"100%"}}>
      <select>
        <option>Unknown</option>
        <option>Gatekeeper</option>
        <option>Non-Decision Maker</option>

        <option>Decision Maker</option>
        <option>Relative Executive</option>

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


export default CompanyForm;