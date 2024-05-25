"use client";

import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Required",
  }),
  email: z
    .string()
    .min(1, {
      message: "Required",
    })
    .email(),
  subject: z.string().min(1, {
    message: "Required",
  }),
  message: z.string().min(1, {
    message: "Required",
  }),
});

export default function FormContact() {
  const [isLoading, setIsLoading] = useState(false);

  function onSubmit(data: z.infer<typeof FormSchema>) {
    setIsLoading(true);

    const promise = emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
      data,
      {
        publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      },
    );

    toast.promise(promise, {
      loading: "Please waiting...",
      success: () => {
        form.reset();
        setIsLoading(false);
        return "Hooray! Sent successfully";
      },
      error: () => {
        setIsLoading(false);
        return "Oh no! My sistem have a trouble. Try again later.";
      },
    });
  }

  const form = useForm<z.infer<typeof FormSchema>>({
    disabled: isLoading,
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  return (
    <>
      <Toaster />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[30rem] space-y-6 rounded-md border border-dashed p-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
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
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject</FormLabel>
                <FormControl>
                  <Input placeholder="Subject" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea placeholder="Message" {...field} rows={6} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end gap-3">
            <Button type="button" disabled={isLoading} variant="outline" onClick={() => form.reset()}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
}
