 import { useFormikContext } from "formik"
 import { TextField } from "@mui/material"

 export const InfoSubForm = () => {
    const {values,handleBlur,handleChange,errors} = useFormikContext()
    return (
        <>
    <TextField variant="standard" name='name' placeholder='Give me a name' value={values.name} onChange={handleChange} onBlur={handleBlur}/>
                    {errors?.name && (<span>{errors.name.message}</span>)}
                    <br/> 
                    <TextField variant="standard" name="price" placeholder='Give me a price' value={values.price} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    <TextField variant="standard" name="category" placeholder='Give me a category' value={values.category} onChange={handleChange} onBlur={handleBlur}/>
                    <br/>
                    </>
    )
}