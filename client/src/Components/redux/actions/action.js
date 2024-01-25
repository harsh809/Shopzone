export const getProducts =()=>async(dispatch)=>{
    const host = "";
    try {
        const data =  await fetch(`${host}/getproducts`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            }
        });
        
        const res = await data.json();

        dispatch({type:"SUCCESS_GET_PRODUCTS",payload:res})
    } catch (error) {
        dispatch({type:"FAIL_GET_PRODUCTS",payload:error.response})
    }
}