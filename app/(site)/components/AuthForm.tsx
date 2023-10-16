'use client';

import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = 'LOGIN' | 'REGISTER';

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN');
    const [isLoading, setIsLoading] = useState(false);

    const toggleVariant = useCallback(()=> {
        if(variant === 'LOGIN') {
            setVariant('REGISTER');
        }else {
            setVariant('LOGIN');
        }
    }, [variant]);

    const {
        register, 
        handleSubmit, 
        formState : {
          errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password:'',
        }
    })

    // onSUBMIT - HANDLER
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if(variant === 'REGISTER') {
            // AXIOS Register
        }

        if(variant === 'REGISTER') {
            // NEXT AUTH SIGNin
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        // NEXTAUTH Socail Sign In
    }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">AuthForm</div>
  )
}

export default AuthForm