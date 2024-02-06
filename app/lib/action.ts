'use server'
const url = 'https://coding.zippy.com.gh/api';

interface LoginResponse {
  responseCode: string;
  responseDesc: string;
  // Add other properties if necessary
}

export const authenticate = async (formData: FormData): Promise<LoginResponse> => {
  const email = formData.get('email');
  const password = formData.get('password');

  try {
    const response = await fetch(`${url}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer 12345`
      },
      body: JSON.stringify({ email, password }),
    });

    const data: LoginResponse = await response.json();
  
    // Check if the response is okay (assuming there is an 'ok' field in your response)
    if (response.ok) {
      return data;
    } else {
      // If the response is not okay, show an alert
      window.alert(`Login failed: ${data.responseDesc || 'Unknown error'}`);
      throw new Error(`Login failed: ${data.responseDesc || 'Unknown error'}`);
    }
  } catch (error: any) {
    console.error('Login failed:', error);
    throw new Error(`Login failed: ${error.message || 'Unknown error'}`);
  }
};

export const getUserDetails=async()=>{
    try {
        const response = await fetch (`$(url)/get_user_details`)
        const data = await response.json()
        if(response.ok){
            return data
        }else{
            throw new Error ('Response not okay',data.message)
        }
    } catch (error) {
        console.error(error)
        
    }

}
export const getOrders = async (formData:FormData) => {
    const pageNumber =formData.get('pageNumber')
    const pageSize = formData.get('pageSize')
    try {
      const response = await fetch (`${url}/get_orders?page=${pageNumber}&pageSize=${pageSize}`);
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        console.error('Response not okay: ' + data.message);
      }
    } catch (error:any) {
      console.error(error);
      throw new Error('Failed to fetch user orders: ' + error.message);
    }
  };

  export const getOrderDetails = async (formData: FormData) => {
    const orderID = formData.get('orderNum');
    console.log('Order number', orderID);
  
    try {
      const response = await fetch(`${url}/get_order_details?orderId=${orderID}`);
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        console.error('Response not okay: ' + data.message);
      }
    } catch (error: any) {
      console.error(error);
      // Optionally rethrow the error if you want to handle it in the calling code
     
    }
  };
  
  export const getOrderStatuses = async () => {
    
    try {
      const response = await fetch (`${url}/get_order_statuses`);
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        throw new Error('Response not okay: ' + data.message);
      }
    } catch (error:any) {
      console.error(error);
      throw new Error('Failed to fetch user orders: ' + error.message);
    }
  };
  
  