"use client";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import Link from "next/link";
import { useEffect, useState } from "react";

import { auth } from "@/app/api/firebase";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { Separator } from "@/app/components/ui/separator";
import { zodResolver } from "@hookform/resolvers/zod";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";

const formSchema = z.object({
  email: z.string(),
  password: z.string(),
});

const LoginPage = () => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
    };
    checkAuthentication();
  }, []);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.email, values.password)
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // router.push(`/users/${userCredential.user.uid}`) //production
        router.push('/repos')  //development(v 0.1.0)
      })
      .catch((error) => { console.log(error.code, error.message) })
  }

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        // router.push(`/users/${userCredential.user.uid}`) //production
        router.push('/repos')  //development(v 0.1.0)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <>
      <div className="container flex h-full items-center justify-center ">
        <div className="flex border w-auto max-w-[95%] space-x-5 border-gray-100 bg-white shadow-md rounded p-5 space-y-3  items-center justify-center">
          <div className=" w-[300px] h-[300px]  items-center justify-center relative hidden md:block">
            <Image
              src="/assets/test/img300x300.png"
              alt=""
              fill
              className="object-cover object-center rounded"
            />
          </div>
          <div className="min-w-[320px]">
            <div className="py-2">
              <h2>Welcome to</h2>
              <h1 className="text-state-600 font-bold">Academic Github</h1>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="guest@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    {/* <Checkbox />
                    <Label>Remember me</Label> */}
                  </div>
                  <div className="flex justify-between items-center">
                    <Link
                      href="/sign-in"
                      className="text-sm hover:text-gray-700"
                    >
                      {/* <p className="text-start underline">Forgot Password</p> */}
                    </Link>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="bg-gray-700 w-full"
                >
                  LOGIN
                </Button>
              </form>
            </Form>
            <div className="py-5">
              <Button
                onClick={handleGoogleSignIn}
                type="submit"
                className="bg-red-400 w-full"
              >
                Sign in with Google
              </Button>
            </div>
            <Separator className="my-4" />
            <div className="w-full flex justify-between items-center">
              <Link href="/signup" className="text-sm hover:text-gray-700">
                <p className="text-start">Don`t have an account?</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
