export type User = {
  
    email: string;
    password: string;
  };

  export const url = 'https://coding.zippy.com.gh/api';

  export interface LoginResponse {
    responseCode: string;
    responseDesc: string;
    accessToken: string;
    data: {
      email: string;
      password: string;
      name: string;
    };
  }

  export interface UserType {
    responseCode: string;
    responseDesc: string;
    data: {
      email: string;
      password: string;
      name: string;
    };
  }
  

  interface OrderDetails {
    orderId: string;
    custId: string;
    senderName: string;
    senderAddress: string;
    senderPhoneNumber: string;
    senderZoneName: string;
    receiverzoneName: string;
    receiverName: string;
    receiverAddress: string;
    receiverPhoneNumber: string;
    packageTypeDesc: string;
    pickupTime: string;
    deliveryTime: string;
    paymentStatus: boolean;
    status: string;
    totalAmount: number;
  }
  
  export interface OrdersType {
    responseCode: string;
    responseDesc: string;
    data: OrderDetails[];
    pageSize: number;
    currentPage: number;
    totalPages: number;
  }
  

 
  
  export interface OrdersDetailType {
    responseCode: string;
    responseDesc: string;
    data: OrderDetails;
  }
  

  interface StatusData {
    id: string;
    status: string;
  }
  
  export interface StatusType {
    responseCode: string;
    responseDesc: string;
    data: StatusData[];
  }
  