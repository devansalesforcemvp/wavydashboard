const ContactsList = () => {

    /** The abbr attribute specifies a shorter version of the content cell.
/**<table>	Defines a table
<th>	Defines a header cell in a table
<tr>	Defines a row in a table
<td>	Defines a cell in a table
<caption>	Defines a table caption
<colgroup>	Specifies a group of one or more columns in a table for formatting
<col>	Specifies column properties for each column within a <colgroup> element
<thead>	Groups the header content in a table
<tbody>	Groups the body content in a table
<tfoot>	Groups the footer content in a table */

//Note: The abbr attribute has no visual effect in ordinary web browsers, but can be used by screen readers.  */

/**Categories
 * 
 * Contact Name 
Account Name
Email
Phone
Contact Owner
Lead Source
First Name
Last Name 
Title
Department
 */

//18 rows in the header so that is how many cells we will have.

    return (
        <div className="table-container">
            <table class="table is-bordered is-striped is-narrow is-hoverable" style={{width:"100%"}}>
              <thead> 
              <tr style={{width:"5%"}}>
                  <th>1</th>
                  <th>2</th>
                  <th>3 </th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>

                  <th>12</th>
                  <th>13</th>
                  <th>14</th>
                  <th>15</th>
                  <th>16</th>
                  <th>17</th>
                  <th>18</th>
                </tr>
                <tr className="tbody ">
                  <th style={{width:"7%"}}><span className="tag is-black">Contact Name</span></th> 
                  <th style={{width:"7%"}}><span className="tag is-black">Company Name</span></th>
                  <th style={{width:"7%"}}><span className="tag is-black">Phone</span></th>
                  <th><span className="tag is-black">Email</span></th>
                  <th><span className="tag is-black">Title</span></th>  
                    <th><span className="tag is-black">Department</span></th>
                    <th style={{width:"7%"}}> <span className="tag is-black">Address</span></th>
                    <th><span className="tag is-black">Client Contact?</span></th>
                    <th><span className="tag is-black">Relative Executive?</span></th>
                    <th><span className="tag is-black">Friend or Foe</span></th>
                  <th><span className="tag is-black">Favorite Hobby</span></th>
                  <th><span className="tag is-black">Website</span></th>
                <th><span className="tag is-black">Last Activity Date</span></th>
                  <th><span className="tag is-black">Last Activity Notes</span></th>
                  <th><span className="tag is-black">First Name</span></th>
                  <th><span className="tag is-black">Last Name</span></th>
                  <th><span className="tag is-black">Birthday</span></th>
                  <th style={{width:"7%"}}><span className="tag is-black">Contact Owner</span></th>

                </tr>
              </thead>
    
              <tbody>
              <tr>
                  <td><span className="tag is-primary">Michael Powers</span></td>
                  <td><span className="tag is-danger">BJS LLC</span></td>
                  <td><span className="tag is-warning">646 707 8268 </span></td>
                  <td><span className="tag is-link">liblackjavascript@gmail.com</span></td>
                  <td><span className="tag is-grey">CTO</span></td>
                  <td><span className="tag is-grey-dark">Information Technology</span></td>
                  <td><span className="tag is-info">10 Cinema Dr, Ithaca NY 14850</span></td>
                  <td><span className="tag is-grey-darker">no</span></td>
                  <td><span className="tag is-grey-light">yes</span></td>
                  <td><span className="tag is-grey-lighter">friend</span></td>
                  <td><span className="tag is-white-ter">guitar</span></td>

                  <td><span className="tag is-white-bis">blackjava.com</span></td>
                  <td><span className="tag">1/10/23</span></td>
                  <td><span className="tag is-info">He was very pleasant to speak with. Recommended looping in his team during our next call.</span></td>
                  <td><span className="tag">Michael</span></td>
                  <td><span className="tag">Powers</span></td>
                  <td><span className="tag">12/25/1980</span></td>
                  <td><span className="tag">Al Jackson</span></td>
                </tr>
              </tbody>
              
            </table>
            
        </div>
    );
}

export default ContactsList;

{/* <tfoot>
                <tr>
                  <th>You've</th>
                  <th>Reached </th>
                  <th>The </th>
                  <th>  Bottom </th>
                  <th> Of </th>
                  <th>  This</th>
                  <th>   Page</th>
                  <th>      List</th>
                  <th>Please </th>
                  <th>Don't</th>
                  <th>Forget</th>

                  <th>To</th>
                  <th>Add</th>
                  <th>10</th>
                  <th>New</th>
                  <th>Resources</th>
                  <th>Each</th>
                  <th>Week Thursday</th>





                </tr>
              </tfoot> */}