import Form from "./components/forms/Form";
import ContactForm from "./components/forms/ContactForm";
import CandidateForm from "./components/forms/CandidateForm";
import LeadForm from "./components/forms/LeadForm";


const NewForm = ({formValue}) => {
    return (
        <div>
            {formValue==="company" && <CompanyForm/>}
            {formValue==="candidate" && <CandidateForm/>}
            {formValue==="contact" && <ContactForm/>}
            {formValue==="lead" && <LeadForm/>}

        </div>
    );
}

export default NewForm;