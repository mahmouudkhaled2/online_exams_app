export interface InputFieldProps {
    type: string;
     id?: string;
     name?: string;
     label?: string;
     placeholder?: string;
     customStyles?: string
     handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
     handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RegisterValues {
    username: string;
    firstName: string;
    lastName: string;
    email: string; 
    password: string; 
    rePassword: string;
    phone: string;
  }


  export interface LoginValues {
    email: string; 
    password: string; 
  }

  export interface resetPasswordValues {
    newPassword: string; 
    rePassword: string; 
  }

  export interface SubmitButtonProps {
    title : string;
    isLoading?: boolean; 
    handleClick?: () => void;
  }

/*************************************/ 

export interface SubjectType { _id: string; name: string; icon: string; createdAt: string; }

export interface CustomButtonType {
  title: string, 
  additionalStyles?: string, 
  handleClick?: () => void, 
  disabled?: boolean
}
