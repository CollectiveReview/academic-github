"use client";

import React, { useState } from "react";
import { Button, TextArea, TextField } from "@radix-ui/themes";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import Spinner from "@/app/components/Spinner";

interface RepoForm {
  title: string;
  description: string;
}

const NewRepoPage = () => {
  const { register, handleSubmit } = useForm<RepoForm>();
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);

  return (
    <form
      className="space-y-3"
      onSubmit={handleSubmit(async (data) => {
        setSubmitting(true);
        const res = await axios.post("/api/repos", data);
        console.log(res);
        router.push("/repos");
      })}
    >
      <TextField.Root>
        <TextField.Input placeholder="Title" {...register("title")} />
      </TextField.Root>
      <TextArea placeholder="Description" {...register("description")} />
      <Button disabled={isSubmitting}> Create New Repository {isSubmitting && <Spinner />}</Button>
    </form>
  );
};

export default NewRepoPage;
