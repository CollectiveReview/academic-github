"use client";

import { Input } from "@/app/components/ui/input";
import { PasswordInput } from "@/app/components/custom/passwordInput";
import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { useForm } from "react-hook-form";
import Image from "next/image";
import { Separator } from "@/app/components/ui/separator";

const formSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  checkPassword: z.string(),
  checked: z.boolean(),
});

const SignInPage = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      checkPassword: "",
      checked: false,
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    console.log("Success!", values);
  }

  return (
    <>
      <div className="flex h-full items-center justify-center">
        <div className="border w-[95%] max-w-[500px] border-gray-100 rounded p-10 space-y-3 shadow-md">
          <div className="py-2">
            <h2>Create an account</h2>
          </div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 w-full"
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input type="text" placeholder="guest" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="guest@example.com"
                        {...field}
                      />
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
                      <PasswordInput
                        type="password"
                        placeholder="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checkPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Check Password</FormLabel>
                    <FormControl>
                      <PasswordInput
                        type="password"
                        placeholder="Check password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="checked"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md  py-1 ">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>

                    <FormLabel>
                      <div className="flex justify-between">
                        <div className="flex items-center space-x-2">
                          <Label>
                            <p>
                              I agree{" "}
                              <span className="text-gray-700 hover:text-black">
                                Terms of service
                              </span>
                              {" and "}
                              <span className="text-gray-700 hover:text-black">
                                privacy policy
                              </span>
                            </p>
                          </Label>
                        </div>
                      </div>
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                className="bg-gray-700 w-full"
              >
                SUBMIT
              </Button>
            </form>
          </Form>
          {/* <Separator className="my-4" />
          <div className="w-full flex justify-between items-center">
            <Link href="/sign-in" className="text-sm hover:text-gray-700">
              <p className="text-start">Don`t have account?</p>
            </Link>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default SignInPage;
