import { useState } from 'react'
import {Formik} from 'formik'
import { validateForm } from './validations' 
import { formInitialValues } from './initialValues'
import {TextField, Button} from '@mui/material'
import { InfoSubForm } from './basicFormInfo'

export const Form = () => {
    const [step, setStep] = useState(0)
    return (<Formik
         initialValues={formInitialValues}
         onSubmit={(values)=> {
        }}
         validate={validateForm} // get a function
         validateOnBlur={true}// boolean
         validateOnChange={false}// boolean
         >
            {(props)=>(
                <form>
                    <InfoSubForm />
                    <TextField variant="standard" name="tags" placeholder='Give me a tags' value={props.values.tags} onChange={props.handleChange} onBlur={props.handleBlur}/>
                    <br/>
                    <TextField variant="standard" name="img" placeholder='Give me an img' value={props.values.img} onChange={props.handleChange} onBlur={props.handleBlur}/>
                    <br/>
                    <Button variant="contained" type='submit' onClick={props.handleSubmit}>Save the Data</Button>
                </form>
            )}
        </Formik>
    )
}