"use client";

import { Input } from "@/app/components/ui/input";
import { PasswordInput } from "@/app/components/custom/passwordInput";
import { Button } from "@/app/components/ui/button";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Label } from "@/app/components/ui/label";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import { useForm } from "react-hook-form";

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "@/app/api/firebase";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  username: z.string(),
  email: z.string(),
  password: z.string(),
  checkPassword: z.string(),
  checked: z.boolean(),
});

const SignUpPage = () => {
  const router = useRouter();

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
    const credential = createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        const uid = userCredential.user.uid;
        router.push(`/users/${uid}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(`${errorCode} ${errorMessage}`)
      });
  }
  const signUpwithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((userCredential) => {
        router.push(`/users/${userCredential.user.uid}`)
      })
      .catch((error) => {
        console.log(error)
      })
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
                      <Input type="text" placeholder="guest@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem><FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput type="password" placeholder="password" {...field} />
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
          <div >
            <Button
              className="bg-red-400 w-full"
              onClick={signUpwithGoogle} >
              Sign up with Google
            </Button>
          </div>

        </div>
      </div >
    </>
  );
};

export default SignUpPage;
