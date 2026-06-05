"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";

import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  email: z.email("Email inválido."),
  senha: z.string().min(5, "A senha precisa ter pelo menos 5 caracteres."),
});

export function FormEntrar() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      senha: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
  }

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Faça seu Login.</CardTitle>
        <CardDescription>Faça Login para Acessar sua Conta..</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite Seu Email"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <FieldGroup>
            <Controller
              name="senha"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Senha</FieldLabel>
                  <Input
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="Digite Sua Senha"
                    autoComplete="off"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>

          <Field orientation="vertical">
            <Button type="submit">Entrar</Button>
          </Field>
        </form>
      </CardContent>
    </Card>
  );
}
