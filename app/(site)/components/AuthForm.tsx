'use client';

import Button from "@/app/components/Button";
import Input from "@/app/components/input/Input";
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

        // NEXTAUTH Social Sign In
    }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {variant === 'REGISTER' && (
                    <Input  label="Name" register={register} id="name" errors={errors} />
                )}
                <Input  label="Email Address" type="email" register={register} id="email" errors={errors} />
                <Input  label="Password" type="password" register={register} id="password" errors={errors} />
                <div>
                    <Button disabled={isLoading} fullWidth type="submit">
                        {variant === 'LOGIN' ? 'Sign In' : 'Register'}
                    </Button>
                </div>
            </form>

        </div>
    </div>
  )
}

export default AuthForm