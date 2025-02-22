import { z } from "zod";
import { FcGoogle } from "react-icons/fc"
import { FaGithub } from "react-icons/fa"
import  Link  from "next/link";
import { useForm  } from "react-hook-form";
import { zodResolver} from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas";

import { DottedSeparator } from "@/components/dotted-separator";
import { Input} from "@/components/ui/input";   
import { Button } from "@/components/ui/button";   
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle
} from "@/components/ui/card";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { useLogin } from "../api/use-login";

export const SignUpCard = () => {
    const { mutate } = useLogin();

    const form = useForm<z.infer<typeof loginSchema>>({
            resolver: zodResolver(loginSchema),
            defaultValues: {
                name: "",
                email: "",
                password: "",
            },
        });
    
        const onSubmit = (values: z.infer<typeof loginSchema>) => {
            mutate({json: values});
        };

    return(
        <Card className="w-full h-full md:w-[487px] border-none shadow-none">
            <CardHeader className="flex items-center justify-center text-center p-7">
                <CardTitle className="text-2xl ">
                    Sign Up
                </CardTitle>
                <CardDescription>
                    By signing up you agree to our {" "}
                    <Link href="/privacy">
                        <span className="text-blue-700">Privacy Policy </span>
                    </Link>
                    and{" "}
                    <Link href="/terms">
                        <span className="text-blue-700">Terms of Service</span>
                    </Link>
                </CardDescription>
            </CardHeader>
            <div className="px-7">
                <DottedSeparator />
            </div>
            <CardContent className="p-7">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                            name="name"
                            control={form.control}
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                {...field}
                                type = 'test'
                                placeholder="Enter Your Name"
                                />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    <FormField
                            name="email"
                            control={form.control}
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                {...field}
                                type = 'email'
                                placeholder="Enter Email address"
                                />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    <FormField
                            name="password"
                            control={form.control}
                            render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                <Input
                                {...field}
                                type = 'password'
                                placeholder="Enter Your Password"
                                />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                        />
                    <Button disabled={false} size="lg" className="w-full">
                        Sign Up
                    </Button>
                </form>
            </Form>
            </CardContent>
            <div className="px-7">
                <DottedSeparator></DottedSeparator>
            </div>
            <CardContent className="p-7 flex flex-col gap-y-4">
                <Button
                    disabled={false}
                    variant = 'secondary'
                    size = "lg"
                    className = "w-full"
                >
                    <FcGoogle />
                    Login with Google
                </Button>
                <Button
                    disabled={false}
                    variant = 'secondary'
                    size = "lg"
                    className = "w-full"
                >
                    <FaGithub />
                    Login with Github
                </Button>
            </CardContent>
            <div className ="px-7">
                <DottedSeparator/>
            </div>
            <CardContent className="p-7 flex items-center justify-center">
                <p>
                    Already have an account?
                    <Link href="/sign-in">
                        <span className="text-blue-700"> Sign In</span>
                    </Link>
                </p>
            </CardContent>
        </Card>
    );
};